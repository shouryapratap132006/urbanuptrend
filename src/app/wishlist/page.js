"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { getWishlist, removeFromWishlist } from "../../firebase/dbUtils";
import ProductCard from "../../components/ProductCard";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        const wishlistItems = await getWishlist(user.uid); // ✅ uid passed
        setWishlist(wishlistItems);
      } else {
        setUserUid(null);
        setWishlist([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleRemove = async (product) => {
    if (!userUid) return;
    await removeFromWishlist(userUid, product.id); // ✅ pass uid and product ID
    setWishlist((prev) => prev.filter((item) => item.id !== product.id));
  };

  // ✅ Remove duplicates and items without an id
  const uniqueWishlist = wishlist.filter(
    (item, index, self) =>
      item.id && index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>

      {uniqueWishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {uniqueWishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              inWishlist={true}
              onRemove={() => handleRemove(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
