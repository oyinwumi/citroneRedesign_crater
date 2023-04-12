import React from 'react'
import { Link } from 'react-router-dom';
import {  FaCheck} from "react-icons/fa";

const QuizModalThree = () => {
  return (
    <aside  className='w-full items-center text-center h-full bg-gray fixed z-10 '>
    <div className='bg-white  border border-white rounded-lg  lg:w-[20%] md:w-[40%] w-[75%] p-4 items-center mx-auto lg:mt-[13%] md:mt-[20%] mt-[25%]  z-100  '>
        <span className=''><FaCheck  className='bg-white w-5 h-5 border text-green border-green rounded-full p-1 text-center mx-auto my-4'/></span>
    <h2 className='text-[24px] mb-4 ' >100/100</h2>
    <p className='mb-4 '>Remarks: Welldone, Keep up with the good work</p>
    <div>
    <Link to='/dashboard'> <button className=' text-center bg-purple text-white border rounded mb-4 p-2'>Go Back</button></Link>
    </div>
</div>
</aside>
  )
}

export default QuizModalThree