import React from 'react';
import { openModalTwo, closeModal } from '../../../../apps/modal/modalSlice';
import {  useDispatch } from 'react-redux';

const AssignmentModal = () => {
  const dispatch = useDispatch();

  return (
    <aside className='w-full  h-full bg-gray fixed z-10  '>
      <div className='bg-white  border border-white rounded-lg  lg:w-[432px]  md:w-[40%] w-[75%]  p-4 items-center mx-auto lg:mt-[13%] md:mt-[20%] mt-[25%] z-40  '>
        <h2 className='text-xl mb-4 '>Submit</h2>
        <p className='mb-4 '>
          Are you sure you want to submit this assignment?
        </p>
        <div>
          <button
            onClick={() => dispatch(openModalTwo())}
            className='w-full text-center bg-purple text-white border rounded mb-4 p-2'
          >
            Submit
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            className='w-full text-center bg-white text-purple  border rounded mb-4 p-2'
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AssignmentModal;
