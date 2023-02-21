import DoYouKnow from "./(landing)/DoYouKnow";
import OurDesigners from "./(landing)/OurDesigners";
import OurVision from "./(landing)/OurVision";
import PopularServices from "./(landing)/PopularServices";
import ShopLatest from "./(landing)/ShopLatest";
import Top from "./(landing)/Top";
import WhoAreWe from "./(landing)/WhoAreWe";

export default function Home() {
  return (
    <main className="pt-24 pb-16 flex flex-col justify-center items-center">
      <Top />
      <DoYouKnow />
      <WhoAreWe />
      <OurDesigners />
      <PopularServices />
      <OurVision />
      <ShopLatest />
    </main>
  );
}
