import React from 'react'
import DashboardHeader from '../../dashboard/pages/navigation/DashboardHeader'
import Sidebar from '../../dashboard/pages/navigation/Sidebar'
import {  FaArrowLeft   } from "react-icons/fa";
 
const Chat = () => {
  return (
    <div className='w-full'>
    <DashboardHeader/>
    <div className='flex p-3'>
    <Sidebar/>
    <div className='p-3 mt-8'>
        <h5 className='flex gap-3 items-center lg:text-[24px] md:text-xl text-xl mb-4'>< FaArrowLeft/>Chat Room</h5>
    </div>
    </div>
    </div>
  )
}

export default Chat