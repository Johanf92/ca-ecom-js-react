import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Order Successful!</h1>
        <p className="text-lg mb-6">Thank you for your purchase.</p>
        <Link
          to="/"
          className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition cursor-pointer inline-block max-w-xs"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
