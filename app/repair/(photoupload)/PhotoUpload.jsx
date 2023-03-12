import Image from 'next/image';
import React from 'react';
import UpArrow from '../../assets/icons/uparrow.svg';
import {useRepairContext} from '../../(Context)/repair';

const PhotoUpload = ({idx}) => {
  const {uploadedFiles, setUploadedFiles} = useRepairContext();
  const handleUpload = (e) => {
    console.log('uploadedfile', e.target.files);
    const currentFileIdx = uploadedFiles.findIndex(
      (file) => file.fileId === idx,
    );
    const updatedFile = {
      ...uploadedFiles[currentFileIdx],
      fileUrl: URL.createObjectURL(e.target.files[0]),
    };
    const newFiles = [
      ...uploadedFiles.slice(0, currentFileIdx),
      updatedFile,
      ...uploadedFiles.slice(currentFileIdx + 1),
    ];
    setUploadedFiles(newFiles);
  };

  return (
    <div className='flex'>
      {/* File upload */}
      <div>
        <p className='text-xl font-semibold mb-1'>Media</p>
        <p className='text-sm mb-2'>format: JPEG, MPEG, MOV</p>
        <div className='w-72 h-48 border-5 border-black flex flex-col justify-center items-center relative'>
          {!uploadedFiles[idx - 1]?.fileUrl ? (
            <button
              onClick={() => {
                document.getElementById('getFile').click();
              }}
              className='w-16 h-16 mb-1 border-5 border-black flex justify-center items-center bg-active-green rounded-full'
            >
              <Image
                src={UpArrow}
                alt='Upload'
              />
            </button>
          ) : (
            <Image
              onClick={() => {
                document.getElementById('getFile').click();
              }}
              src={uploadedFiles[idx - 1]?.fileUrl}
              fill
              alt='Image Added!'
            />
          )}

          <input
            id='getFile'
            onChange={handleUpload}
            type='file'
            className='hidden'
          />
        </div>
      </div>
      {/* Comment box */}
      <div>
        <p className='text-xl font-semibold mb-1'>Comment</p>
        <p className='text-sm mb-2'>Write down the message if you want.</p>
        <textarea
          value={uploadedFiles[idx - 1]?.comment}
          onChange={(e) => {
            const currentFileIdx = uploadedFiles.findIndex(
              (file) => file.fileId === idx,
            );
            const updatedFile = {
              ...uploadedFiles[currentFileIdx],
              comment: e.target.value,
            };
            const newFiles = [
              ...uploadedFiles.slice(0, currentFileIdx),
              updatedFile,
              ...uploadedFiles.slice(currentFileIdx + 1),
            ];

            setUploadedFiles(newFiles);
          }}
          placeholder='type here...'
          className='p-4 w-96 h-48 -ml-1 border-5 border-black'
        ></textarea>
      </div>
    </div>
  );
};

export default PhotoUpload;
