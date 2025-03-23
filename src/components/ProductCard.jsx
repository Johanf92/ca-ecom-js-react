import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const discount =
    product.price > product.discountedPrice
      ? (
          ((product.price - product.discountedPrice) / product.price) *
          100
        ).toFixed(0)
      : null;

  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-300 bg-neutral-100 transform hover:scale-105">
      <div className="relative">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-48 object-cover mb-2 rounded-t-lg"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold truncate">{product.title}</h2>
        <p className="text-gray-600 mt-2 truncate">{product.description}</p>

        <div className="flex items-center mt-3">
          <p className="font-bold text-xl text-green-600">
            ${product.discountedPrice.toFixed(2)}
          </p>
          {discount && (
            <p className="text-sm text-gray-500 line-through ml-2">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>

        <div className="flex items-center mt-2">
          <span className="text-yellow-500">
            {"⭐".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-500 ml-2">({product.rating}/5)</span>
        </div>

        <Link
          to={`/product/${product.id}`}
          className="mt-4 block text-center bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer transition"
        >
          View Product
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
