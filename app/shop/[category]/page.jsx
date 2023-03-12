import React, {Suspense} from 'react';
import Filters from './Filters';
import AllProducts from './AllProducts';

const CategoryPage = async ({params}) => {
  // const products = getProducts().then((res) => res.data.json);
  // Category name from url
  const title = params.category;

  // Destructure data from db
  // const categoryData = await getOONCats();

  // // Main items
  // const { categoryList } = categoryData?.data;
  // const mainCategories = categoryList[0]?.children;

  // // Take object of top layer categories from category based on page
  // const categoryL1 = mainCategories?.find((item) => {
  //   if (title === "men") return item.name === "Masc";
  //   if (title === "women") return item.name === "Femme";
  // });

  return (
    <div className='px-40 pt-10 pb-12 flex flex-col'>
      {/* Title from categoryL1 name */}
      <h1 className='mb-4 text-4xl font-bold uppercase'>{title}</h1>
      {/* {console.log("layer1cat", categoryL1)} */}
      {/* {console.log("allprods", productData)} */}
      {/* Category Filters */}

      <Filters mainCategory={title} />

      {/* Product Display */}
      <Suspense fallback={<div>Loading Products...</div>}>
        <AllProducts />
      </Suspense>
    </div>
  );
};

export default CategoryPage;
