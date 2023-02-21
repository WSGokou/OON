import Image from "next/image";
import Link from "next/link";
import React from "react";
import Heart from "../../assets/icons/heart.svg";

const Product = ({ image, price, title, designer }) => {
  return (
    <div className="w-64 flex flex-col group">
      {/* Product Square */}
      <Link href="/shop/products/1">
        <div className="h-64 w-full mb-2 border-black bg-white group-hover:bg-gradient-to-r from-[#ffbc1014] to-[#ffbc1014] border-10 relative">
          <Image src={Heart} alt="Product" className="h-full w-full m-auto" />
          <Image
            src={Heart}
            alt="Wishlist"
            className="hidden group-hover:inline-block absolute top-2 right-2 z-10"
          />
        </div>
        <div className="mb-1 flex justify-between text-base font-semibold uppercase">
          <p>{title || "Product Name"}</p>
          <p>{price || "£69.00"}</p>
        </div>
      </Link>
      <p className="text-sm mr-auto">{designer || "Designer Name"}</p>
    </div>
  );
};

export default Product;
