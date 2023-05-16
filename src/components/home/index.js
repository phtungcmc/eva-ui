import React from "react";
import Intro from "./intro/Intro";
import CustomerReview from "./customer-review/CustomerReview";
import Categories from "../categories";
import Products from "../products";

const Home = () => {
  return (
    <div className="mt-10">
      <Intro />
      <div className="flex flex-col text-center w-full">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          POPULAR CATEGORIES
        </h1>
      </div>
      <Categories limit={3} />
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
          TOP RATED SALES
        </h1>
      </div>
      <Products limit={8} />
      <CustomerReview />
    </div>
  );
};

export default Home;
