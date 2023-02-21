import React from "react";
import Image from "next/image";
import Logo from "./assets/images/oon-logo.svg";
import Account from "./assets/icons/account.png";
import Basket from "./assets/icons/basket.png";
import Search from "./assets/icons/search.png";
import Wishlist from "./assets/icons/wishlist.png";
import Link from "next/link";

const Header = () => {
  return (
    <main className="flex flex-row justify-between mx-40 flex-auto items-center h-24 min-w-[1080px]">
      {/* Search bar */}
      <div className="flex flex-row items-center w-80 h-10">
        <Image src={Search} alt="Search" className="-mr-9 w-5 h-5 z-0 " />
        <input
          type="text"
          className="w-80 h-10 bg-transparent border-solid border-2 border-gray-600 rounded-3xl"
        />
      </div>
      {/* Logo */}
      <Link href="/" className="w-72 h-7">
        <Image src={Logo} alt="One Off Nature" className="object-fill" />
      </Link>
      {/* Account wishlist and basket buttons */}
      <div className="h-5 flex flex-row justify-between gap-8">
        <Image src={Account} alt="Account" />
        <Image src={Wishlist} alt="Wishlist" />
        <Image src={Basket} alt="Basket" />
      </div>
    </main>
  );
};

export default Header;
