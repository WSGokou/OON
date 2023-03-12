import React from 'react';

import ProductDetails from './ProductDetails';
import BackButton from './BackButton';

const ProductPage = async ({params, designer}) => {
  const productId = Number(params.id); // Product id from url

  return (
    <div className='pt-16 pb-44 px-20 flex flex-col'>
      {/* {console.log("chosen product", chosenProduct)} */}
      {/* Back Button */}
      <BackButton />
      {/* Product Diplay and details */}
      <ProductDetails
        productId={productId}
        // chosenProduct={chosenProduct}
        // cartId={cartId}
      />
      {/* More from designer */}
      <div>
        <p></p>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPage;
