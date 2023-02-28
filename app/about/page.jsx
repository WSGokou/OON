import { getCategories, getOONCats } from "@/utils/categories";
import { getProducts } from "@/utils/products";
import React from "react";

const AboutPage = async () => {
  // const dataArray = Object.entries(data);
  // const categoryData = await getCategories();
  // const { categoryList } = categoryData.data;
  // const categoryL1 = categoryList?.filter(
  //   (item) => item.name.toLowerCase() === "women"
  // );

  const productData = await getProducts();
  const { products } = productData;

  const oonCategories = await getOONCats();
  let { categoryList } = oonCategories;
  categoryList = categoryList[0].children;

  return (
    <div>
      {/* {console.log("catData", categoryList)} */}
      {/* {console.log("proddata", products.items[0])} */}
      {console.log("oon", categoryList)}
      <p>AboutPage</p>
      {/* {catList.map((item, idx) => (
        <p key={idx}>{item.name}</p>
      ))} */}
      {/* {products?.items.map((item) => {
        console.log("name", item.id);
      })} */}
    </div>
  );
};

export default AboutPage;
