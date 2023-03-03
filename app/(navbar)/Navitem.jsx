import Link from "next/link";
import React from "react";

const NavItem = ({ name, path, active, setNavActive }) => {
  return (
    <Link
      className={`w-full h-full bg-black flex justify-center items-center uppercase py-1 border-r border-x-main-cream hover:text-active-green ${
        (name === "SIGN UP" || name === "LOG IN") &&
        "text-black border-r-black  bg-main-cream border hover:text-inactive-green"
      } ${active ? "text-active-green" : ""} `}
      href={path}
      onClick={() => {
        setNavActive(false);
      }}
    >
      {name}
    </Link>
  );
};

export default NavItem;
