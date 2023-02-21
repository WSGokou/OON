import React from "react";

const AddressInput = ({ boxTitle }) => {
  // Function to create an array of dates
  const getDaysArray = (s, e) => {
    for (
      var a = [], d = new Date(s);
      d <= new Date(e);
      d.setDate(d.getDate() + 1)
    ) {
      a.push(new Date(d));
    }
    return a;
  };

  // Array of dates from today + 10 days
  const daylist = getDaysArray(
    new Date(),
    new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)
  );

  // Array of hours
  const hours = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  return (
    <div className="h-32 flex flex-col">
      {/* Top half */}
      <div className="flex h-16 border-b-5 bg-white border-black relative">
        <p className="w-60 bg-black text-white text-xl font-semibold flex justify-center items-center">
          {boxTitle}
        </p>
        {/* Time selection box */}
        <div className="flex items-center text-x font-medium border-5 border-black w-full">
          {/* Triangle */}
          <div className="border-t-10 border-t-black overflow-hidden border-x-10 border-x-transparent ml-5 mr-2"></div>
          <p>Select the time slot</p>
        </div>
        {/* Date and time container */}
        <div className="grid grid-flow-cols grid-cols-2 h-44 w-[535px] hidden absolute right-0 text-center justify-center items-center border-5 border-black bg-white ">
          {/* Dates */}
          <div className="px-2 overflow-scroll overscroll-contain">
            {daylist.map((v) => (
              <p className="hover:bg-inactive-green hover:text-white" key={v}>
                {v.toUTCString().slice(5, 16)}
              </p>
            ))}
          </div>
          {/* Times */}
          <div className="px-2 overflow-scroll overscroll-contain">
            {hours.map((hour) => (
              <p
                className="hover:bg-inactive-green hover:text-white"
                key={hour}
              >
                {`${hour}:00 - ${hour + 1}:00`}
              </p>
            ))}
          </div>
          <button className="col-span-full bg-black text-white uppercase font-semibold pt-1">
            Done
          </button>
        </div>
      </div>
      {/* Bottom half */}
      <input
        className="bg-white h-1/2 pl-6 border-black border-5"
        placeholder="Enter the post code to find the address"
      />
    </div>
  );
};

export default AddressInput;
