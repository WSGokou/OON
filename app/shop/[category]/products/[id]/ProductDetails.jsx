'use client';

import Link from 'next/link';
import React, {Suspense} from 'react';
import ImageDisplay from './ImageDisplay';
import AddToCartButton from './AddToCartButton';
import {useShopContext} from '@/app/(Context)/shop';

const ProductDetails = ({productId}) => {
  const {products} = useShopContext();
  const chosenProduct = products?.items?.find((item) => item.id === productId);
  return (
    <div className='flex'>
      <ImageDisplay
        productId={productId}
        images={chosenProduct?.media_gallery}
      />

      {/* Product details */}
      <div className='flex flex-col'>
        {/* Title */}
        <p className='text-4xl font-bold uppercase mb-5'>
          {chosenProduct?.name || 'Product Name'}
        </p>
        {/* Description */}
        <p>Product Description</p>

        {/* {chosenProduct.description.html} */}
        {/* Designer */}
        <div>Product Designer</div>
        {/* Price and purchase */}
        <div className='w-full flex gap-11 mt-auto'>
          <div className='flex flex-col'>
            {/* Price and VAT label container */}
            <p className='text-5xl font-bold'>
              {`£${chosenProduct?.price_range.minimum_price?.regular_price?.value?.toFixed(
                2,
              )}` || '£69.00'}
            </p>
            <p className='ml-auto text-m'>VAT included</p>
          </div>
          {/* Buy now and add to cart buttons container */}
          <div>
            <Link
              href='/shop'
              className='w-60 h-20 flex border-5 border-black bg-inactive-orange hover:bg-active-orange text-3xl font-bold justify-center items-center'
            >
              Buy now
            </Link>
            <Suspense fallback={<div>Loading...</div>}>
              <AddToCartButton
                // quote_id={cartId}
                chosenProduct={chosenProduct}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
