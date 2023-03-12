'use client';
import {useShopContext} from '@/app/(Context)/shop';
import React, {useEffect} from 'react';
import ProductMapper from '../shop/[category]/products/ProductMapper';
import {useSession} from 'next-auth/react';
import {customerRequests} from '@/utils/customer';

const WishlistItems = () => {
  const session = useSession();
  const user = session?.data?.user;
  // Get the product data from context
  const {wishlist, setWishlist} = useShopContext();
  // filter products based on array of wishlist skus
  // const wishlistProducts = products?.items?.filter((item) =>
  //   itemSkus?.includes(item.sku)
  // );

  const getWishlist = async () => {
    user &&
      (await customerRequests({user, rq: 'getWishlist'}).then((res) => {
        // console.log("wlistres", res);
        setWishlist(res?.data?.customer?.wishlists[0]);
      }));
  };
  useEffect(() => {
    getWishlist();
  }, []);

  const wishlistItems = wishlist?.items_v2?.items;

  const wishlistProducts = wishlistItems?.map((item) => item.product);

  // console.log("wlprods", wishlistProducts);
  // console.log("wlitems", wishlistItems);

  const mapperClass = 'grid grid-cols-3 gap-x-4 gap-y-8';

  return (
    <ProductMapper
      displayedProducts={wishlistProducts}
      mapperClass={mapperClass}
      page={'wishlist'}
    />
  );
};

export default WishlistItems;
