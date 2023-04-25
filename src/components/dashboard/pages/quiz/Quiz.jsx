import React from 'react';
import DashboardHeader from '../../DashboardHeader';
import Sidebar from '../../Sidebar';
import questions from './quiz';
import { useSelector, useDispatch } from 'react-redux';
import QuizModalOne from './QuizModalOne';
import { openModal } from '../../../../apps/modal/modalSlice';
import { setChosenOption } from '../../../../apps/quizSlice';
const Quiz = () => {
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  return (
    <div className=' w-full h-full relative'>
      {isOpen && <QuizModalOne />}
      <DashboardHeader />
      <div className='flex p-3'>
        <Sidebar />
        <div className='px-6 pt-6 relative w-full'>
          <header className='lg:text-[32px]'>
            Module 1: Introduction to design Quiz
          </header>
          <p className='text-lg'>Questions and Answers</p>
          {questions.map((question, key) => {
            return (
              <div key={key} className='mt-14 mb-20 flex flex-col '>
                <div className='mb-4 flex '>
                  <p className='text-[20px]'>{question.id}.</p>
                  <h3 className='ml-2 text-[20px]'>{question.question}</h3>
                </div>
                <div className='flex lg:flex-row md:flex-col flex-col text-lg'>
                  <button
                    onClick={() => {
                      dispatch(setChosenOption('C'));
                    }}
                    className='mr-12 lg:ml-0 md:ml-2 hover:text-blue'
                  >
                    {question.option1}
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setChosenOption('C'));
                    }}
                    className='mr-12 hover:text-blue'
                  >
                    {' '}
                    {question.option2}
                  </button>
                  <button
                    onClick={() => {
                      dispatch(setChosenOption('C'));
                    }}
                    className='mr-12 hover:text-blue'
                  >
                    {' '}
                    {question.option3}
                  </button>
                  <button
                    className='mr-12 hover:text-blue'
                    onClick={() => {
                      dispatch(setChosenOption('C'));
                    }}
                  >
                    {' '}
                    {question.option4}
                  </button>
                </div>
              </div>
            );
          })}
          <div>
            <button
              onClick={() => dispatch(openModal())}
              className='bg-purple text-white text-center rounded p-2 w-20 absolute right-0 my-6 mr-6'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
