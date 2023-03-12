'use client';
import {useShopContext} from '@/app/(Context)/shop';
import {customerRequests} from '@/utils/customer';
import React from 'react';

const RemoveFromCartButton = ({itemId, user, cart}) => {
  const {setCart} = useShopContext();
  const handleCartRemove = async () => {
    await customerRequests({user, rq: 'removeFromCart', itemId}).then(() => {
      const indexToRemove = cart?.items.findIndex(
        (item) => item.item_id === itemId,
      );
      setCart((prev) => {
        const updatedCart = [...prev.items]; // Make a copy of the cart items array
        updatedCart.splice(indexToRemove, 1); // Remove the item at the specified index
        return {items: updatedCart}; // Update the state with the new cart items array
      });
    });
  };

  return <button onClick={handleCartRemove}>Remove</button>;
};

export default RemoveFromCartButton;
