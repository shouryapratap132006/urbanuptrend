'use client';

import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import {
  getCart,
  updateCartItem,
  removeFromCart,
  saveOrder,
  saveCart,
} from '../../firebase/dbUtils';

import CartItem from '../../components/CartItem';
import PriceSummary from '../../components/PriceSummary';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [userUid, setUserUid] = useState(null);
  const [couponApplied, setCouponApplied] = useState(false);

  // 🔹 Load cart from Firebase or localStorage
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        const data = await getCart(user.uid);
        setCartItems(data || []);
      } else {
        const stored = localStorage.getItem('cart');
        if (stored) setCartItems(JSON.parse(stored));
      }
    });

    return () => unsubscribe();
  }, []);

  // 🔹 Remove Item
  const handleRemove = async (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);

    if (userUid) {
      await removeFromCart(userUid, id);
    } else {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
  };

  // 🔹 Update Item Quantity
  const handleUpdate = async (updatedItem) => {
    const updated = cartItems.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setCartItems(updated);

    if (userUid) {
      await updateCartItem(userUid, updatedItem);
    } else {
      localStorage.setItem('cart', JSON.stringify(updated));
    }
  };

  // 🔹 Place Order
  const handlePlaceOrder = async () => {
    const total = calculateSubtotal();

    if (userUid) {
      await saveOrder(userUid, cartItems, total);
      await saveCart(userUid, []); // Clear cart
    } else {
      const prev = JSON.parse(localStorage.getItem('orders')) || [];
      prev.push({
        items: cartItems,
        total,
        date: new Date().toISOString(),
      });
      localStorage.setItem('orders', JSON.stringify(prev));
      localStorage.removeItem('cart');
    }

    setCartItems([]);
    alert('Order placed successfully!');
  };

  // 🔹 Subtotal, Discount & Total
  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  const discount = couponApplied ? Math.floor(calculateSubtotal() * 0.1) : 0;

  const applyCoupon = () => {
    if (!couponApplied) setCouponApplied(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">My Bag ({cartItems.length} Items)</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <CartItem
                key={`${item.id}-${item.size}-${item.color}`}
                item={item}
                onRemove={handleRemove}
                onUpdate={handleUpdate}
              />
            ))}
          </div>

          {/* Price Summary */}
          <PriceSummary
            subtotal={calculateSubtotal()}
            discount={discount}
            applyCoupon={applyCoupon}
            couponApplied={couponApplied}
            onPlaceOrder={handlePlaceOrder}
          />
        </div>
      )}
    </div>
  );
}

