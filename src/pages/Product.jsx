import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BASE_URL = "https://v2.api.noroff.dev/online-shop/";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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

  if (isLoading)
    return <div className="text-center text-lg">Loading product...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Error loading product</div>
    );
  if (!product) return null;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image.url}
          alt={product.image.alt}
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <div>
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

          <h3 className="text-xl font-semibold mt-4">Reviews:</h3>
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
