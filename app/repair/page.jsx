import Link from "next/link";
import React from "react";

const Repairs = () => {
  return (
    <div className="w-full h-full pt-8 bg-inactive-green border">
      {/* Circle */}
      <div className="w-[740px] h-[740px] pt-40 mb-32 mx-auto border-10 border-black bg-white rounded-full flex flex-col justify-start items-center">
        {/* Top paragraph */}
        <p className="mb-28 font-semibold text-4xl text-center leading-10">
          Hey there :)
          <br /> we’re stoked you care about
          <br /> slow fashion & indie
          <br /> designers
        </p>
        {/* Sign up button */}
        <Link
          href="/repair"
          className="w-96 h-12 py-2.5 px-5 flex border-5 border-black bg-black text-white text-xl font-semibold justify-center items-center uppercase mb-6"
        >
          sign up
        </Link>
        {/* Login Button */}
        <Link
          href="/repair"
          className="w-96 h-12 py-2.5 px-5 mb-8 flex border-5 border-black bg-white text-black text-xl font-semibold justify-center items-center uppercase"
        >
          Login
        </Link>
        {/* Guest Button */}
        <Link
          href="/repair/serviceorder"
          className="text-inactive-green text-2xl font-semibold"
        >
          Continue as guest →
        </Link>
      </div>
    </div>
  );
};

export default Repairs;
