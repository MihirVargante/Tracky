import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLogout }) => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-lg font-semibold hover:text-gray-200">
            Home
          </Link>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
