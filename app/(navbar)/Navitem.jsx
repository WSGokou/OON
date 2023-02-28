import Link from "next/link";
import React from "react";

const NavItem = ({ idx, name, path, active, setNavActive, setActiveIdx }) => {
  return (
    <Link
      className={`w-full h-full bg-black flex justify-center items-center uppercase py-1 border-r border-x-main-cream ${
        (name === "SIGN UP" || name === "LOG IN") &&
        "text-black border-r-black  bg-main-cream border"
      } ${active ? "text-active-green" : ""} `}
      href={path}
      onClick={() => {
        setActiveIdx(idx);
        setNavActive(false);
      }}
    >
      {name}
    </Link>
  );
};

export default NavItem;
