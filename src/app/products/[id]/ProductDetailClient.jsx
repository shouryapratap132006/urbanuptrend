'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import ProductCard from '../../../components/ProductCard';

export default function ProductDetailClient({ product, similarItems }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [showOffers, setShowOffers] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));

    const storedCart = localStorage.getItem('cart');
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const addToWishlist = (product) => {
    if (isInWishlist(product.id)) return;
    const updated = [...wishlist, product];
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem('wishlist', JSON.stringify(updated));
  };

  const addToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      qty: 1,
    };

    const exists = cart.some(
      (item) =>
        item.id === cartItem.id &&
        item.size === cartItem.size &&
        item.color === cartItem.color
    );

    if (exists) {
      alert('Item already in cart');
      return;
    }

    const updated = [...cart, cartItem];
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    alert('Item added to bag!');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-[3/4] overflow-hidden rounded-lg border">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-5">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-2xl font-semibold">{product.name}</h1>
            <Heart
              className={`w-6 h-6 cursor-pointer transition ${
                isInWishlist(product.id) ? 'text-red-500 scale-110' : 'text-gray-400'
              }`}
              onClick={() =>
                isInWishlist(product.id)
                  ? removeFromWishlist(product.id)
                  : addToWishlist(product)
              }
              fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
            />
          </div>

          <p className="text-yellow-600">⭐ {product.rating}</p>
          <p className="text-sm text-gray-600">{product.description}</p>

          {/* Price */}
          <div className="text-xl font-bold">
            ₹{product.price}
            <span className="text-gray-400 line-through ml-2 text-base">
              ₹{product.originalPrice}
            </span>
            <span className="text-green-600 ml-2 text-base">
              {product.discount}% OFF
            </span>
          </div>

          {/* Offers */}
          <div>
            <button
              className="text-blue-600 text-sm underline"
              onClick={() => setShowOffers((prev) => !prev)}
            >
              {showOffers ? 'Hide Offers' : 'Show Available Offers'}
            </button>
            {showOffers && (
              <ul className="text-sm mt-2 list-disc list-inside space-y-1 text-gray-700">
                <li>10% Instant Discount on UPI</li>
                <li>₹50 Cashback on First Order</li>
                <li>Free Delivery above ₹599</li>
              </ul>
            )}
          </div>

          {/* Sizes */}
          <div>
            <p className="text-sm font-medium mb-1">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size ? 'bg-black text-white' : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          {product.colors?.length > 0 && (
            <div>
              <p className="text-sm font-medium mb-1">Select Color</p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-black' : ''
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Highlights */}
          <div className="mt-10 border p-5 rounded-lg">
            <h2 className="font-semibold text-lg mb-4">Key Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm">
              <div><span className="text-gray-500">Design:</span> {product.highlights.design}</div>
              <div><span className="text-gray-500">Fit:</span> {product.highlights.fit}</div>
              <div><span className="text-gray-500">Neck:</span> {product.highlights.neck}</div>
              <div><span className="text-gray-500">Occasion:</span> {product.highlights.occasion}</div>
              <div><span className="text-gray-500">Sleeve:</span> {product.highlights.sleeve}</div>
              <div><span className="text-gray-500">Wash Care:</span> {product.highlights.washCare}</div>
            </div>
          </div>

          {/* Return Info */}
          <div className="mt-6">
            <details className="border p-4 rounded">
              <summary className="cursor-pointer font-semibold">15 Days Return & Exchange</summary>
              <p className="mt-2 text-sm text-gray-600">
                Easy returns available within 15 days of delivery.
              </p>
            </details>
          </div>

          {/* Add to Cart */}
          <button
            onClick={addToCart}
            className="w-full bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded font-semibold mt-2"
          >
            ADD TO BAG ({selectedSize}, {selectedColor})
          </button>
        </div>
      </div>

      {/* Similar Items */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Similar Items</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {similarItems.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              inWishlist={isInWishlist(item.id)}
              onAdd={addToWishlist}
              onRemove={removeFromWishlist}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
