'use client';

import { useState, useEffect } from 'react';

import CartItem from '../../components/CartItem';
import PriceSummary from '../../components/PriceSummary';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cart');
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleUpdate = (updatedItem) => {
    const updated = cartItems.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const discount = couponApplied ? Math.floor(subtotal * 0.1) : 0;

  const applyCoupon = () => {
    if (!couponApplied) {
      setCouponApplied(true);
    }
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
                key={item.id}
                item={item}
                onRemove={handleRemove}
                onUpdate={handleUpdate}
              />
            ))}
          </div>

          {/* Price Summary */}
          <PriceSummary
            subtotal={subtotal}
            discount={discount}
            applyCoupon={applyCoupon}
            couponApplied={couponApplied}
          />
        </div>
      )}
    </div>
  );
}
