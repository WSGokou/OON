import React, {Suspense} from 'react';
import CartItems from './CartItems';

const CartPage = () => {
  // const session = await getServerSession(authOptions);
  // const user = session?.user;
  // const cart =
  //   session?.user && (await customerRequests({ user, rq: "getCart" }));

  return (
    <div>
      <h1>My Basket</h1>
      <Suspense fallback={<div>Loading items...</div>}>
        <CartItems />
      </Suspense>
    </div>
  );
};

export default CartPage;
