import React, { Suspense } from "react";
import Filters from "./Filters";
import AllProducts from "./AllProducts";
import { getOONCats } from "@/utils/categories";
import { getProducts } from "@/utils/products";

const CategoryPage = async ({ params }) => {
  // const products = getProducts().then((res) => res.data.json);
  // Category name from url
  const slug = params.category;

  //Destructure data from db
  const categoryData = await getOONCats();
  const productData = await getProducts();
  // .then((res) => res.json())
  // .then((res) => res.data.data);
  // const thirteenTwoProds = await fetch("http://localhost:3000/api/products", {
  //   method: "GET",
  // }).then((res) => res.json());

  // Main items
  const { categoryList } = categoryData?.data;
  const mainCategories = categoryList[0]?.children;
  const allProducts = productData?.data?.products;

  // Take object of top layer categories from category based on page
  const categoryL1 = mainCategories?.find((item) => {
    if (slug === "men") return item.name === "Masc";
    if (slug === "women") return item.name === "Femme";
  });

  return (
    <div className="px-40 pt-10 pb-12 flex flex-col">
      {/* Title from categoryL1 name */}
      <h1 className="mb-4 text-4xl font-bold uppercase">{slug}</h1>
      {/* {console.log("layer1cat", categoryL1)} */}
      {/* {console.log("allprods", productData)} */}
      {/* Category Filters */}
      <Filters categories={categoryL1} />
      {/* Product Count */}
      <p className="mb-5 self-end">{`${allProducts?.items?.length} listings`}</p>
      {/* Product Display */}
      <Suspense fallback={<div>Loading Products...</div>}>
        <AllProducts categories={categoryL1} products={allProducts} />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
