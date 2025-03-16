import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://v2.api.noroff.dev/online-shop/";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${BASE_URL}${id}`);
        const json = await response.json();
        setProduct(json.data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.title} to cart`);
  };

  if (isLoading)
    return <div className="text-center text-lg">Loading product...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading product</div>
    );
  if (!product) return null;

  return (
    <div className="container mx-auto p-4 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center w-full">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image.url}
            alt={product.image.alt}
            className="w-full max-w-md md:max-w-sm lg:max-w-md h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="mt-4 text-xl font-semibold">
            Price:{" "}
            <span className="text-green-500">
              ${product.discountedPrice.toFixed(2)}
            </span>
          </p>
          <p className="mt-2 text-gray-500 line-through">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-2">Rating: ⭐ {product.rating}/5</p>

          {/* Quantity Selector & Add to Cart */}
          <div className="mt-4 flex items-center space-x-4">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg"
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded-lg"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-4 w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>

          {/* Reviews Section */}
          <h3 className="text-xl font-semibold mt-6">Reviews:</h3>
          {product.reviews.length > 0 ? (
            <ul className="mt-2">
              {product.reviews.map((review) => (
                <li key={review.id} className="border-t py-2">
                  <p>
                    <span className="font-bold">{review.username}:</span>{" "}
                    {review.description} ⭐ {review.rating}/5
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
