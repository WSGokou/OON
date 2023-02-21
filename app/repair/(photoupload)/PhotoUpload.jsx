import Image from "next/image";
import { ChangeEvent } from "react";
import UpArrow from "../../assets/icons/uparrow.svg";

const PhotoUpload = ({ uploadedFiles, setUploadedFiles, idx }) => {
  const handleUpload = (e) => {
    console.log(e.target.files);
    const fileUpdate = {
      ...uploadedFiles,
      name: URL.createObjectURL(e.target.files[0]),
    };
    console.log(fileUpdate);
    setUploadedFiles(fileUpdate);
  };

  return (
    <div className="flex">
      {/* File upload */}
      <div>
        <p className="text-xl font-semibold mb-1">Media</p>
        <p className="text-sm mb-2">format: JPEG, MPEG, MOV</p>
        <div className="w-72 h-48 border-5 border-black flex flex-col justify-center items-center relative">
          {!uploadedFiles.name ? (
            <button
              onClick={() => {
                document.getElementById("getFile").click();
              }}
              className="w-16 h-16 mb-1 border-5 border-black flex justify-center items-center bg-active-green rounded-full"
            >
              <Image src={UpArrow} alt="Upload" />
            </button>
          ) : (
            <Image
              onClick={() => {
                document.getElementById("getFile").click();
              }}
              src={uploadedFiles.name}
              fill
              alt="Image Added!"
            />
          )}

          <input
            id="getFile"
            onChange={handleUpload}
            type="file"
            className="hidden"
          />
        </div>
      </div>
      {/* Comment box */}
      <div>
        <p className="text-xl font-semibold mb-1">Comment</p>
        <p className="text-sm mb-2">Write down the message if you want.</p>
        <textarea
          value={uploadedFiles.comment}
          onChange={(e) => {
            const fileUpdate = { ...uploadedFiles, comment: e.target.value };
            setUploadedFiles(fileUpdate);
          }}
          placeholder="type here..."
          className="p-4 w-96 h-48 -ml-1 border-5 border-black"
        ></textarea>
      </div>
    </div>
  );
};

export default PhotoUpload;
