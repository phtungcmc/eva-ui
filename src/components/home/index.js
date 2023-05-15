import React from "react";
import Intro from "./intro/Intro";
import CustomerReview from "./customer-review/CustomerReview";
import CategoryHome from "./category-home/CategoryHome";
import ProductsHome from "./products-home/ProductsHome";

const Home = () => {
  return (
    <div className="mt-10">
      <Intro />
      <CategoryHome />
      <ProductsHome />
      <CustomerReview />
    </div>
  );
};

export default Home;
