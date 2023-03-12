'use client';
import {useShopContext} from '@/app/(Context)/shop';
import Image from 'next/image';
import React, {useState} from 'react';

const ImageDisplay = ({productId}) => {
  const {products} = useShopContext();
  const chosenProduct = products?.items?.find((item) => item.id === productId);
  const [selectedImage, setSelectedImage] = useState(
    chosenProduct?.media_gallery[0]?.url,
  );
  const images = chosenProduct?.media_gallery;
  return (
    <div className='flex'>
      {/* Small pictures */}
      <div className='flex flex-col min-w-fit gap-y-4 mr-3 h-[568px]'>
        {images
          ?.filter((item) => item.url !== selectedImage)
          .map((item, idx) => (
            <div
              key={idx}
              className='w-28 h-28 border-2 border-black relative'
              onClick={() => {
                setSelectedImage(item.url);
              }}
            >
              <Image
                src={item.url}
                alt='ProductSm'
                fill
                className='object-contain'
                sizes='100%'
              />
            </div>
          ))}
      </div>
      {/* Large picture */}
      <div className='min-w-[568px] h-[568px] border-10 border-black mr-16 relative'>
        <Image
          src={selectedImage}
          alt='ProductLg'
          fill
          className='object-contain'
          sizes='100%'
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
