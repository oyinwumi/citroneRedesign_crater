import React from 'react'
import {  FaCheck} from "react-icons/fa";
import {  openModalThree } from '../../../apps/modal/modalSlice';
import { useSelector ,useDispatch } from 'react-redux';
import QuizModalThree from './QuizModalThree';

const QuizModalTwo = () => {
  const { isOpenThree } = useSelector((store)=> store.modal);
  const dispatch = useDispatch();
  return (
    <aside  className='w-full items-center text-center h-full bg-gray fixed z-10 '>
      {isOpenThree && <QuizModalThree/>}
    <div className='bg-white  border border-white rounded-lg  lg:w-[20%] md:w-[40%] w-[75%] p-4 items-center mx-auto lg:mt-[13%] md:mt-[20%] mt-[25%] z-100  '>
        <span className=''><FaCheck  className='bg-white w-5 h-5 border text-green border-green rounded-full p-1 text-center mx-auto my-4'/></span>
    <h2 className='text-[24px] mb-4 ' >Success!</h2>
    <p className='mb-4 '>Your quiz has been submitted</p>
    <div>
        <button onClick={()=> dispatch(openModalThree())}
         className=' text-center bg-purple text-white border rounded mb-4 p-2'>View Grade</button>
    </div>
</div>
</aside>
  )
}

export default QuizModalTwo