'use client';
import React, {useEffect} from 'react';
import {useShopContext} from '@/app/(Context)/shop';
import {customerRequests} from '@/utils/customer';
import {useSession} from 'next-auth/react';
import RemoveFromCartButton from './RemoveFromCartButton';

const CartItems = () => {
  const {cart, setCart} = useShopContext();
  const session = useSession();
  const user = session?.data?.user;
  // const session = await getServerSession(authOptions);
  // const user = session?.user;
  // const cart =
  const getCart = async () => {
    user &&
      (await customerRequests({user, rq: 'getCart'}).then((res) => {
        // console.log("cartres", res);
        setCart(res);
      }));
  };

  useEffect(() => {
    getCart();
  }, []);

  // console.log("rcsuser", user);

  // console.log("cartitems", cart);

  return (
    <div>
      {cart?.items?.map((item) => (
        <div key={item.sku}>
          <h1>{item.name}</h1>
          <p>{item.qty}</p>
          <RemoveFromCartButton
            itemId={item.item_id}
            user={user}
            cart={cart}
          />
        </div>
      ))}
    </div>
  );
};

export default CartItems;
