'use client';
import {useRouter} from 'next/navigation';
import React from 'react';

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className='self-start mb-7 gap-x-2 flex items-center text-xl font-semibold'
    >
      <svg
        width='15'
        height='16'
        viewBox='0 0 15 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M15 7.0625H3.59063L8.83125 1.82187L7.5 0.5L0 8L7.5 15.5L8.82188 14.1781L3.59063 8.9375H15V7.0625Z'
          fill='black'
        />
      </svg>
      <p>Back</p>
    </div>
  );
};

export default BackButton;
