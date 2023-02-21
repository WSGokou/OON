import React from "react";
import { ourVision } from "../assets/constants/text";
import LeftImage from "../assets/images/visionleft.png";
import Image from "next/image";

const OurVision = () => {
  return (
    <div className="h-[710px] w-full flex flex-row">
      {/* Left container */}
      <div className="basis-1/2 bg-black flex">
        <Image src={LeftImage} alt="Sustainability" />
      </div>
      {/* Right container */}
      <div className="pt-48 pb-16 basis-1/2 border-black border-20 flex flex-col text-center items-center">
        <p className="text-5xl font-bold mb-16">Our Vision</p>
        {ourVision}
        <button className="text-2xl font-semibold">More →</button>
      </div>
    </div>
  );
};

export default OurVision;
