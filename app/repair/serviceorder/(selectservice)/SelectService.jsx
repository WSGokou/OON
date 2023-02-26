import React, { useState } from "react";
import ServiceButtons from "./ServiceButtons";
import { useRepairContext } from "../../../Context/repair";

const SelectService = () => {
  const { setOrderProgress } = useRepairContext();
  const [topBar, setTopBar] = useState("repairs");
  return (
    <div className="w-fit">
      <p className="mb-11 font-bold text-4xl text-semibold">
        What service would you like?
      </p>
      {/* Top bar buttons */}
      <div className="mb-5 text-center flex border-5 border-black bg-black text-xl font-semibold text-white lowercase items-center">
        <div
          onClick={() => {
            setTopBar("repairs");
          }}
          className={`px-24 py-0.5 ${
            topBar == "repairs" && "bg-active-green text-black"
          }`}
        >
          repairs
        </div>
        <div
          onClick={() => {
            setTopBar("alterations");
          }}
          className={`px-24 py-0.5 h-full ${
            topBar == "alterations" && "bg-active-green text-black"
          }`}
        >
          alterations
        </div>
      </div>
      <ServiceButtons />
      <div
        onClick={() => {
          setOrderProgress(1);
        }}
        className="w-24 h-12 mt-14 border-5 border-black bg-white text-xl font-bold uppercase flex justify-center items-center cursor-pointer"
      >
        Back
      </div>
    </div>
  );
};

export default SelectService;
