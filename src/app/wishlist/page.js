"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const removeFromWishlist = (id) => {
    const updated = wishlist.filter((item) => String(item.id) !== String(id));
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inWishlist={true} // Always true on wishlist page
              onRemove={removeFromWishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;



