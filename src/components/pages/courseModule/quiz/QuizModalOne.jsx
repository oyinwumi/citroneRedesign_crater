import React from 'react'
import { closeModal, openModalTwo } from '../../../../apps/modal/modalSlice';
import { useSelector ,useDispatch } from 'react-redux';
import QuizModalTwo from './QuizModalTwo';


export const QuizModalOne = () => {
  const { isOpenTwo} = useSelector((store)=> store.modal);
    const dispatch = useDispatch();
  return (
   
   <aside  className='w-full  h-full bg-gray fixed z-10  '>
        { isOpenTwo && <QuizModalTwo/>}
        <div className='bg-white  border border-white rounded-lg  lg:w-[20%]  md:w-[40%] w-[75%]  p-4 items-center mx-auto lg:mt-[13%] md:mt-[20%] mt-[25%] z-100  '>
        <h2 className='text-xl mb-4 ' >Submit</h2>
        <p className='mb-4 '>Are you sure you want to submit this quiz?</p>
        <div>
            <button onClick={()=> dispatch(openModalTwo())} className='w-full text-center bg-purple text-white border rounded mb-4 p-2'>Submit</button>
            <button 
            onClick={() => dispatch(closeModal())}
            className='w-full text-center bg-white text-purple  border rounded mb-4 p-2'>Cancel</button>
        </div>
        
    </div>
   </aside>
  )
}
