import React, { useState } from "react";
import PhotoUpload from "./PhotoUpload";
import { useRepairContext } from "../../Context/repair";

const AddPhoto = () => {
  const { setOrderProgress, uploadedFiles, setUploadedFiles } =
    useRepairContext();
  // const [photoCounter, setPhotoCounter] = useState([1, 2, 3, 4, 5]);
  const photoCounter = [1];
  return (
    <div>
      <p className="mb-3.5 font-bold text-4xl">
        Do you want to add any photos?
      </p>
      <p className="mb-12 text-xl font-semibold">
        More infomation could help us with the repairs, or if you don’t just
        skip it.
      </p>
      {/* Photo upload boxes */}
      {photoCounter.map((count) => (
        <div key={count} className="flex items-center">
          <PhotoUpload idx={count} />
          {count > 1 && (
            <p
              onClick={() => {
                photoCounter.filter((a) => a !== count);
                // setPhotoCounter((prev) => prev.filter((a) => a !== count));
              }}
            >
              Remove
            </p>
          )}
        </div>
      ))}
      {/* Add more photos */}
      <p
        onClick={() => {
          console.log(photoCounter.at(-1));
          if (photoCounter.length < 5) {
            let counter = photoCounter;
            let i = 1;
            while (counter.includes(i)) i++;
            counter.push(i || counter[counter.length - 1] + 1);
            // setPhotoCounter((prev) => counter);
          }
        }}
        className="mt-5 text-2xl font-bold text-center"
      >
        Add more photos +
      </p>
      {/* Back skip and next buttons */}
      <div className="flex mt-14">
        {/* Back button */}
        <div
          onClick={() => {
            setOrderProgress(2);
          }}
          className="w-24 mr-auto h-12 border-5 border-black bg-white text-xl font-bold uppercase flex justify-center items-center cursor-pointer"
        >
          Back
        </div>
        <div
          onClick={() => {
            setOrderProgress(4);
            setUploadedFiles([]);
          }}
          className="w-24 h-12 text-xl font-bold uppercase flex justify-center items-center cursor-pointer"
        >
          Skip
        </div>
        <div
          onClick={() => {
            setOrderProgress(4);
          }}
          className="w-24 h-12 border-5 border-black bg-black text-white text-xl font-bold uppercase flex justify-center items-center cursor-pointer"
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default AddPhoto;
