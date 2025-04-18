import React from "react";

import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const [loading, error, data] = useFetch("https://dummyjson.com/products");

  if (loading) {
    return (
      <div className="flex h-[90vh] justify-center items-center">
        <span className="loading loading-spinner loading-xl text-primary"></span>{" "}
        {/*daisy ui*/}
      </div>
    );
  }

  return (
    <div >
      {data.products.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.thumbnail}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default Products;
