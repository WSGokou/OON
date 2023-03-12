'use client';

import React, {useState} from 'react';

import Paginator from './Paginator';

import {useShopContext} from '@/app/(Context)/shop';
import ProductMapper from './products/ProductMapper';

const AllProducts = () => {
  const {products} = useShopContext();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  // console.log("allprodcs", products);

  // const fetchProducts = async () => {
  //   productData = await getProducts();
  //   console.log(productData);
  // };

  // fetchProducts();
  // const products = productData?.data?.products;

  // split products based on page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products?.items?.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Change page
  const paginate = (pageId) => {
    setCurrentPage(pageId);

    window.scrollTo({top: 100, behavior: 'smooth'});
  };

  const mapperClass =
    'grid grid-cols-4 grid-rows-3 gap-x-8 gap-y-10 mb-20 relative';

  return (
    <div className='flex flex-col'>
      {/* Product Count */}
      <p className='mb-5 self-end'>{`${
        products?.items?.length || 0
      } listings`}</p>
      <ProductMapper
        displayedProducts={currentProducts}
        mapperClass={mapperClass}
      />
      <div>
        {products?.items?.length > productsPerPage && (
          <Paginator
            defaultPage={1}
            count={Math.ceil(products?.items?.length / productsPerPage)}
            page={Number(currentPage)}
            onChange={paginate}
          />
        )}
      </div>
    </div>
  );
};

export default AllProducts;
