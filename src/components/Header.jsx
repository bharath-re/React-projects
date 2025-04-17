import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600"> Comfy</h1>
      <nav className="space-x-6">
        <Link
          to="/login"
          className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-gray-700 hover:text-blue-600 font-medium transition duration-200"
        >
          Register
        </Link>
      </nav>
    </header>
  );
}

export default Header;
