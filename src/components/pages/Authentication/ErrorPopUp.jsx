import React from 'react';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';

const ErrorPopUp = () => {
  return (
    <div className='flex min-h-screen py-7 justify-center items-center bg-grey opacity-50'>
      <div className='w-120 h-61 bg-white flex flex-col items-center rounded-2xl'>
        <div className=' mt-7 border-[1.5px] border-red text-red font-light p-3 rounded-full'>
          <FaTimes />
        </div>

        <h3 className='text-2xl text-[#000] font-semibold mt-7'>Error</h3>
        <p className='mt-2 text-base text-[#000]'>
          Internet connection. Please try again
        </p>
        <button className='flex justify-center items-center bg-purple w-[123px] h-[40px] text-white text-base font-bold mt-6 rounded'>
          <FaArrowLeft /> <span className='ml-3'>Go back</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorPopUp;
