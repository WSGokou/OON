import React from "react";
import Product from "../shop/[category]/products/Product";
import Link from "next/link";
import { getProducts } from "../../utils/products";

const ShopLatest = async () => {
  const productData = await getProducts();
  const allProducts = productData?.data?.products?.items;

  return (
    <div className="pt-24 flex flex-col text-center items-center">
      {/* {console.log(productData.data.products.items)} */}
      <p className="mb-16 text-5xl font-bold text-center">Latest in the shop</p>
      {/* Product display */}
      <div className="mb-16 gap-x-4 flex justify-center text-left w-max overflow-hidden">
        {/* Product Square */}
        {allProducts?.slice(0, 10).map((item) => (
          <Product
            key={item.id}
            productId={item.id}
            name={item.name}
            price={item.price_range.minimum_price.regular_price.value}
            media={item.media_gallery[0].url}
          />
        ))}
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
