import {NextResponse} from 'next/server';

const oonUrl = process.env.OON_URL;
const baseUrl = process.env.MAGENTO_URL;

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams; // Get request params
  const token = searchParams.get('user[token]'); // Take Token from params
  const rq = searchParams.get('rq'); // Take request string from params
  // console.log("rqcustrouter", rq, searchParams);

  // Set headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  let res; // Initiate res variable
  let query; // Initiate query variable

  // Requests for getcustomer, getCart
  if (rq === 'getCustomer' || rq === 'getCart') {
    res = await fetch(
      `${oonUrl}${
        rq === 'getCustomer'
          ? '/rest/V1/customers/me'
          : rq === 'getCart'
          ? '/rest/V1/carts/mine'
          : ''
      }`,
      {
        method: 'GET',
        headers,
        // body: JSON.stringify({
        //   query,
        // }),
      },
    ).then((res) => res.json());
  }

  // Query for getWishlist
  if (rq === 'getWishlist') {
    query = `query {
      customer {
        wishlists {
          id
          items_count
          items_v2 {
            items {
              id
              product {
                id
                uid
                name
                sku
                price_range {
                  minimum_price {
                    regular_price  {
                      currency
                      value
                    }
                  }
                }
                media_gallery {
                  url
                  label
                }
              }
            }
          }
        }
      }
    }`;
    res = await fetch(`${oonUrl}/graphql`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
      }),
    }).then((res) => res.json());
  }

  return NextResponse.json(res);
}

export async function POST(req) {
  const searchParams = req.nextUrl.searchParams; // Get request params
  const token = searchParams.get('user[token]'); // Take Token string form params
  const rq = searchParams.get('rq'); // Take request string from params
  const {cartItem, wishlistId, sku} = await req.json();
  // console.log("rqcustrouterpost", req);
  // console.log("custpostreq", cartItem);

  // Set headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  let res; // Initiate res variable
  let query; // Initiate query variable

  // check request header and change url accordingly
  if (rq === 'addToCart') {
    res = await fetch(
      `${oonUrl}${rq === 'addToCart' && '/rest/V1/carts/mine/items'}`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({
          cartItem,
        }),
      },
    ).then((res) => res.json());
  }

  if (rq === 'addToWishlist') {
    query = `mutation ($sku: String!, $wishlistId: ID!) {
      addProductsToWishlist(
        wishlistId: $wishlistId,
        wishlistItems: [
          {
            sku: $sku
            quantity: 1
          }
        ]
    ) {
      wishlist {
        id
        items_count
        items_v2 {
          items {
            id
            quantity
            product {
              id
              uid
              name
              sku
              price_range {
                minimum_price {
                  regular_price  {
                    currency
                    value
                  }
                }
              }
              media_gallery {
                url
                label
              }
            }
          }
        }
      }
        user_errors {
          code
          message
        }
      }
    }`;
    res = await fetch(`${oonUrl}/graphql`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables: {sku, wishlistId},
      }),
    }).then((res) => res.json());
  }
  // console.log("custpost res", res);

  return NextResponse.json(res);
}

export async function DELETE(req) {
  const searchParams = req.nextUrl.searchParams; // Get request params
  const token = searchParams.get('user[token]'); // Take Token string form params
  const rq = searchParams.get('rq'); // Take request string from params
  const wishlistId = searchParams.get('wishlistId'); // Take id of wishlist from params
  const itemId = searchParams.get('itemId'); // Take id of item to remove from params
  // console.log("rqcustpagedel", rq);
  // console.log("custdelreqitem", itemId);

  // Set headers
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  let res; // Initiate res variable
  let query; // Initiate query variable

  // check request header and change url accordingly
  if (rq === 'removeFromCart') {
    res = await fetch(
      `${oonUrl}${
        rq === 'removeFromCart' && `/rest/V1/carts/mine/items/${itemId}`
      }`,
      {
        method: 'DELETE',
        headers,
      },
    ).then((res) => res.json());
  }

  if (rq === 'removeFromWishlist') {
    query = `mutation ($wishlistItemsIds: [ID!]!, $wishlistId: ID!) {
      removeProductsFromWishlist(
        wishlistId: $wishlistId
        wishlistItemsIds: $wishlistItemsIds
      ) {
        wishlist {
          id
          items_count
          items_v2 {
            items {
              id
              quantity
              product {
                id
                uid
                name
                sku
                price_range {
                  minimum_price {
                    regular_price  {
                      currency
                      value
                    }
                  }
                }
                media_gallery {
                  url
                  label
                }
              }
            }
          }
        }
        user_errors {
          code
          message
        }
      }
    }`;
    res = await fetch(`${oonUrl}/graphql`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables: {wishlistItemsIds: itemId, wishlistId},
      }),
    }).then((res) => res.json());
  }
  // console.log("custroutedel res", res);

  return NextResponse.json(res);
}
