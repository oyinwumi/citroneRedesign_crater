import React from 'react';
import questions from './quiz';
import {  useDispatch } from 'react-redux';
import {  openModalThree } from '../../../../apps/modal/modalSlice';
// import { setScore } from '../../../../apps/quizSlice';
// import { setChosenOption } from '../../../../apps/quizSlice';

const Quiz = () => {

  const dispatch = useDispatch();
  const handleSubmit = () =>{
    dispatch(openModalThree());
   
  }

  return (
    <div className=' w-full h-full relative'>
      <div className='flex p-3'>
        <div className='px-6 pt-6 relative w-full'>
          <header className='lg:text-[32px]'>
            Module 1: Introduction to design Quiz
          </header>
          <p className='text-lg'>Questions and Answers</p>
          {questions.map((question, key) => {
            return (
              <div key={key} className='mt-14 mb-20 flex flex-col '>
                <div className='mb-4 flex '>
                  <p className='text-[20px]'>{question.questionText}.</p>
                  {/* <h3 className='ml-2 text-[20px]'>{question.}</h3> */}
                </div>
                <div className='flex lg:flex-row md:flex-col flex-col text-lg'>
                  {question.answerOptions.map((answerOption)=>{
                    return <button className='mr-12 lg:ml-0 md:ml-2 hover:text-blue'>{answerOption.answerText}</button>
                  })}
                  {/* <button className='mr-12 lg:ml-0 md:ml-2 hover:text-blue'> </button> */}
                  {/* <button className='mr-12 hover:text-blue'>  {question.option2} </button>
                  <button  className='mr-12 hover:text-blue' >  {question.option3} </button>
                  <button
                    className='mr-12 hover:text-blue'  >{question.option4} </button> */}
                </div>
              </div>
            );
          })}
          <div>
            <button
              onClick={handleSubmit}
              className='bg-purple text-white text-center rounded p-2 w-20 absolute right-0 my-6 mr-6' > Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
