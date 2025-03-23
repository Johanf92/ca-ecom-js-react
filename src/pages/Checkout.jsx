import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCartItems([]);
    navigate("/checkout-success");
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-6 mb-8">Checkout</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-700">Your cart is empty!</p>
          <Link
            to="/"
            className="mt-4 inline-block font-bold text-lg text-yellow-500 hover:text-yellow-600 transition"
          >
            Go back to shopping
          </Link>
        </div>
      ) : (
        <div>
          <ul className="space-y-4 mt-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div className="flex-1">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <div className="text-sm text-gray-500">x {item.quantity}</div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 text-sm ml-4"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <span className="font-semibold text-xl">Total:</span>
            <span className="font-bold text-xl text-green-600">
              ${totalAmount.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-yellow-500 text-white font-semibold py-3 rounded-lg hover:bg-yellow-600 transition cursor-pointer"
          >
            Proceed to Payment
          </button>

          <Link
            to="/"
            className="mt-4 block text-center font-bold text-lg cursor-pointer hover:text-yellow-500 transition"
          >
            Return to Homepage
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
