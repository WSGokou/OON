'use client';
import {useShopContext} from '@/app/(Context)/shop';
import {customerRequests} from '@/utils/customer';
import {useSession} from 'next-auth/react';
import React from 'react';

const AddToCartButton = ({chosenProduct}) => {
  // Get user from session
  const session = useSession();
  const user = session?.data?.user;
  const {cart, setCart} = useShopContext();
  // console.log(cart?.id, chosenProduct?.sku);

  const handleCartAdd = async () => {
    if (user) {
      await customerRequests({
        user,
        rq: 'getCart',
      }).then(async (cartData) => {
        // console.log(cartData);
        setCart(cartData);
        const quoteId = cartData.id;
        // Declare cart item to send with needed attributes
        const cartItem = {
          sku: chosenProduct?.sku,
          qty: 1,
          quote_id: quoteId,
        };

        // console.log(cartItem, quote_id);
        await customerRequests({user, rq: 'addToCart', cartItem}).then(
          (newItem) => {
            setCart((prev) => {
              const updatedItems = [...prev.items, newItem]; // Add the new item to the end of the array
              return {...prev, items: updatedItems}; // Update the state with the new items array
            });
          },
        );
      });
    }
    // console.log("addbuttonres", res);
  };

  return (
    <button
      className='w-60 h-20 mt-8 absolute flex border-5 border-black bg-active-green hover:bg-inactive-green text-3xl font-bold justify-center items-center'
      onClick={() => user && handleCartAdd()}
    >
      add to cart
    </button>
  );
};

export default AddToCartButton;
