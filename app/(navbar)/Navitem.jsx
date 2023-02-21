import Link from "next/link";
import React from "react";

const NavItem = ({ name, path, active }) => {
  return (
    <Link
      className={`w-full h-full flex justify-center items-center ${
        active ? "text-active-green" : ""
      } `}
      href={path}
    >
      {name}
    </Link>
  );
};

export default NavItem;
