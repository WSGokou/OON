import React from "react";
import MultiSelect from "./MultiSelect";

const Filters = () => {
  return (
    <div className="mb-36 flex justify-between">
      {["CATEGORIES", "SIZE", "PRICES", "DELIVERY", "SORT BY"].map((item) => (
        <MultiSelect key={item} text={item} />
      ))}
    </div>
  );
};

export default Filters;
