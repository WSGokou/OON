import Link from "next/link";
import React from "react";

const Top = () => {
  return (
    <div className="pb-24 flex flex-col items-center group">
      {/* Top Paragraph */}
      <p className="text-5xl font-bold text-center leading-[62.4px] mb-32">
        Get started with
        <br />
        Ethical X Sustainable Fashion
      </p>
      {/* Buttons */}
      <div className="flex justify-between text-3xl font-bold text-center w-[720px]">
        {/* Shop Button */}
        <div className="h-64 w-64 bg-white hover:bg-inactive-orange border-black border-20 rounded-full flex ">
          <Link
            className="flex h-full w-full justify-center items-center uppercase"
            href="/shop"
          >
            SHOP
          </Link>
        </div>
        {/* Repair and alter button */}
        <div className="h-64 w-64 bg-white hover:bg-inactive-green border-black border-20 rounded-full flex">
          <Link
            className="flex h-full w-full justify-center items-center uppercase"
            href="/repair"
          >
            REPAIR
            <br />+<br />
            ALTER
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Top;
