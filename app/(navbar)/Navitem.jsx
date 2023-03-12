import {signOut} from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavItem = ({label, path, active, setNavActive}) => {
  return (
    <Link
      className={`w-full h-full bg-black flex justify-center items-center uppercase py-1 border-r border-x-main-cream hover:text-active-green ${
        (label === 'SIGN UP' ||
          label === 'LOG IN' ||
          label === 'LOG OUT' ||
          label === 'WELCOME') &&
        'text-black border-r-black  bg-main-cream border hover:text-inactive-green'
      } ${active ? 'text-active-green' : ''} `}
      href={path}
      onClick={() => {
        setNavActive(false);
        label === 'LOG OUT' && signOut();
      }}
    >
      {label}
    </Link>
  );
};

export default NavItem;
