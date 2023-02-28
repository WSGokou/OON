"use client";

import React, { useState } from "react";
import Product from "./products/Product";
import Paginator from "./Paginator";

const AllProducts = ({ categories, products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  // split products based on page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.items?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageId) => {
    setCurrentPage(pageId);

    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-10 mb-20 relative">
        {currentProducts?.map((item) => (
          <Product
            key={item.id}
            productId={item.id}
            name={item.name}
            price={item.price_range.minimum_price.regular_price.value}
            media={item.media_gallery[0].url}
          />
        ))}
      </div>
      <div>
        {products?.items?.length > productsPerPage && (
          <Paginator
            defaultPage={1}
            count={Math.ceil(products?.items?.length / productsPerPage)}
            page={Number(currentPage)}
            onChange={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
