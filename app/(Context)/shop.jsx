'use client';

import React from 'react';
import {getProducts} from '@/utils/products';
import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import {getSession} from 'next-auth/react';
import {authOptions} from '@/pages/api/auth/[...nextauth]';
import {customerRequests} from '@/utils/customer';

const ShopContext = createContext({
  categories: [],
  products: [],
  cart: [],
  wishlist: [],
});

export const ShopContextProvider = ({children}) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [customer, setCustomer] = useState([]);

  // Function to fetch products on page load
  const fetchProducts = async () => {
    const {data: productData} = await getProducts();
    setProducts(productData.products);
  };

  // Fucntion to set cart, wishlist, and customer data if user is already logged in
  const setSessionData = async () => {
    await getSession(authOptions).then(async (session) => {
      if (session?.user) {
        const [cartData, {data: wishlistData}, customerData] =
          await Promise.all([
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
        setWishlist(wishlistData?.customer?.wishlists[0]);
        setCustomer(customerData);
      }
    });
  };

  useEffect(() => {
    fetchProducts();
    setSessionData();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        categories,
        setCategories,
        products,
        setProducts,
        cart,
        setCart,
        wishlist,
        setWishlist,
        customer,
        setCustomer,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
