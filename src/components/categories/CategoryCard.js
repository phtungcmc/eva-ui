import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category: { image, title, description } }) => {
  return (
    <Link to={`/products`} className="lg:w-[30%] ml-4 mb-4">
      <div className="h-full bg-gray-100 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
        <img
          className="w-full h-64 object-cover object-center rounded hover:opacity-75"
          alt="item"
          src={image?.url}
        />
        <div className="px-8 py-10">
          <div>
            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
          </div>
          <span className="text-indigo-500 inline-flex items-center">
            Explore All Items
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
