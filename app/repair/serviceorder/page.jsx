"use client";

import React, { useState } from "react";
import SelectItem from "./(selectitem)/SelectItem";
import SelectService from "./(selectservice)/SelectService";
import ProgressBar from "./ProgressBar";
import AddPhotos from "../(photoupload)/AddPhotos";
import Deliveryinfo from "./(deliveryinfo)/Deliveryinfo";

const ServiceOrderPage = () => {
  const [orderProgress, setOrderProgress] = useState(1);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState({
    fileName: "file 1",
    comment: "file 1 comment",
  });

  return (
    <section className="pt-16 pb-20 pl-40 flex gap-x-24 border-5 border-green-400">
      {orderProgress < 5 && (
        <div>
          <ProgressBar
            orderProgress={orderProgress}
            selectedItem={selectedItem}
            selectedService={selectedService}
          />
        </div>
      )}
      <div>
        {orderProgress === 1 ? (
          <SelectItem
            setOrderProgress={setOrderProgress}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        ) : orderProgress === 2 ? (
          <SelectService
            setOrderProgress={setOrderProgress}
            selectedService={selectedService}
            setSelectedService={setSelectedService}
          />
        ) : orderProgress === 3 ? (
          <AddPhotos
            setOrderProgress={setOrderProgress}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        ) : (
          orderProgress === 4 && (
            <Deliveryinfo setOrderProgress={setOrderProgress} />
          )
        )}
      </div>
    </section>
  );
};

export default ServiceOrderPage;
