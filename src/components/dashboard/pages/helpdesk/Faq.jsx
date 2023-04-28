import React from 'react';
// import {  FaArrowLeft   } from "react-icons/fa";
import questions from './helpdeskData';
import { data } from './helpdeskData';
import Smile from '../../../../assets/smile.svg';
import Send from '../../../../assets/sendicon.svg';
import Arrow from '../../../../assets/arrow-left.svg';

const Faq = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <div className='flex p-3'>
        <div className='  ml-6 w-full  border border-pink rounded p-3 mt-8 mb-14'>
          <h5 className='flex gap-3 items-center lg:text-[24px] md:text-xl text-xl mb-4'>
            <img src={Arrow} alt={Arrow} />
            Question
          </h5>
          <div className='w-full  '>
            <table
              className='mt-7 border-collapse border border-pink rounded w-full items-center  md:text-xl text-sm 
        table-auto lg:overflow-x-auto md:overflow-x-scroll overflow-x-scroll '
            >
              {data.map((value) => {
                return (
                  <tr className=' lg:text-xl border-b items-center'>
                    <th className='p-4 text-start'>{value.title}</th>
                    <th className='p-4 text-center'>{value.titleTwo}</th>
                    <th className='p-4 text-end '>{value.titleThree}</th>
                  </tr>
                );
              })}
              {questions.map((question) => {
                return (
                  <tr className=' lg:text-[16px] items-center'>
                    <td className='px-4 py-2 text-start '>
                      {question.question}
                    </td>
                    <td className='px-4 py-2 text-center'>{question.name}</td>
                    <td className='px-4 py-2  text-end'>{question.time}</td>
                  </tr>
                );
              })}
            </table>
          </div>
          <div className='mt-8  border rounded border-pink '>
            <h5 className='border-b border-pink p-2 lg:text-xl md:text-lg text-lg'>
              Ask a Question
            </h5>
            <textarea
              name=''
              id=''
              cols='30'
              rows='10'
              className='w-full outline-none p-2 lg:text-xl md:text-lg text-[16px]'
            ></textarea>
            <div className='w-full relative'>
              <input
                type='text'
                placeholder='Send a message'
                className='w-full border border-pink rounded p-2 outline-none  '
              />
              <div className='flex gap-3 items-center absolute bottom-2 right-14'>
                <img src={Smile} alt={Smile} />
                <img src={Send} alt={Send} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
