import Link from "next/link";
import React from "react";

const PopularServices = () => {
  const greenButtonStyles =
    "h-64 w-64 bg-inactive-green hover:bg-active-green border border-black border-10 flex justify-center items-center";

  return (
    <div className="pt-20 pb-24 flex flex-col text-center items-center">
      <p className="mb-20 text-5xl font-bold text-center">
        Our Popular Services
      </p>
      {/* Service Display */}
      <div className="mb-24 flex justify-center items-center gap-x-8 text-5xl font-bold text-center leading-[62.4px]">
        {/* Services */}
        <div className={greenButtonStyles}>
          Seam
          <br />
          Repair
        </div>
        <div className={greenButtonStyles}>
          Zip Replace-
          <br />
          ment
        </div>
        <div className={greenButtonStyles}>
          Crotch
          <br />
          Repair
        </div>
        <div className={greenButtonStyles}>
          Mend
          <br />a Tear
        </div>
      </div>
      <Link
        href="/repair"
        className="w-96 h-12 py-2.5 px-5 flex border-5 border-black bg-black text-white hover:text-active-green text-xl font-semibold justify-center items-center uppercase"
      >
        repair + alter
      </Link>
    </div>
  );
};

export default PopularServices;
