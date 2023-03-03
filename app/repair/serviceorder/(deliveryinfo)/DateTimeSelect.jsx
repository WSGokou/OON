import React from "react";
import { useRepairContext } from "../../../(Context)/repair";

const DateTimeSelect = ({ boxTitle, setShowSelect }) => {
  const {
    selectedTimePu,
    setSelectedTimePu,
    selectedTimeDo,
    setSelectedTimeDo,
    selectedDatePu,
    setSelectedDatePu,
    selectedDateDo,
    setSelectedDateDo,
  } = useRepairContext();

  // Function to create an array of dates
  const getDaysArray = (start, days) => {
    let dates = [];

    let currentDate = new Date(start);

    for (let i = 0; i < days; i++) {
      dates.push(new Date(currentDate).toUTCString().slice(5, 16));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  // Array of dates from today + 10 days
  const dayListPu = getDaysArray(new Date(), 3);
  const dayListDo = getDaysArray(selectedDatePu, 14);

  // Times array
  const getTimesArray = (start) => {
    let times = [];
    let startTime = new Date();
    startTime.setHours(start, 0, 0); // set start time to start hours

    while (
      startTime.getHours() < 19 ||
      (startTime.getHours() === 19 && startTime.getMinutes() === 0)
    ) {
      let startMinutes = startTime.getMinutes();
      let endHours =
        startMinutes === 0 ? startTime.getHours() : startTime.getHours() + 1;
      let endMinutes = startMinutes === 0 ? 30 : 0;

      let time = {
        start: startTime.getHours() + ":" + (startMinutes === 0 ? "00" : "30"),
        end: endHours + ":" + (endMinutes === 0 ? "00" : "30"),
      };

      times.push(time);
      startTime.setMinutes(startTime.getMinutes() + 30);
    }
    return times;
  };

  let startHour;
  if (selectedDatePu === selectedDateDo) {
    startHour =
      boxTitle === "Pick up"
        ? 15
        : parseInt(selectedTimePu.start.split(":")[0]) + 1;
  } else {
    startHour = boxTitle === "Pick up" ? 15 : 13;
  }
  const timesList = getTimesArray(startHour);

  return (
    <div className="flex flex-col justify-between absolute right-0 border-5 border-black bg-white w-4/6 h-56">
      {/* Dates and times */}
      <div className="py-4 flex justify-center items-center h-[90%]">
        {/* Dates */}
        <div className="flex flex-col w-1/2 h-full gap-y-3 items-center justify-between">
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4871 4.91275L6.19707 0.672751C6.10411 0.579023 5.99351 0.504629 5.87165 0.45386C5.74979 0.403092 5.61908 0.376953 5.48707 0.376953C5.35506 0.376953 5.22435 0.403092 5.10249 0.45386C4.98063 0.504629 4.87003 0.579023 4.77707 0.672751L0.53707 4.91275C0.443342 5.00571 0.368947 5.11632 0.318179 5.23817C0.26741 5.36003 0.241272 5.49074 0.241272 5.62275C0.241272 5.75476 0.26741 5.88547 0.318179 6.00733C0.368947 6.12919 0.443342 6.23979 0.53707 6.33275C0.724433 6.519 0.977884 6.62354 1.24207 6.62354C1.50626 6.62354 1.75971 6.519 1.94707 6.33275L5.48707 2.79275L9.02707 6.33275C9.21333 6.5175 9.46473 6.62165 9.72707 6.62275C9.85868 6.62351 9.98914 6.59829 10.111 6.54852C10.2328 6.49876 10.3436 6.42543 10.4371 6.33275C10.5341 6.24313 10.6125 6.13517 10.6676 6.01509C10.7227 5.89502 10.7535 5.76521 10.7581 5.63318C10.7628 5.50114 10.7412 5.36949 10.6947 5.24584C10.6482 5.12218 10.5776 5.00898 10.4871 4.91275Z"
              fill="black"
            />
          </svg>
          <div
            className={`${
              boxTitle === "Pick up" && "justify-center"
            } flex flex-col items-center  px-2 text-center w-full h-full overflow-y-scroll no-scrollbar`}
          >
            {/* Map dates into options */}
            {boxTitle === "Pick up"
              ? dayListPu.map((v) => (
                  <p
                    className={`hover:bg-inactive-green py-0.5 hover:text-white w-full ${
                      selectedDatePu === v && "bg-inactive-green text-white"
                    }`}
                    key={v}
                    onClick={(e) => {
                      setSelectedDatePu(v);
                    }}
                  >
                    {v}
                  </p>
                ))
              : dayListDo.map((v) => (
                  <p
                    className={`hover:bg-inactive-green py-0.5 hover:text-white w-full ${
                      selectedDateDo === v && "bg-inactive-green text-white"
                    }`}
                    key={v}
                    onClick={(e) => {
                      setSelectedDateDo(v);
                    }}
                  >
                    {v}
                  </p>
                ))}
          </div>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.51293 2.08774L4.80293 6.32774C4.89589 6.42147 5.00649 6.49586 5.12835 6.54663C5.25021 6.5974 5.38092 6.62354 5.51293 6.62354C5.64494 6.62354 5.77565 6.5974 5.89751 6.54663C6.01937 6.49586 6.12997 6.42147 6.22293 6.32774L10.4629 2.08774C10.5567 1.99477 10.6311 1.88417 10.6818 1.76231C10.7326 1.64045 10.7587 1.50975 10.7587 1.37774C10.7587 1.24573 10.7326 1.11502 10.6818 0.99316C10.6311 0.871301 10.5567 0.7607 10.4629 0.667737C10.2756 0.481486 10.0221 0.376945 9.75793 0.376945C9.49374 0.376945 9.24029 0.481486 9.05293 0.667737L5.51293 4.20774L1.97293 0.667738C1.78667 0.482993 1.53527 0.378843 1.27293 0.377738C1.14132 0.376977 1.01086 0.402202 0.889022 0.451966C0.767185 0.501731 0.656369 0.575056 0.562929 0.667738C0.465854 0.757356 0.3875 0.865322 0.332393 0.985397C0.277286 1.10547 0.24652 1.23528 0.24187 1.36731C0.237221 1.49935 0.258782 1.631 0.305307 1.75465C0.351832 1.8783 0.422398 1.99151 0.51293 2.08774Z"
              fill="black"
            />
          </svg>
        </div>
        {/* Times */}
        <div className="flex flex-col w-1/2 h-full gap-y-3 items-center justify-between">
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4871 4.91275L6.19707 0.672751C6.10411 0.579023 5.99351 0.504629 5.87165 0.45386C5.74979 0.403092 5.61908 0.376953 5.48707 0.376953C5.35506 0.376953 5.22435 0.403092 5.10249 0.45386C4.98063 0.504629 4.87003 0.579023 4.77707 0.672751L0.53707 4.91275C0.443342 5.00571 0.368947 5.11632 0.318179 5.23817C0.26741 5.36003 0.241272 5.49074 0.241272 5.62275C0.241272 5.75476 0.26741 5.88547 0.318179 6.00733C0.368947 6.12919 0.443342 6.23979 0.53707 6.33275C0.724433 6.519 0.977884 6.62354 1.24207 6.62354C1.50626 6.62354 1.75971 6.519 1.94707 6.33275L5.48707 2.79275L9.02707 6.33275C9.21333 6.5175 9.46473 6.62165 9.72707 6.62275C9.85868 6.62351 9.98914 6.59829 10.111 6.54852C10.2328 6.49876 10.3436 6.42543 10.4371 6.33275C10.5341 6.24313 10.6125 6.13517 10.6676 6.01509C10.7227 5.89502 10.7535 5.76521 10.7581 5.63318C10.7628 5.50114 10.7412 5.36949 10.6947 5.24584C10.6482 5.12218 10.5776 5.00898 10.4871 4.91275Z"
              fill="black"
            />
          </svg>
          <div className="flex flex-col items-center px-2 text-center w-full h-full overflow-y-scroll no-scrollbar">
            {/* Map hours into options */}
            {timesList.map((time) => (
              <p
                className={`py-0.5 hover:bg-inactive-green hover:text-white w-full ${
                  boxTitle === "Pick up"
                    ? selectedTimePu.start === time.start &&
                      "bg-inactive-green text-white"
                    : selectedTimeDo.start === time.start &&
                      "bg-inactive-green text-white"
                }`}
                key={time.start}
                onClick={(e) => {
                  let newTime = { start: time.start, end: time.end };
                  boxTitle === "Pick up"
                    ? setSelectedTimePu(newTime)
                    : setSelectedTimeDo(newTime);
                }}
              >
                {`${time.start} - ${time.end}`}
              </p>
            ))}
          </div>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.51293 2.08774L4.80293 6.32774C4.89589 6.42147 5.00649 6.49586 5.12835 6.54663C5.25021 6.5974 5.38092 6.62354 5.51293 6.62354C5.64494 6.62354 5.77565 6.5974 5.89751 6.54663C6.01937 6.49586 6.12997 6.42147 6.22293 6.32774L10.4629 2.08774C10.5567 1.99477 10.6311 1.88417 10.6818 1.76231C10.7326 1.64045 10.7587 1.50975 10.7587 1.37774C10.7587 1.24573 10.7326 1.11502 10.6818 0.99316C10.6311 0.871301 10.5567 0.7607 10.4629 0.667737C10.2756 0.481486 10.0221 0.376945 9.75793 0.376945C9.49374 0.376945 9.24029 0.481486 9.05293 0.667737L5.51293 4.20774L1.97293 0.667738C1.78667 0.482993 1.53527 0.378843 1.27293 0.377738C1.14132 0.376977 1.01086 0.402202 0.889022 0.451966C0.767185 0.501731 0.656369 0.575056 0.562929 0.667738C0.465854 0.757356 0.3875 0.865322 0.332393 0.985397C0.277286 1.10547 0.24652 1.23528 0.24187 1.36731C0.237221 1.49935 0.258782 1.631 0.305307 1.75465C0.351832 1.8783 0.422398 1.99151 0.51293 2.08774Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      {/* Confirm and close button */}
      <button
        className="bg-black text-white uppercase font-semibold h-[10%]"
        onClick={() => {
          setShowSelect(false);
        }}
      >
        Done
      </button>
    </div>
  );
};

export default DateTimeSelect;
