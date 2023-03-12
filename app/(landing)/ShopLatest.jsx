'use client';
import React from 'react';
import Link from 'next/link';
import {useShopContext} from '../(Context)/shop';
import ProductMapper from '../shop/[category]/products/ProductMapper';

const ShopLatest = ({title}) => {
  // const { data: productData } = await getProducts();
  // const products = productData;
  const {products} = useShopContext();
  // console.log("shoplatest", products);

  const latestProducts = products?.items?.slice(0, 10);

  const mapperClass = 'mb-16 gap-x-4 flex text-left mr-4';
  const mapperClass2 = 'mb-16 gap-x-4 flex text-left';

  return (
    <div className='relative pt-24 flex flex-col text-center items-center w-full'>
      {/* {console.log(productData.data.products.items)} */}
      {title}
      {/* Product display */}

      <div className='relative w-full overflow-x-scroll no-scrollbar'>
        <ProductMapper
          displayedProducts={latestProducts}
          mapperClass={mapperClass}
        />
      </div>

      <Link
        href='/shop'
        className='cursor-pointer w-96 h-12 py-2.5 px-5 flex border-5 border-black bg-black text-white hover:text-active-orange text-xl font-semibold justify-center items-center uppercase'
      >
        shop
      </Link>
    </div>
  );
};

export default ShopLatest;
