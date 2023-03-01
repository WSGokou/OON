"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProductDetails = ({ chosenProduct }) => {
  const [selectedImage, setSelectedImage] = useState(
    chosenProduct?.media_gallery[0].url
  );

  return (
    <div className="flex">
      {/* Small pictures */}
      <div className="flex flex-col min-w-fit gap-y-4 mr-3">
        {chosenProduct?.media_gallery
          .filter((item) => item.url !== selectedImage)
          .map((item, idx) => (
            <div
              key={idx}
              className="w-28 h-28 border-2 border-black relative"
              onClick={() => {
                setSelectedImage(item.url);
              }}
            >
              <Image
                src={item.url}
                alt="ProductSm"
                fill
                className="object-contain"
                sizes="100%"
              />
            </div>
          ))}
      </div>
      {/* Large picture */}
      <div className="min-w-[568px] h-[568px] border-10 border-black mr-16 relative">
        <Image
          src={selectedImage}
          alt="ProductLg"
          fill
          className="object-contain"
          sizes="100%"
        />
      </div>
      {/* Product details */}
      <div className="flex flex-col">
        {/* Title */}
        <p className="text-4xl font-bold uppercase mb-5">
          {chosenProduct?.name || "Product Name"}
        </p>
        {/* Description */}
        <p>Product Description</p>

        {/* {chosenProduct.description.html} */}
        {/* Designer */}
        <div>Product Designer</div>
        {/* Price and purchase */}
        <div className="w-full flex gap-11 mt-auto">
          <div className="flex flex-col">
            {/* Price and VAT label container */}
            <p className="text-5xl font-bold">
              {`£${chosenProduct?.price_range.minimum_price.regular_price.value.toFixed(
                2
              )}` || "£69.00"}
            </p>
            <p className="ml-auto text-m">VAT included</p>
          </div>
          {/* Buy now and add to cart buttons container */}
          <div>
            <Link
              href="/shop"
              className="w-60 h-20 flex border-5 border-black bg-inactive-orange hover:bg-active-orange text-3xl font-bold justify-center items-center"
            >
              Buy now
            </Link>
            <button className="w-60 h-20 mt-8 absolute flex border-5 border-black bg-active-green hover:bg-active-orange text-3xl font-bold justify-center items-center">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
