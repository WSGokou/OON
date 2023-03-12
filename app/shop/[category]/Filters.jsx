'use client';

import React, {useEffect} from 'react';
import MultiSelect from './MultiSelect';
import {getOONCats} from '@/utils/categories';
import {useShopContext} from '@/app/(Context)/shop';

const Filters = () => {
  const {categories, setCategories} = useShopContext();
  useEffect(() => {
    const fetchProducts = async () => {
      const {data: categoryData} = await getOONCats();
      // console.log(categoryData);
      setCategories(categoryData);
    };
    fetchProducts();
  }, []);

  return (
    <div className='mb-20 flex justify-between'>
      {['CATEGORIES', 'SIZE', 'PRICES', 'DELIVERY', 'SORT BY'].map((item) => (
        <MultiSelect
          key={item}
          text={item}
        />
      ))}
    </div>
  );
};

export default Filters;
