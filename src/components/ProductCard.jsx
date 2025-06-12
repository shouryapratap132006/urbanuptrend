// components/ProductCard.jsx
import { Heart } from "lucide-react";
import Link from "next/link";

const ProductCard = ({ product, inWishlist = false, onAdd, onRemove }) => {
  return (
    <div className="border rounded-xl p-2 relative shadow transition-all duration-300 hover:shadow-md w-full">
      {/* Tag */}
      {product.tag && (
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-0.5 rounded">
          {product.tag}
        </div>
      )}

      {/* Wishlist Icon */}
      <div
        className="absolute top-2 right-2 z-10"
        onClick={(e) => {
          e.stopPropagation(); // prevent Link navigation
          if (inWishlist) {
            onRemove?.(product.id);
          } else {
            onAdd?.(product);
          }
        }}
      >
        <Heart
          className={`w-5 h-5 cursor-pointer transition-transform duration-200 ${
            inWishlist ? "text-red-500 scale-110" : "text-gray-400 hover:text-red-500"
          }`}
          fill={inWishlist ? "currentColor" : "none"}
        />
      </div>

      {/* Wrap Product in Link */}
      <Link href={`/products/${product.id}`}>
        <div className="cursor-pointer">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg aspect-[3/4]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
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
              <span className="text-green-600 ml-1">
                {product.discount}% off
              </span>
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
