import DoYouKnow from "./(landing)/DoYouKnow";
import OurDesigners from "./(landing)/OurDesigners";
import OurVision from "./(landing)/OurVision";
import PopularServices from "./(landing)/PopularServices";
import ShopLatest from "./(landing)/ShopLatest";
import Top from "./(landing)/Top";
import WhoAreWe from "./(landing)/WhoAreWe";
import { getProducts } from "@/utils/products";

export default async function Home() {
  const allProducts = await getProducts();

  return (
    <main className="pt-24 pb-16 flex flex-col justify-center items-center">
      {/* {console.log("allaprobds", allProducts)} */}
      <Top />
      <DoYouKnow />
      <WhoAreWe />
      <OurDesigners />
      <PopularServices />
      <OurVision />
      <ShopLatest allProducts={allProducts?.data?.products?.items} />
    </main>
  );
}
