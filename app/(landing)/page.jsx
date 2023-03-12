import React from 'react';
import DoYouKnow from './DoYouKnow';
import OurDesigners from './OurDesigners';
import OurVision from './OurVision';
import PopularServices from './PopularServices';
import ShopLatest from './ShopLatest';
import Top from './Top';
import WhoAreWe from './WhoAreWe';

export default function Home() {
  return (
    <main className='pt-24 pb-16 flex flex-col justify-center items-center'>
      {/* {console.log("allaprobds", allProducts)} */}
      <Top />
      <DoYouKnow />
      <WhoAreWe />
      <OurDesigners />
      <PopularServices />
      <OurVision />
      <ShopLatest
        title={
          <p className='mb-16 text-5xl font-bold text-center'>
            Latest in the shop
          </p>
        }
      />
    </main>
  );
}
