import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex space-x-8">
            <Link
              className="text-white hover:bg-blue-700 hover:text-white px-5 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              to="/"
            >
              Add Product
            </Link>
            <Link
              className="text-white hover:bg-blue-700 hover:text-white px-5 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              to="/manage"
            >
              Manage
            </Link>
            <Link
              className="text-white hover:bg-blue-700 hover:text-white px-5 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
              to="/find"
            >
              Find Product
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
