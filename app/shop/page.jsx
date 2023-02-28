import Link from "next/link";
import React from "react";
import Product from "./[category]/products/Product";
import Heart from "../assets/icons/heart.png";

const ShopPage = async () => {
  return (
    <div className="pt-20 pb-40 flex flex-col items-center bg-[${Heart}]">
      <p className="mb-[508px] text-5xl font-bold w-[1120px] h-56">
        Check out our oneoff pieces from our indie designers!
        <br />
        <br />
        The very best in sustainable fashion
      </p>
      {/* Main category page links */}
      <div className="flex h-[420px] text-5xl font-bold mb-52 gap-x-8 justify-center items-center">
        {[
          ["WOMEN", "/shop/women"],
          ["MEN", "/shop/men"],
          ["ACCESSORIES", "/shop/gear"],
        ].map(([title, url]) => (
          <Link
            key={title}
            href={url}
            className="w-[420px] h-full border-black border-10 flex justify-center items-center bg-inactive-orange hover:bg-active-orange"
          >
            {title}
          </Link>
        ))}
      </div>
      <p className="mb-20 text-5xl font-bold">NEW IN</p>
      {/* Product Square */}
      <Product />
    </div>
  );
};

export default ShopPage;
