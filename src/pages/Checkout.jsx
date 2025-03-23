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
    localStorage.removeItem("cart"); // Clear cart
    setCartItems([]); // Update state
    navigate("/checkout-success"); // Navigate to success page
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-center mt-6 mb-8">Checkout</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-center">Your cart is empty!</p>
      ) : (
        <div>
          <ul className="space-y-4 mt-4">
            {cartItems.map((item) => (
              <li key={item.id} className="border-b py-2">
                <div className="flex justify-between items-center">
                  <span>
                    {item.title} x {item.quantity}
                  </span>
                  <span className="font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex justify-between">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">${totalAmount.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-6 w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition cursor-pointer"
          >
            Proceed to Payment
          </button>

          <Link
            to="/"
            className="mt-4 font-bold cursor-pointer text-center hover:text-yellow-500 transition block text-lg"
          >
            Return to Homepage
          </Link>
        </div>
      )}
    </div>
  );
}

export default Checkout;
