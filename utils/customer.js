import {instance} from './axiosInstance';
const url = '/customer';

export const customerRequests = async ({
  user,
  rq,
  cartItem,
  itemId,
  wishlistId,
  sku,
}) => {
  let res; // Initialize res variable
  // console.log(
  //   "custutilsparams",
  //   "user -",
  //   user,
  //   "rq -",
  //   rq,
  //   "cartItem -",
  //   cartItem,
  //   "itemId -",
  //   itemId
  // );

  // get for cart, customer details, wishlist
  if (rq === 'getCustomer' || rq === 'getCart' || rq === 'getWishlist') {
    // console.log("rqcustutilsget", rq, user);
    res = await instance
      .get(url, {
        params: {
          user,
          rq,
        },
      })
      .then((res) => res.data);
  }

  // post for adding to cart
  if (rq === 'addToCart' || rq === 'addToWishlist') {
    // console.log("rqcustutilspost", rq, user, wishlistId, sku);
    res = await instance
      .post(
        url,
        {
          cartItem,
          wishlistId,
          sku,
        },
        {
          params: {
            user,
            rq,
          },
        },
      )
      .then((res) => res.data);
  }

  // delete for removing from cart
  if (rq === 'removeFromCart' || rq === 'removeFromWishlist') {
    // console.log("rqcustutilsdelete", rq, user);
    res = await instance
      .delete(url, {params: {user, rq, itemId, wishlistId}})
      .then((res) => res.data);
  }

  const data = res; // data received from request

  // console.log("utilscustomer", data);
  return data; // return to call
};
