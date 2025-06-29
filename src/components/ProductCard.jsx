"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import {
  addToWishlist,
  removeFromWishlist,
  getWishlist,
} from "../firebase/dbUtils";

const ProductCard = ({
  product,
  inWishlist: initialInWishlist = false,
  onRemove,
}) => {
  const [inWishlist, setInWishlist] = useState(initialInWishlist);
  const [userUid, setUserUid] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserUid(user.uid);
        const wishlist = await getWishlist(user.uid);
        const isWished = wishlist.some((item) => item.id === product.id);
        setInWishlist(isWished);
      } else {
        setUserUid(null);
        setInWishlist(false);
      }
    });

    return () => unsubscribe();
  }, [product.id]);

  const handleWishlistClick = async (e) => {
    e.stopPropagation();

    if (!userUid) {
      alert("Please log in to use the wishlist.");
      return;
    }

    if (inWishlist) {
      await removeFromWishlist(userUid, product.id); // ✅ fixed
      setInWishlist(false);
      onRemove?.(product.id); // optional local sync
    } else {
      await addToWishlist(userUid, product);
      setInWishlist(true);
    }
  };

  return (
    <div className="border rounded-xl p-2 relative shadow transition-all duration-300 hover:shadow-md w-full">
      {/* Tag */}
      {product.tag && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
          {product.tag}
        </div>
      )}

      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10" onClick={handleWishlistClick}>
        <Heart
          className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${
            inWishlist ? "text-red-500 scale-110" : "text-gray-400 hover:text-red-500"
          }`}
          fill={inWishlist ? "currentColor" : "none"}
        />
      </div>

      {/* Product Link */}
      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          <div className="overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-2 space-y-1 px-1">
            <div className="text-sm flex items-center gap-1 text-yellow-600">
              ⭐ {product.rating}
            </div>
            <h3 className="font-medium text-sm sm:text-base leading-5">
              {product.name}
            </h3>
            <div className="text-sm sm:text-base">
              <span className="font-semibold">₹{product.price}</span>
              <span className="line-through text-gray-500 ml-1">
                ₹{product.originalPrice}
              </span>
              <span className="text-green-600 ml-1">{product.discount}% off</span>
            </div>
            <div className="text-xs sm:text-sm text-gray-700 border border-gray-300 rounded w-max px-2 py-0.5">
              {product.label}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
