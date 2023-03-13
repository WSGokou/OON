'use client';
import {useShopContext} from '@/app/(Context)/shop';
import React, {useEffect} from 'react';

const ProfileLeft = () => {
  const {customer, setCustomer} = useShopContext();
  const getCustomerDetails = async () => {
    await customerRequests({
      user: session?.user,
      rq: 'getCustomer',
    }).then((res) => {
      setCustomer(res);
    });
  };

  useEffect(() => {
    if (customer === undefined) {
      getCustomerDetails();
    }
  });

  return (
    <div className='flex flex-col items-center pt-10 ml-4'>
      {/* User image */}
      <div
        className={
          'h-72 w-72 mb-3 border-black border-10 rounded-full flex justify-center items-center'
        }
      ></div>
      {/* User location */}
      <p className='text-4xl text-center font-semibold mb-5'>
        {customer.firstname && customer.firstname}{' '}
        {customer.lastname && customer.lastname}
      </p>
      <p className='text-3xl text-center font-semibold mb-10'>
        {customer.addresses && `${customer?.addresses[0]?.city}`}
      </p>
    </div>
  );
};

export default ProfileLeft;
