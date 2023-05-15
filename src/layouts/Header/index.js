import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full top-0 flex justify-center items-center text-gray-600 body-font shadow-lg fixed z-50 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Eva Furniture</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/categories" className="mr-5 hover:text-gray-900">
            Categories
          </Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
        </nav>
        <Link
          to="/cart"
          className="inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base text-white mt-4 md:mt-0"
        >
          Go to cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;
