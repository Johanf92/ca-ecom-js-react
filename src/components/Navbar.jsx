import { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import FontAwesome cart icon

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white-10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Johan's<span className="text-yellow-500">.Ecom</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-yellow-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              className="text-yellow-300 hover:text-white transition-colors"
            >
              Products
            </a>

            <a
              href="#contact"
              className="text-yellow-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Shopping Cart Icon */}
            <a
              href="/cart"
              className="relative text-yellow-300 hover:text-white"
            >
              <FaShoppingCart className="text-2xl" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-1">
                0
              </span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
        </div>
      </div>
    </nav>
  );
};
