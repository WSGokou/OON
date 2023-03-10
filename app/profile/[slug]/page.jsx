import BackButton from '../../shop/[category]/products/[id]/BackButton';
import React, {Suspense} from 'react';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {customerRequests} from '@/utils/customer';
import Wishlist from '../../(wishlist)/Wishlist';
import ProfileLeft from './ProfileLeft';

const ProfilePage = async ({params}) => {
  // const user = params.slug;
  // const session = await getServerSession(authOptions);
  // const user = session?.user; // Take user object from session
  // console.log("ppsesh", session);
  // const customer = await customerRequests({user, rq: 'getCustomer'});

  return (
    <div className='pt-20'>
      <div className='flex pl-11 mb-14'>
        <BackButton />
        {/* Left container */}
        <Suspense fallback={<div></div>}>
          <ProfileLeft />
        </Suspense>
        {/* Right container */}
        <div className='ml-14'>
          <div className='mb-7 text-6xl font-bold'>
            <p>My profile</p>
          </div>
          <div className='p-6 h-72 w-[752px] mb-10 border-8 border-black bg-gray-300 bg-opacity-90'>
            Personal Bio
          </div>
          <div className='mb-10'>
            <p className='text-3xl font-bold mb-7'>My wishlist</p>

            <Suspense fallback={<div></div>}>
              <Wishlist />
            </Suspense>
          </div>
          <div className='mb-7 '>
            <p className='text-3xl font-bold mb-7'>My favourite designers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
