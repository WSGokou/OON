"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const ShopContext = createContext({
  categories: [],
  products: [],
});

export const ShopContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <ShopContext.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
