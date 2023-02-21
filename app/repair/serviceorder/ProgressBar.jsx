import React from "react";

const ProgressBar = ({
  orderProgress,
  selectedItem,
  selectedService,
  uploadedFiles,
}) => {
  const steps = [
    {
      id: 1,
      text: "Select item",
      info: selectedItem || "N/A",
    },
    {
      id: 2,
      text: "Select service",
      info: selectedService || "N/A",
    },
    {
      id: 3,
      text: "Add photo/comment",
      info:
        orderProgress > 3
          ? uploadedFiles !== ""
            ? "UPLOADED ✓"
            : "SKIP ✓"
          : "N/A",
    },
    {
      id: 4,
      text: "Delivery information",
      info: "N/A",
    },
  ];

  return (
    <div>
      {orderProgress}
      {uploadedFiles}
      <p className="mb-11 font-bold text-4xl">Your Order</p>
      <div className="flex flex-col gap-y-6 justify-center">
        {/* Left bar line */}
        <div className="h-72 w-1.5 bg-black ml-[9px] absolute"></div>
        {/* Main steps */}
        {steps.map((item, idx) => (
          <div key={idx} className="flex">
            {/* Left bar circles */}
            <div
              className={`mr-4 w-6 h-6 rounded-full z-10 ${
                item.id < orderProgress
                  ? "bg-active-green border-5 border-black"
                  : item.id <= orderProgress
                  ? "bg-active-green "
                  : "bg-black "
              }`}
            ></div>
            {/* Step text and info */}
            <div className="">
              <p className="font-semibold text-xl">{item.text}</p>
              <p
                className={`${
                  item.info !== "N/A"
                    ? "px-1 bg-white border border-black text-center w-fit uppercase font-medium"
                    : ""
                }`}
              >
                {item.info}
              </p>
            </div>
          </div>
        ))}
        {/* Confirm and pay square and text */}
        <div className="flex">
          <div className="mr-4 bg-black w-6 h-6 border-5 border-black"></div>
          <div className="">
            <p className="font-semibold text-xl">Confirm & Pay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
