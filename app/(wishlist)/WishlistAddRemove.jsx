'use client';
import {customerRequests} from '@/utils/customer';
import {useSession} from 'next-auth/react';
import React from 'react';
import {useShopContext} from '../(Context)/shop';

const WishlistAddRemove = ({page, sku, idx, classes}) => {
  const session = useSession();
  const user = session?.data?.user;
  const {wishlist, setWishlist} = useShopContext();

  const handleAddRemove = async () => {
    if (user) {
      const wishlistId = wishlist.id;

      if (page === 'wishlist') {
        const itemId = Number(wishlist?.items_v2?.items[idx].id);
        // console.log("isRemovetrue", page, wishlistId, idx, itemId);
        await customerRequests({
          user,
          rq: 'removeFromWishlist',
          wishlistId,
          itemId,
        }).then((res) => {
          // console.log("wlistres", res);
          setWishlist(res.data.removeProductsFromWishlist.wishlist);
          console.log('item removed from wishlist');
        });
      }
      if (page !== 'wishlist') {
        // console.log("isRemovefalse", page, wishlistId, sku);
        await customerRequests({
          user,
          rq: 'addToWishlist',
          wishlistId,
          sku,
        }).then((res) => {
          // console.log("wlistres", res);
          setWishlist(res.data.addProductsToWishlist.wishlist);
          console.log('item added to wishlist');
        });
      }
    }
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='30'
      height='30'
      fill='none'
      stroke='#000'
      strokeWidth='2'
      viewBox='0 0 24 24'
      className={classes}
      onClick={handleAddRemove}
    >
      <path d='M19.3 5.71a4.92 4.92 0 00-3.51-1.46 4.92 4.92 0 00-3.51 1.46L12 6l-.28-.28a4.95 4.95 0 00-7 0 5 5 0 000 7l6.77 6.79a.75.75 0 001.06 0l6.77-6.79a5 5 0 00-.02-7.01z'></path>
    </svg>
  );
};

export default WishlistAddRemove;
