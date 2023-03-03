"use client";

import React, { useState } from "react";
import SelectItem from "./(selectitem)/SelectItem";
import SelectService from "./(selectservice)/SelectService";
import ProgressBar from "./ProgressBar";
import AddPhotos from "../(photoupload)/AddPhotos";
import Deliveryinfo from "./(deliveryinfo)/Deliveryinfo";
import { useRepairContext } from "../../(Context)/repair";
import OrderSummaryPage from "../(ordersummary)/OrderSummary";

const ServiceOrderPage = () => {
  const { orderProgress, setOrderProgress } = useRepairContext();

  return (
    <section className="pt-16 pb-20 pl-40 flex gap-x-24">
      {orderProgress < 5 && (
        <div>
          <ProgressBar />
        </div>
      )}
      <div>
        {orderProgress === 1 ? (
          <SelectItem />
        ) : orderProgress === 2 ? (
          <SelectService />
        ) : orderProgress === 3 ? (
          <AddPhotos />
        ) : orderProgress === 4 ? (
          <Deliveryinfo />
        ) : (
          orderProgress === 5 && <OrderSummaryPage />
        )}
      </div>
    </section>
  );
};

export default ServiceOrderPage;
