"use client";

import React, { useState } from "react";
import DateTimeSelect from "./DateTimeSelect";
import { useRepairContext } from "../../../(Context)/repair";

const AddressInput = ({ boxTitle, same }) => {
  const [showSelect, setShowSelect] = useState(false);
  const {
    selectedDatePu,
    selectedTimePu,
    selectedDateDo,
    selectedTimeDo,
    selectedAddressPu,
    selectedAddressDo,
    setSelectedAddressPu,
    setSelectedAddressDo,
  } = useRepairContext();

  // Open Date and time select on click
  const handleShowSelect = () => {
    boxTitle === "Pick up" && setShowSelect(true);
    if (boxTitle === "Drop off") {
      selectedDatePu && selectedTimePu.start && setShowSelect(true);
    }
  };

  const handleAddressChange = (e) => {
    boxTitle === "Pick up" && setSelectedAddressPu(e.target.value);
    boxTitle === "Drop off" && setSelectedAddressDo(e.target.value);

    if (same) {
      setSelectedAddressPu(e.target.value);
      setSelectedAddressDo(e.target.value);
    }
  };

  return (
    <div className="h-32 w-[775px] border-black border-5 flex flex-col">
      {/* Top half */}
      <div className="flex h-16 border-b-5 bg-white border-black relative">
        <div className="w-2/6 bg-black text-white text-xl font-semibold flex justify-center items-center">
          {boxTitle}
        </div>
        {/* Time selection box */}
        <div
          className="flex items-center text-x font-medium w-4/6"
          onClick={handleShowSelect}
        >
          {/* Triangle */}
          <div
            className={
              "border-t-10 border-t-black border-x-10 border-x-transparent ml-5 mr-2"
            }
          ></div>
          {/* Time slot text */}
          <p className="font-semibold">
            {boxTitle === "Pick up" && selectedDatePu && selectedTimePu.start
              ? `${selectedDatePu}  ${selectedTimePu.start} - ${selectedTimePu.end}`
              : boxTitle === "Pick up" &&
                !selectedDatePu &&
                !selectedTimePu.start &&
                "Select the time slot"}
            {boxTitle === "Drop off" && selectedDateDo && selectedTimeDo.start
              ? `${selectedDateDo}  ${selectedTimeDo.start} - ${selectedTimeDo.end}`
              : boxTitle === "Drop off" &&
                !selectedDateDo &&
                !selectedTimeDo.start &&
                "Select the time slot"}
          </p>
        </div>
        {/* Date and time select container */}
        {showSelect && (
          <DateTimeSelect boxTitle={boxTitle} setShowSelect={setShowSelect} />
        )}
      </div>
      {/* Bottom half */}
      <input
        className="bg-white h-1/2 pl-6"
        placeholder="Enter the post code to find the address"
        value={boxTitle === "Pick up" ? selectedAddressPu : selectedAddressDo}
        onChange={handleAddressChange}
      />
    </div>
  );
};

export default AddressInput;
