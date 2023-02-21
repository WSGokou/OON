import React from "react";

const DoYouKnow = () => {
  return (
    <div className="pt-32 pb-52 flex flex-col items-center">
      {/* Top Paragraph */}
      <p className="text-5xl font-bold text-center leading-[62.4px] mb-32">
        Do you know
      </p>
      {/* Squares */}
      <div className="flex text-center gap-x-5">
        {/* Square 1 */}
        <div className="h-72 w-72 bg-white border-black border-10 flex flex-col justify-center items-center">
          <span className="text-6xl font-bold">40%</span>
          <br />
          of eCom orders returned
        </div>
        {/* Square 2 */}
        <div className="h-72 w-72 bg-white border-black border-10 flex flex-col justify-center items-center">
          <span className="text-6xl font-bold">64%</span>
          <br />
          due to poor fit
        </div>
        {/* Square 3 */}
        <div className="h-72 w-72 bg-white border-black border-10 flex flex-col justify-center items-center">
          <span className="text-6xl font-bold">2.8kg</span>
          <br />
          of carbon per return
        </div>
        {/* Square 4 */}
        <div className="h-72 w-72 bg-white border-black border-10 flex flex-col justify-center items-center">
          <span className="text-6xl font-bold">£20</span>
          <br />
          average cost of return
        </div>
      </div>
    </div>
  );
};

export default DoYouKnow;
