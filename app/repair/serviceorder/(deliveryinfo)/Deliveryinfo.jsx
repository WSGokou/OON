import React from "react";
import AddressInput from "./AddressInput";

const Deliveryinfo = ({ setOrderProgress }) => {
  return (
    <div className="w-[775px]">
      <p className="text-4xl font-bold mb-9">
        Collected and delivered to your door
      </p>
      {/* Address inputs */}
      <AddressInput boxTitle={"Pick up"} />

      <div className="mt-16 mb-5 flex items-center">
        <input
          type="checkbox"
          id="sameAddress"
          className=" h-9 w-9 mr-3 p-[2.5px] appearance-none rounded-full border-5 border-black bg-clip-content checked:bg-inactive-green"
        />
        <label htmlFor="sameAddress" className="text-xl font-semibold">
          Same as the pick up address
        </label>
      </div>
      <AddressInput boxTitle={"Drop off"} />
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
        <div
          onClick={() => {
            setOrderProgress(5);
          }}
          className="w-24 h-12 border-5 border-black bg-black text-white text-xl font-bold uppercase flex justify-center items-center cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default Deliveryinfo;
