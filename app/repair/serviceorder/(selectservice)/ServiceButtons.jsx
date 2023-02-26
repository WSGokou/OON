import { useRepairContext } from "../../../Context/repair";
import React from "react";

const ServiceButtons = () => {
  const { setOrderProgress, selectedService, setSelectedService } =
    useRepairContext();
  const services = [
    { text: "replace zip", price: "£15" },
    { text: "sew on buttons", price: "£4" },
  ];
  return (
    // Button container
    <div className="flex flex-col gap-6">
      {services.map((service, idx) => (
        <div
          key={idx}
          onClick={() => {
            setSelectedService(service);
            setOrderProgress(3);
          }}
          className={`${
            selectedService.text.includes(service.text) && "bg-active-green"
          } h-20 px-9 text-2xl font-bold lowercase bg-white hover:bg-active-green border-5 border-black flex justify-between items-center`}
        >
          <p>{service.text}</p>
          <p>{service.price}</p>
        </div>
      ))}
      <div
        onClick={() => {
          setSelectedService("other");
          setOrderProgress(3);
        }}
        className={`${
          selectedService.text.includes("other") && "bg-active-green"
        } h-20 px-9 text-2xl font-bold text-[#007743] bg-white hover:bg-active-green border-5 border-[#007743] flex justify-between items-center`}
      >
        <p>other requests</p>
      </div>
    </div>
  );
};

export default ServiceButtons;
