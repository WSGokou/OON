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

  useEffect(() => {
    const fetchProducts = async () => {
      const {data: productData} = await getProducts();
      // console.log("contextproducts", productData);
      setProducts(productData.products);
    };
    fetchProducts();
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
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
