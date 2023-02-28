import React from "react";
import MultiSelect from "./MultiSelect";

const Filters = ({ categories }) => {
  return (
    <div className="mb-20 flex justify-between">
      {["CATEGORIES", "SIZE", "PRICES", "DELIVERY", "SORT BY"].map((item) => (
        <MultiSelect key={item} text={item} />
      ))}
    </div>
  );
};

export default Filters;
