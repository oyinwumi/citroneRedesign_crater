import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SuccessPopUp = () => {
  return (
    <div className='flex min-h-screen py-7 justify-center items-center bg-grey/50'>
      <div className='w-120 h-61 bg-white flex flex-col items-center rounded-2xl'>
        <div className=' mt-7 border-[1.5px] border-green text-green font-light p-3 rounded-full'>
          <FaCheck />
        </div>

        <h3 className='text-2xl text-[#000] font-semibold mt-7'>Success!</h3>
        <p className='mt-2 text-base text-[#000]'>
          Your password has been changed successfully
        </p>
        <button className='flex justify-center items-center bg-purple w-[86px] h-[42px] text-white text-base font-bold mt-6 rounded'>
          <Link to='/login'>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default SuccessPopUp;
