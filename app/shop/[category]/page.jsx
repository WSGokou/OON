import React from "react";
import Filters from "./Filters";
import AllProducts from "./AllProducts";

const CategoryPage = ({ params }) => {
  const id = params.category;

  return (
    <div className="flex flex-col">
      <Filters />
      <AllProducts />
    </div>
  );
};

export default CategoryPage;
