import React from 'react';
import {  FaCheck} from "react-icons/fa";
// import { useDispatch } from 'react-redux';

const AssignmentModalTwo = () => {
    // const dispatch = useDispatch();
  return (
    <aside  className='w-full items-center text-center h-full bg-gray fixed z-10 '>
  <div className='bg-white  border border-white rounded-lg  lg:w-[20%] md:w-[40%] w-[75%] p-4 items-center mx-auto lg:mt-[13%] md:mt-[20%] mt-[25%] z-100  '>
      <span className=''><FaCheck  className='bg-white w-5 h-5 border text-green border-green rounded-full p-1 text-center mx-auto my-4'/></span>
  <h2 className='text-[24px] mb-4 ' >Success!</h2>
  <p className='mb-4 '>Your quiz has been submitted</p>
  <div className='flex flex-col items-center'>
      <button className=' text-center bg-purple text-white border rounded mb-4 p-2 w-24 hover:opacity-50'>View Grade</button>
      <button className=' text-center bg-white text-purple border rounded mb-4 p-2 w-24 hover:opacity-50'>Edit</button>
  </div>
</div>
</aside>
  )
}

export default AssignmentModalTwo