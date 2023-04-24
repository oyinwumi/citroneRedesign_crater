import React from 'react'
import DashboardHeader from '../../dashboard/pages/navigation/DashboardHeader';
import Sidebar from '../../dashboard/pages/navigation/Sidebar';
import Cuate from '../../../assets/cuate.png'
import HelpdeskModal from './HelpdeskModal';

const HelpDesk = () => {
  return (
    <div className='w-full '>
      <DashboardHeader/>
        <div className='flex p-3 '>
          <Sidebar/>
          <div className='items-center w-full bg-gray h-[942px]  z-10 relative '>
          <HelpdeskModal/>
         <div className='opacity-[50%]'>
         <img src={Cuate} alt={Cuate} className='lg:w-auto md:w-auto w-[200px] mt-14 lg:ml-[25%] ml-[40%]' />
            <p className='font-bold lg:text-lg md:text-lg text-sm text-center mt-8 lg:w-[395px] md:w-[380px] w-[280px] lg:ml-[25%] md:ml-[40%] ml-[40%] '>Take a course in Tech and find answers to common questions.</p>
         </div>
          </div>
        </div>
    </div>
  )
}

export default HelpDesk