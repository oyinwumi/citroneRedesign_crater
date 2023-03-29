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
       <div className='ml-6'>
       <header>Module 1: Introduction to design Quiz</header>
        <p>Questions and Answers</p>
       </div>
       
        { questions.map((question)=>{
            return <div className='mt-6 mb-20'>
                <div className='mb-4'>
                <p>{question.id}</p>
                <h3>{question.question}</h3>
                </div>
                <div className='flex justify-evenly'>
                    <p>{question.option1}</p>
                    <p>{question.option2}</p>
                    <p>{question.option3}</p>
                    <p>{question.option4}</p>
                </div>
                <button className='text-white bg-purple text-center relative float-right p-3 rounded'>Submit</button>
            </div>
        })}
      </div>
    </div>
  )
}

export default Quiz