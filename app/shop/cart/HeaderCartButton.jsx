'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Basket from '../../assets/icons/basket.png';
import {useShopContext} from '@/app/(Context)/shop';

const HeaderCartButton = () => {
  const {cart} = useShopContext();
  const itemCount = cart?.items?.length;
  return (
    <Link
      href='/shop/cart'
      className='flex items-center justify-center'
    >
      <Image
        src={Basket}
        alt='Basket'
      />
      <div className=' text-center rounded-full text-xs font-extrabold absolute mt-10'>
        {itemCount}
      </div>
    </Link>
  );
};

export default HeaderCartButton;
