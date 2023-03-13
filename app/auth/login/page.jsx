'use client';

import React, {useRef} from 'react';
import {getSession, signIn, useSession} from 'next-auth/react';
import {useShopContext} from '@/app/(Context)/shop';
import {customerRequests} from '@/utils/customer';

const LoginPage = () => {
  const email = useRef('');
  const password = useRef('');
  const session = useSession();
  const {setCart, setWishlist} = useShopContext();

  const handleLogin = async () => {
    const res = await signIn('credentials', {
      username: email.current,
      password: password.current,
      redirect: false,
    }).then(async (res) => {
      // Get session, cart, wishlist and save to context after login succeeds
      const session = await getSession();

      const [cartData, {data: wishlistData}] = await Promise.all([
        customerRequests({
          user: session?.user,
          rq: 'getCart',
        }),
        customerRequests({
          user: session?.user,
          rq: 'getWishlist',
        }),
        customerRequests({
          user: session?.user,
          rq: 'getCustomer',
        }),
      ]);
      setCart(cartData);
      setWishlist(wishlistData.customer.wishlists[0]);
      setCustomer(customerData);
      console.log('Logged in successfully');
      // console.log("logincart", cart);
      // console.log("loginwishlist", wishlist);
    });
  };

  return (
    <div className='flex justify-center'>
      {console.log('loginpage sesh', session)}
      <div>
        <div className='flex flex-col'>
          <label htmlFor='user'>Email</label>
          <input
            id='user'
            type='email'
            ref={email}
            onChange={(e) => (email.current = e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='pass'>Password</label>
          <input
            id='pass'
            type='password'
            ref={password}
            onChange={(e) => (password.current = e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className='bg-inactive-green rounded-sm mt-2 py-2 px-4'
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
