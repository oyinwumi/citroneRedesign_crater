import React from 'react'
import DashboardHeader from '../../dashboard/pages/navigation/DashboardHeader';
import Sidebar from '../../dashboard/pages/navigation/Sidebar';
// import {  FaArrowLeft   } from "react-icons/fa";
import  questions  from './helpdeskData';
import {data} from './helpdeskData';
import Smile from '../../../assets/smile.svg';
import Send from '../../../assets/sendicon.svg';
import Arrow from '../../../assets/arrow-left.svg'

const Faq = () => {
  return (
    <div className='w-full'>
      <DashboardHeader/>
        <div className='flex p-3'>
            <Sidebar/>
     <div className=' w-full p-3 mt-8 mb-14'>
        <h5 className='flex gap-3 items-center lg:text-[24px] md:text-xl text-xl mb-4'>< img src={Arrow} alt={Arrow}/>Question</h5>
       <div className='w-full border border-pink rounded lg:overflow-x-auto md:overflow-x-scroll overflow-x-scroll '>
        {data.map((item)=>{
            return <div className='flex justify-between items-center p-4 lg:text-xl md:text-lg text-sm font-bold  border-b border-black'>
                <h2 >{item.title}</h2>
                <h2 className='ml-28'> {item.titleTwo}</h2>
                <h2 >{item.titleThree}</h2>
            </div>
        })}
        {questions.map((question)=>{
            return <div className='flex justify-between items-center text-center lg:text-[16px] md:text-sm text-xs  px-4 py-2'>
                <p className='' > {question.question}</p>
                <p className='' > {question.name} </p>
                <p > {question.time} </p>
            </div>
        })}
     </div>
        <div className='mt-8  border rounded border-pink '>
          <h5 className='border-b border-pink p-2 lg:text-xl md:text-lg text-lg' >Ask a Question</h5>
          <textarea name="" id="" cols="30" rows="10" className='w-full outline-none p-2 lg:text-xl md:text-lg text-[16px]'></textarea>
        <div className="w-full relative">
             <input type="text" placeholder="Send a message" className="w-full border border-pink rounded p-2 outline-none  "/> 
            <div className="flex gap-3 items-center absolute bottom-2 right-14">
              <img src={Smile} alt={Smile} />
              <img src={Send} alt={Send} />
           </div>
        </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default Faq