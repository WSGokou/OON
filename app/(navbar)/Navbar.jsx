"use client";

import React, { useState } from "react";
import NavItem from "./Navitem";
import { usePathname } from "next/navigation";

const navItems = [
  { idx: 1, name: "WOMEN", path: "/shop/women" },
  { idx: 2, name: "MEN", path: "/shop/men" },
  { idx: 3, name: "ACCESSORIES", path: "/shop/gear" },
  { idx: 4, name: "ABOUT US", path: "/about" },
  { idx: 5, name: "BLOG", path: "/blog" },
  { idx: 6, name: "SIGN UP", path: "/" },
  { idx: 7, name: "LOG IN", path: "/auth/login" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [navActive, setNavActive] = useState(null);

  return (
    // Bar container
    <div
      className={`${
        navActive ? "active" : ""
      }max-w-[1440px] w-full text-main-cream border border-black flex flex-row flex-grow h-9 items-center mx-auto font-bold`}
    >
      {console.log("pathname", pathname)}
      {/* Individual button mapping */}
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          active={pathname === item.path}
          setNavActive={setNavActive}
          {...item}
        />
      ))}
    </div>
  );
};

export default Navbar;
