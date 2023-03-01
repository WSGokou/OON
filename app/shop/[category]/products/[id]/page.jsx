import React from "react";
import { getProducts } from "@/utils/products";
import ProductDetails from "./ProductDetails";
import BackButton from "./BackButton";

const ProductPage = async ({ params, designer }) => {
  const id = Number(params.id);
  const productData = await getProducts();
  const allProducts = productData?.data?.products;
  const chosenProduct = allProducts?.items?.find((item) => item.id === id);

  return (
    <div className="pt-16 pb-44 px-20 flex flex-col">
      {/* {console.log("chosen product", chosenProduct)} */}
      {/* Back Button */}
      <BackButton />
      {/* Product Diplay and details */}
      <ProductDetails chosenProduct={chosenProduct} />
      {/* More from designer */}
      <div>
        <p></p>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPage;
