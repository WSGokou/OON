import React from "react";
import Product from "../shop/[category]/products/Product";
import Link from "next/link";

const ShopLatest = () => {
  return (
    <div className="pt-24 flex flex-col text-center items-center">
      <p className="mb-16 text-5xl font-bold text-center">Latest in the shop</p>
      {/* Product display */}
      <div className="mb-16 flex justify-center items-center">
        {/* Product Square */}
        <Product />
      </div>
      <Link
        href="/shop"
        className="w-96 h-12 py-2.5 px-5 flex border-5 border-black bg-black text-white hover:text-active-orange text-xl font-semibold justify-center items-center uppercase"
      >
        shop
      </Link>
    </div>
  );
};

export default ShopLatest;
