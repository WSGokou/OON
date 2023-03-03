import Image from "next/image";
import React from "react";
import Jackets from "../../../assets/icons/jackets.svg";
import Trousers from "../../../assets/icons/trousers.svg";
import Dresses from "../../../assets/icons/dresses.svg";
import Tops from "../../../assets/icons/tops.svg";
import Accessories from "../../../assets/icons/accessories.svg";
import Other from "../../../assets/icons/other.svg";
import { useRepairContext } from "../../../(Context)/repair";

const ItemButton = ({ idx }) => {
  const { selectedItem, setSelectedItem, orderProgress, setOrderProgress } =
    useRepairContext();

  const items = [
    { text: "jackets", img: Jackets, state: "jacket" },
    { text: "trousers", img: Trousers, state: "trousers" },
    { text: "dresses", img: Dresses, state: "dress" },
    { text: "tops", img: Tops, state: "top" },
    { text: "accessories", img: Accessories, state: "accessory" },
    { text: "other", img: Other, state: "other" },
  ];

  const orderItemIdx = items.indexOf((item) => item.state === selectedItem) + 1;

  return (
    <div
      onClick={() => {
        if (orderProgress === 1) {
          setSelectedItem(items[idx]?.state);
          setOrderProgress(2);
        }
      }}
      className={`${
        orderProgress === 1
          ? "h-52 w-52 pb-9 pt-10 hover:bg-active-green  text-2xl gap-6  "
          : "h-40 w-40 gap-2"
      } ${
        items[idx]?.state === selectedItem ? "bg-active-green" : "bg-white"
      } flex flex-col justify-center items-center capitalize border-10 border-black font-semibold `}
    >
      <Image
        src={orderProgress === 1 ? items[idx]?.img : items[orderItemIdx]?.img}
        alt={orderProgress === 1 ? items[idx]?.text : items[orderItemIdx]?.text}
        width={72}
        height={72}
      />
      <p>
        {orderProgress === 1 ? items[idx]?.text : items[orderItemIdx]?.text}
      </p>
    </div>
  );
};

export default ItemButton;
