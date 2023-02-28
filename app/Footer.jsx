import Image from "next/image";
import React from "react";
import Insta from "./assets/icons/insta.png";
import FB from "./assets/icons/fb.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-72 flex flex-col text-white relative bottom-0 bg-black">
      <div className="mt-12 mx-40 flex">
        <div className="mr-52 flex flex-col gap-4 text-sm">
          <p>About Us</p>
          <p>Shipping Info</p>
          <p>Terms</p>
          <p>Privacy</p>
        </div>
        <div className="mr-28 flex flex-col gap-4 text-sm">
          <p>Customer support & General Enquiries </p>
          <p>support@oneoffnature.com</p>
          <p>Innovation Center</p>
          <p>Knowledge Gateway, Colchester CO4 3ZQ</p>
        </div>
        <div className="flex flex-col gap-6 text-xl font-bold ">
          <p>SIGN UP FOR OUR NEWSLETTER</p>
          <input
            type="text"
            placeholder="Email"
            className="border border-white bg-transparent placeholder:text-white placeholder:text-sm placeholder:font-normal placeholder:p-2"
          />
          <p>FOLLOW US</p>
          <div className="flex gap-3.5">
            <Link
              href="https://www.instagram.com/oneoffnature/?hl=en"
              target="_blank"
            >
              <Image src={Insta} alt="Instagram" />
            </Link>
            {/* <Link href="https://www.pinterest.co.uk/oneoffnature/"></Link> */}
            <Image src={FB} alt="Facebook" />
          </div>
        </div>
      </div>
      <p className="mt-auto ml-40 mb-6 uppercase text-xs">
        Copyright @ Oneoffnature.com 2020. All Rights Reserved..
      </p>
    </div>
  );
};

export default Footer;
