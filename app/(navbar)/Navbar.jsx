'use client';

import React, {useState} from 'react';
import NavItem from './Navitem';
import {usePathname} from 'next/navigation';
import {signOut, useSession} from 'next-auth/react';

const Navbar = () => {
  const pathname = usePathname();
  const session = useSession();
  const user = session?.data?.user;

  if (Date(session?.data?.expires) < new Date()) {
    signOut();
  }

  const [navActive, setNavActive] = useState(null);

  const navItems = [
    {idx: 1, label: 'WOMEN', path: '/shop/women'},
    {idx: 2, label: 'MEN', path: '/shop/men'},
    {idx: 3, label: 'ACCESSORIES', path: '/shop/gear'},
    {idx: 4, label: 'ABOUT US', path: '/about'},
    {idx: 5, label: 'BLOG', path: '/blog'},
    {
      idx: 6,
      label: session?.status !== 'authenticated' ? 'SIGN UP' : 'WELCOME',
      path: session?.status !== 'authenticated' ? '/' : '',
    },
    {
      idx: 7,
      label: session?.status !== 'authenticated' ? 'LOG IN' : 'LOG OUT',
      path: '/auth/login',
    },
  ];

  return (
    // Bar container
    <div
      className={`${
        navActive ? 'active' : ''
      }max-w-[1440px] w-full text-main-cream border border-black flex flex-row flex-grow h-9 items-center mx-auto font-bold`}
    >
      {/* {console.log("navbarsesh", session?.status)} */}
      {/* Individual button mapping */}
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          active={pathname === item.path}
          setNavActive={setNavActive}
          {...item}
        />
      ))}
    </div>
  );
};

export default Navbar;
