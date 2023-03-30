import React from 'react';
import CoursePageNav from '../../coursePage/CoursePageNav';
import Sidebar from '../../coursePage/Sidebar';
import questions from './quiz';

const Quiz = () => {
  return (
    <div className='lg: p-8'>
      <CoursePageNav/>
      < div className='flex'>
        <div className="lg:w-1/6">
            <Sidebar/>
        </div>
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
        <button className='bg-purple text-white text-center rounded p-2 w-20 absolute right-0 mt-6'>Submit</button>
       </div>
       
   
      </div>
    </div>
  )
}

export default Quiz