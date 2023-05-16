import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { apiClient } from "../../services/ShopifyClient";

const Categories = ({ limit = 0 }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const GRAPHQL_QUERY = `
        query {
          collections(first: 100) {
            nodes {
              id,
              title,
              handle,
              image {
                id,
                url,
                altText
              },
              description
            }
          }
        }
      `;

      const response = await apiClient(GRAPHQL_QUERY);
      if (response) {
        setCategories(response.props.data.collections.nodes);
      }
    };

    getCategories();
  }, []);

  return (
    <>
      {!limit ? (
        <div className="flex flex-col text-center w-full mt-28">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            ALL CATEGORIES
          </h1>
        </div>
      ) : (
        <></>
      )}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-between">
            {categories.map((category) => (
              <React.Fragment key={category.id}>
                <CategoryCard category={category} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
