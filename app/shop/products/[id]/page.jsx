import Image from "next/image";
import Link from "next/link";
import React from "react";
import shopbg from "../../../assets/images/shopbg.png";

const ProductPage = ({ params, image, price, title, designer }) => {
  let images;
  const id = params.id;

  return (
    <div className="pt-16 pb-44 px-20 flex flex-col">
      {/* Back Button */}
      <div className="mr-auto mb-7 gap-x-2 flex items-center text-xl font-semibold">
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 7.0625H3.59063L8.83125 1.82187L7.5 0.5L0 8L7.5 15.5L8.82188 14.1781L3.59063 8.9375H15V7.0625Z"
            fill="black"
          />
        </svg>
        <p>Back</p>
      </div>
      ProductPage for {id}
      {/* Product Diplay and details */}
      <div className="flex">
        {/* Small pictures */}
        <div className="flex flex-col mr-3">
          <Image
            src={images}
            alt="ProductSm"
            className="w-28 h-28 border-2 border-black"
          />
        </div>
        {/* Large picture */}
        <div className="w-[568px] h-[568px] border-10 border-black mr-16 relative">
          <Image src={shopbg} alt="ProductLg" fill />
        </div>
        {/* Product details */}
        <div className="flex flex-col">
          {/* Title */}
          <p className="text-4xl font-bold uppercase mb-5">
            {title || "Product Name"}
          </p>
          {/* Description */}
          <p>Product Description</p>
          {/* Designer */}
          <div>Product Designer</div>
          {/* Price and purchase */}
          <div className="w-full flex gap-11 mt-auto">
            <div className="flex flex-col">
              <p className="text-5xl font-bold">{price || "£69.00"}</p>
              <p className="ml-auto text-m">VAT included</p>
            </div>
            <Link
              href="/shop"
              className="w-60 h-20 flex border-5 border-black bg-inactive-orange hover:bg-active-orange text-3xl font-bold justify-center items-center"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
      {/* More from designer */}
      <div>
        <p></p>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPage;
