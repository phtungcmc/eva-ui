import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-3/6 lg:h-full md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Make your home more beautiful than ever
          </h1>
          <p className="mb-8 leading-relaxed">
            Dolore aliqua aute culpa exercitation occaecat labore consequat eu
            anim irure tempor consequat. Culpa sit commodo minim quis magna
            labore dolor elit tempor tempor mollit consectetur. Dolor
            exercitation consectetur mollit consectetur quis nostrud
            exercitation id deserunt quis occaecat proident incididunt.
          </p>
          <div className="flex justify-center">
            <Link
              to="/products"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
