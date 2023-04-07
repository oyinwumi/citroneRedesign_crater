import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import CoursePageNav from '../coursePage/CoursePageNav'
import Sidebar from '../coursePage/Sidebar';
import dashboardUser from './dashboardUser';


const Dashboard = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className='lg:p-8  w-full'> 
     <CoursePageNav/>
     <div className="flex p-3 ">
        <Sidebar/>
        <div className='flex w-full px-6 '>
            <div className='w-full mt-6'>
                <header className='mb-4 text-xl'>Hi, username</header>
                <div className='flex gap-8 '>
                   {dashboardUser.map((user)=>{
                    return <div className='p-4 border border-pink rounded-lg flex  w-1/3 h-24 items-center'>
                        <div className='w-14 h-14 justify-between border border-pink rounded-full bg-pink p-4 items-center mr-4'>
                        <img src={user.icon} alt={user} />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h5 className='text-darkgray text-lg'>{user.title}</h5>
                            <p className='text-[24px]'>{user.detail}</p>
                        </div>
                    </div>
                   })} 
                </div>
            </div> 
            <div className='mt-6 ml-10 '>
                <header className='text-xl'>Calender</header>
            <Calendar onChange={setDate} value={date} className='react-calendar' />
            </div>
        </div>
     </div>
    </div>
  )
}

export default Dashboard