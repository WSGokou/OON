"use client";

import React, { useState } from "react";
import NavItem from "./Navitem";

const navItems = [
  { name: "WOMEN", path: "/shop/women" },
  { name: "MEN", path: "/shop/men" },
  { name: "ACCESSORIES", path: "/shop/accessories" },
  { name: "ABOUT US", path: "/about" },
  { name: "BLOG", path: "/blog" },
  { name: "SIGN UP", path: "/" },
  { name: "LOG IN", path: "/" },
];

const Navbar = ({ params }) => {
  const currentPage = params.id;
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    // Bar container
    <div
      className={`${
        navActive ? "active" : ""
      }max-w-[1440px] flex flex-row h-9 items-center mx-auto border-solid border-2 border-black font-bold gap-x-px`}
    >
      {/* Individual button mapping */}
      {navItems.map((item, idx) => (
        <div
          className="flex  text-main-cream uppercase h-full bg-black w-52"
          onClick={() => {
            setActiveIdx(idx);
            setNavActive(false);
          }}
          key={item.name}
        >
          <NavItem active={activeIdx === idx} {...item} />
        </div>
      ))}
    </div>
  );
};

export default Navbar;
