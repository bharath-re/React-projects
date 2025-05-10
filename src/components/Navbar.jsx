import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import homeLogo from "../assets/homelogo.svg";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply theme to <html> tag
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={homeLogo} alt="logo" className="w-25 h-25 object-contain" />
          <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-300"></h1>
        </div>

        {/* Links */}
        <ul className="flex-1 flex justify-center space-x-8 text-lg font-medium text-gray-700 dark:text-gray-200">
          <li>
            <Link to="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-indigo-600">
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-indigo-600">
              Cart
            </Link>
          </li>
        </ul>

        {/* Cart and Theme Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative group">
            <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-white group-hover:text-indigo-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>

          <button
            onClick={handleThemeToggle}
            className="px-3 py-1 border rounded-md text-sm text-indigo-600 dark:text-indigo-300 border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
