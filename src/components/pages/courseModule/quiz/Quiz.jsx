import React from 'react';
import CoursePageNav from '../../coursePage/CoursePageNav';
import Sidebar from '../../coursePage/Sidebar';
import questions from './quiz';
import { useSelector, useDispatch } from 'react-redux';
import { QuizModalOne } from './QuizModalOne';
import { openModal } from '../../../../apps/modal/modalSlice';

const Quiz = () => {
  const { isOpen} = useSelector((store)=> store.modal);
  const dispatch = useDispatch() ;
  return (

    <div className=' lg:p-8 w-full h-full relative'>
      { isOpen && <QuizModalOne/>}
      <CoursePageNav/>
      < div className='flex p-3' >
      <Sidebar/>
       <div className='ml-6 mt-6 relative w-full'>
      
       <header className='lg:text-[32px]'>Module 1: Introduction to design Quiz</header>
        <p className='text-lg'>Questions and Answers</p>
        { questions.map((question)=>{
            return <div className='mt-14 mb-20 flex flex-col '>
                <div className='mb-4 flex '>
                <p className='text-[20px]'>{question.id}.</p>
                <h3 className='ml-2 text-[20px]'>{question.question}</h3>
                </div>
                <div className='flex lg:flex-row md:flex-col flex-col text-lg'>
                    <p className='mr-12 lg:ml-0 md:ml-2 '>{question.option1}</p>
                    <p className='mr-12'>{question.option2}</p>
                    <p className='mr-12'>{question.option3}</p>
                    <p>{question.option4}</p>
                </div>
                
            </div>
        })}
        <div>
      
        <button onClick={() => dispatch(openModal())}
        className='bg-purple text-white text-center rounded p-2 w-20 absolute right-0 my-6 mr-6'>Submit</button>
          
        </div>
       </div>
       
      </div>
    </div>
  )
}

export default Quiz