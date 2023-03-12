import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import OonLogo from '../../../assets/images/oon-logo.svg';
import WishlistAddRemove from '@/app/(wishlist)/WishlistAddRemove';

const Product = ({productId, media, price, name, designer, page, sku, idx}) => {
  return (
    <div className='w-64 flex flex-col group relative'>
      {/* Product Square */}
      <Link href={`/shop/category/products/${productId}`}>
        <div className='h-64 w-64 mb-2 border-black bg-white group-hover:bg-gradient-to-r from-[#ffbc1014] to-[#ffbc1014] border-10 relative'>
          <Image
            src={media || OonLogo}
            alt='Image'
            fill
            className='object-contain'
            sizes='100%'
          />
          {/* Add/Remove buttons */}
        </div>
      </Link>
      <WishlistAddRemove
        classes={`${
          page === 'wishlist' && 'fill-pink-400 hover:fill-none'
        } hover:fill-pink-400 z-50 hidden group-hover:block cursor-pointer absolute right-3 top-3`}
        page={page}
        sku={sku}
        idx={idx}
      />
      <div className='mb-1 flex justify-between text-base font-bold uppercase'>
        <p>{name || 'Product Name'}</p>
        <p>{price ? `£${price?.toFixed(2)}` : '£69.00'}</p>
      </div>
      <p className='text-sm mr-auto'>{designer || 'Designer Name'}</p>
    </div>
  );
};

export default Product;
