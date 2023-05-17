import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

import { useShoppingCart } from "../../context/ShoppingCartContext";
import { apiClient } from "../../services/ShopifyClient";

const Products = ({ limit = 0 }) => {
  const { increaseCartQuantity } = useShoppingCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const GRAPHQL_QUERY = `
        query {
          products(first: 20) {
            nodes {
              id,
              images(first: 1){
                nodes {
                  id,
                  url
                }
              }
              title,
              description,
            }
          }
        }
      `;

      const response = await apiClient(GRAPHQL_QUERY);
      if (response) {
        setProducts(response.props.data.products.nodes);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      {!limit ? (
        <div className="flex flex-col text-center w-full mt-28">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            ALL PRODUCTS
          </h1>
        </div>
      ) : (
        <></>
      )}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 rounded-lg shadow ml-4"
              >
                <Link className="block relative h-48 rounded overflow-hidden cursor-pointer">
                  <img
                    alt={item.title}
                    className="object-cover w-full h-full block"
                    src={item?.images?.nodes[0]?.url}
                  />
                </Link>
                <div className="mt-4 text-left">
                  <Link className=" cursor-pointer">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase h-8">
                      {item.title}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium h-20">
                      {item.description
                        ? item.description
                        : "Ready Dining Chair without upholstery"}
                    </h2>
                  </Link>
                  <div className="flex items-center justify-between">
                    <p className="mt-1 text-md font-semibold">
                      ${(index + 1) * 100}
                    </p>
                    <button
                      onClick={() =>
                        increaseCartQuantity({
                          ...item,
                          name: item.title,
                          imgUrl: item.images.nodes[0].url,
                          price: (index + 1) * 100,
                        })
                      }
                      type="button"
                      className="flex items-center justify-between bg-indigo-500 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 rounded-sm"
                    >
                      <span className="text-white">Add to cart</span>
                      <ShoppingBagIcon className="ml-5 icon-style text-white  w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
