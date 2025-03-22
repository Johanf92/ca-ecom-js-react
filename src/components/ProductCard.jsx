import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div
      className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition bg-neutral-100
"
    >
      <img
        src={product.image.url}
        alt={product.image.alt}
        className="w-full h-48 object-cover mb-2 rounded"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold text-lg mt-2">
        ${product.discountedPrice.toFixed(2)}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="mt-3 block text-center bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 cursor-pointer transition"
      >
        View Product
      </Link>
    </div>
  );
}

export default ProductCard;
