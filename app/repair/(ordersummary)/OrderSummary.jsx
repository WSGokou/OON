'use client';
import {useRepairContext} from '../../(Context)/repair';
import React from 'react';
import ItemButton from '../serviceorder/(selectitem)/ItemButton';
import Image from 'next/image';

const OrderSummaryPage = () => {
  const {
    setOrderProgress,
    selectedService,
    uploadedFiles,
    selectedAddressDo,
    selectedAddressPu,
    selectedTimeDo,
    selectedTimePu,
    selectedDateDo,
    selectedDatePu,
  } = useRepairContext();

  const steps = [
    {
      id: 1,
      text: 'Item & Service',
      div: (
        <div className='flex'>
          <div className='mr-5'>
            <ItemButton />
          </div>
          <div className='self-end'>
            <p className='h-12 w-24 flex justify-center items-center text-xl font-semibold bg-black text-white'>
              Repairs
            </p>
            <p>{selectedService.text}</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      text: 'Photo / Comment',
      div: (
        <div>
          {uploadedFiles.map((file) => (
            <div
              className='flex'
              key={file.fileId}
            >
              <Image
                src={file.fileUrl}
                width={188}
                height={130}
                alt={file.fileId}
                className='mr-5 border-5 border-black'
              />
              <p>{file.comment}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: 4,
      text: 'Delivery information',
      div: (
        <div>
          {/* Pickup info */}
          <div className='mb-5 border-5 border-black'>
            {/* Top half */}
            <div className='flex border-b-5 border-black text-xl font-semibold'>
              <div className='text-white bg-black flex justify-center items-center w-32 h-16'>
                Pick up
              </div>
              <div className='bg-white w-96 flex pl-5 items-center'>
                {`${selectedDatePu} ${selectedTimePu.start} - ${selectedTimePu.end}`}
              </div>
            </div>
            {/* Bottom half */}
            <div className='h-16 bg-white flex items-center pl-7 text-lg'>
              {selectedAddressPu}
            </div>
          </div>
          {/* Dropoof info */}
          <div className='mb-5 border-5 border-black'>
            {/* Top half */}
            <div className='flex border-b-5 border-black text-xl font-semibold'>
              <div className='text-white bg-black flex justify-center items-center w-32 h-16'>
                Drop of
              </div>
              <div className='bg-white w-96 flex pl-5 items-center'>
                {`${selectedDateDo} ${selectedTimeDo.start} - ${selectedTimeDo.end}`}
              </div>
            </div>
            {/* Bottom half */}
            <div className='h-16 bg-white flex items-center pl-7 text-lg'>
              {selectedAddressDo}
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className='flex'>
      <div>
        <div>
          <p className='mb-11 font-bold text-4xl'>Order Summary</p>
          <div className='flex flex-col gap-y-6 justify-center relative'>
            {/* Left bar line */}
            <div className='h-full w-1.5 bg-black ml-[9px] absolute'></div>
            {/* Main steps */}
            {steps.map((item, idx) => (
              <div
                key={idx}
                className='flex'
              >
                {/* Left bar circles */}
                <div
                  className={`mr-4 w-6 h-6 rounded-full z-10 bg-active-green border-5 border-black `}
                ></div>
                {/* Step text and div */}
                <div className=''>
                  <p className='font-semibold text-xl mb-4'>{item.text}</p>
                  <div>{item.div}</div>
                </div>
              </div>
            ))}
            <div className='flex'>
              {/* Bottom black square */}
              <div className='mr-4 bg-black w-6 h-6 border-5 border-black self-end'></div>
              <div className='self-end'>
                <p className='font-semibold text-xl'>
                  If everything seems good,
                  <br />
                  please process the payment on the right.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setOrderProgress(4);
          }}
          className='w-48 h-12 ml-10 my-16 bg-white border-5 border-black flex items-center justify-center uppercase font-bold text-xl'
        >
          Back to edit
        </button>
      </div>
      <div> Payment</div>
    </div>
  );
};

export default OrderSummaryPage;
