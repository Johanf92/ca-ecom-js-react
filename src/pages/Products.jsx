import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PRODUCTS_URL = "https://v2.api.noroff.dev/online-shop";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(PRODUCTS_URL);
        const json = await response.json();
        setProducts(json.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading)
    return <div className="text-center text-lg">Loading products...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading products</div>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition"
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
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
