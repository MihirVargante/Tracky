import React from "react";
import { Link } from "react-router-dom";
import { FiSettings, FiHome, FiInfo } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg" style={{ width: "500px" }}>
      {/* Header */}
      <header className="bg-indigo-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold flex items-center">
              <FiHome className="h-6 w-6 mr-2" />
              Tracky
            </h1>
          </div>
          {/* Settings Icon */}
          <button>
            <FiSettings className="h-6 w-6 text-white" />
          </button>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="flex justify-evenly border-b-2 border-gray-200">
        <Link
          to="/"
          className="px-4 h-12 flex items-center gap-2 text-indigo-600 font-medium hover:bg-indigo-50"
        >
          <FiHome className="h-5 w-5" />
          Home
        </Link>
        <Link
          to="/about"
          className="px-4 h-12 flex items-center gap-2 text-indigo-600 font-medium hover:bg-indigo-50"
        >
          <FiInfo className="h-5 w-5" />
          About
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
