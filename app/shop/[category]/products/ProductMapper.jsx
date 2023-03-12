import React from 'react';
import Product from './Product';

const ProductMapper = ({displayedProducts, mapperClass, page}) => {
  return (
    <div className={mapperClass}>
      {displayedProducts?.map((item, idx) => (
        <Product
          key={item.id}
          productId={item?.id}
          name={item?.name}
          price={item?.price_range?.minimum_price?.regular_price?.value}
          media={item?.media_gallery[0]?.url}
          sku={item?.sku}
          idx={idx}
          page={page}
        />
      ))}
    </div>
  );
};

export default ProductMapper;
