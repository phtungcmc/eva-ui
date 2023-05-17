import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const Header = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <header className="w-full top-0 flex justify-center items-center text-gray-600 body-font shadow-lg fixed z-50 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-lg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>
          <span className="ml-3 text-xl">Eva Furniture</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/categories" className="mr-5 hover:text-gray-900">
            Categories
          </Link>
          <Link to="/products" className="mr-5 hover:text-gray-900">
            Products
          </Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">
            Contact us
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => openCart()}
          className="border-none outline-none active:scale-110 transition-all duration-300 relative"
        >
          <ShoppingBagIcon className="icon-style text-slate-900 transition-all duration-300 w-6 h-6" />
          <div
            className={`absolute top-4 left-2 shadow w-5 h-5 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${"bg-indigo-100 text-slate-900 shadow-slate-100"}`}
          >
            {cartQuantity}
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
