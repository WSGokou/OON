import Image from "next/image";
import React from "react";
import Jackets from "../../../assets/icons/jackets.svg";
import Trousers from "../../../assets/icons/trousers.svg";
import Dresses from "../../../assets/icons/dresses.svg";
import Tops from "../../../assets/icons/tops.svg";
import Accessories from "../../../assets/icons/accessories.svg";
import Other from "../../../assets/icons/other.svg";
import Link from "next/link";

const ItemButtons = ({ selectedItem, setSelectedItem, setOrderProgress }) => {
  const items = [
    { text: "jackets", img: Jackets, state: "jacket" },
    { text: "trousers", img: Trousers, state: "trousers" },
    { text: "dresses", img: Dresses, state: "dress" },
    { text: "tops", img: Tops, state: "top" },
    { text: "accessories", img: Accessories, state: "accessory" },
    { text: "other", img: Other, state: "other" },
  ];
  return (
    // Button container
    <div className="grid grid-cols-3 gap-9">
      {items.map((item, idx) => (
        <div
          key={idx}
          onClick={() => {
            setSelectedItem(item.state);
            setOrderProgress(2);
          }}
          className={`${
            item.state === selectedItem ? "bg-active-green" : "bg-white"
          } h-52 w-52 pb-9 pt-10 hover:bg-active-green border-10 border-black text-2xl font-semibold gap-6 flex flex-col justify-center items-center capitalize`}
        >
          <Image src={item.img} alt={item.text} width={72} height={72} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemButtons;
