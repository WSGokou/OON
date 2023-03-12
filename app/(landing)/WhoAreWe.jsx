import React from 'react';
import {whoAreWe} from '../assets/constants/text';
import Image from 'next/image';
import RightImage from '../assets/images/whoarewe.png';

const WhoAreWe = () => {
  return (
    <div className='h-[710px] w-full flex flex-row'>
      {/* Left container */}
      <div className='pt-48 pb-16 basis-1/2 h-full border-black border-20 flex flex-col text-center items-center'>
        <p className='text-5xl font-bold mb-10'>Who are we</p>
        {whoAreWe}
        <button className='text-2xl font-semibold'>More →</button>
      </div>
      {/* Right container */}
      <div className='basis-1/2 bg-black'>
        <Image
          src={RightImage}
          alt='Sustainability'
          className='mt-5'
        />
      </div>
    </div>
  );
};

export default WhoAreWe;
