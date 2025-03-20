import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out 
      ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }
    `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white my-4"
        >
          Home
        </Link>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="text-2xl font-semibold text-white my-4"
        >
          Contact
        </Link>

        <Link
          to="/cart"
          onClick={() => setMenuOpen(false)}
          className="relative text-2xl font-semibold text-white my-4 flex items-center gap-2"
        >
          <FaShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
            0
          </span>
          Cart
        </Link>
      </nav>
    </div>
  );
};
