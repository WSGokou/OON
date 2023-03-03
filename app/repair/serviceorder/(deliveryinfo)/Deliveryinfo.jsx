import React, { useState } from "react";
import AddressInput from "./AddressInput";
import { useRepairContext } from "../../../(Context)/repair";
import Link from "next/link";

const Deliveryinfo = () => {
  const {
    setOrderProgress,
    selectedAddressPu,
    selectedAddressDo,
    setSelectedAddressDo,
    selectedTimeDo,
    selectedTimePu,
  } = useRepairContext();

  // State for if same address box is ticked
  const [same, setSame] = useState(false);

  const fieldsComplete =
    selectedAddressPu &&
    selectedAddressDo &&
    selectedTimeDo.start &&
    selectedTimeDo.end &&
    selectedTimePu.start &&
    selectedTimePu.end;

  return (
    <div className="w-[775px]">
      <p className="text-4xl font-bold mb-9">
        Collected and delivered to your door
      </p>
      {/* Pick up details inputs */}
      <AddressInput boxTitle={"Pick up"} same={same} />

      {/* Set same address */}
      <div className="mt-16 mb-5 flex items-center">
        <input
          type="checkbox"
          id="sameAddress"
          checked={same}
          onChange={() => {
            setSame(!same);
            !same && setSelectedAddressDo(selectedAddressPu);
          }}
          className=" h-9 w-9 mr-3 p-[2.5px] appearance-none rounded-full border-5 border-black bg-clip-content checked:bg-inactive-green"
        />
        <label htmlFor="sameAddress" className="text-xl font-semibold">
          Same as the pick up address
        </label>
      </div>
      {/* Drop off details input */}
      <AddressInput boxTitle={"Drop off"} same={same} />
      {/* Back and next buttons */}
      <div className="flex mt-28">
        {/* Back button */}
        <div
          onClick={() => {
            setOrderProgress(3);
          }}
          className="w-24 mr-auto h-12 border-5 border-black bg-white text-xl font-bold uppercase flex justify-center items-center cursor-pointer"
        >
          Back
        </div>
        <button
          onClick={() => {
            fieldsComplete && setOrderProgress(5);
          }}
          className={`${
            !fieldsComplete && "opacity-30"
          } w-24 h-12 border-5 border-black bg-black text-white text-xl font-bold uppercase flex justify-center items-center cursor-pointer`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Deliveryinfo;
