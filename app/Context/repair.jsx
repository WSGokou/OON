"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

const RepairContext = createContext({
  orderProgress: 1,
  selectedItem: "",
  selectedService: { text: "", price: "" },
  uploadedFiles: { fileName: "", comment: "" },
  selectedDatePu: "",
  selectedTimePu: {
    start: "",
    end: "",
  },
  selectedDateDo: "",
  selectedTimeDo: {
    start: "",
    end: "",
  },
  selectedAddressPu: "",
  selectedAddressDo: "",
});

export const RepairContextProvider = ({ children }) => {
  const [orderProgress, setOrderProgress] = useState(1);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedService, setSelectedService] = useState({
    text: "",
    price: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      fileId: 1,
      fileUrl: "",
      comment: "",
    },
  ]);
  const [selectedDatePu, setSelectedDatePu] = useState();
  const [selectedTimePu, setSelectedTimePu] = useState({
    start: "",
    end: "",
  });
  const [selectedDateDo, setSelectedDateDo] = useState();
  const [selectedTimeDo, setSelectedTimeDo] = useState({
    start: "",
    end: "",
  });
  const [selectedAddressPu, setSelectedAddressPu] = useState("");
  const [selectedAddressDo, setSelectedAddressDo] = useState("");

  return (
    <RepairContext.Provider
      value={{
        orderProgress,
        setOrderProgress,
        selectedItem,
        setSelectedItem,
        selectedService,
        setSelectedService,
        uploadedFiles,
        setUploadedFiles,
        selectedDatePu,
        setSelectedDatePu,
        selectedTimePu,
        setSelectedTimePu,
        selectedDateDo,
        setSelectedDateDo,
        selectedTimeDo,
        setSelectedTimeDo,
        selectedAddressPu,
        setSelectedAddressPu,
        selectedAddressDo,
        setSelectedAddressDo,
      }}
    >
      {children}
    </RepairContext.Provider>
  );
};

export const useRepairContext = () => useContext(RepairContext);
