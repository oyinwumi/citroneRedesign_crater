import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import CompleteImage from '../../assets/completeimage.png'
import './calendar.css';
import CoursePageNav from './pages/navigation/DashboardHeader'
import Sidebar from './pages/navigation/Sidebar';
import dashboardUser from './dashboardUser';
import courseData from '../pages/coursePage/courseCategory/coursedata';
import classes from './pages/dashboardPage/scheduledClass';
import SmallGraph from '../../assets/smallgraph.svg';
import Barchart from '../../assets/barchart.png'

const button= <button className='bg-purple text-white text-center rounded-lg p-2 w-24 '>Completed</button>
const Dashboard = () => {
    const [date, setDate] = useState(new Date());
  return (
    <div className='w-full'> 
     <CoursePageNav/>
     <div className="flex p-3 ">
        <Sidebar/>
        <div className='flex  lg:flex-row md:flex-col flex-col w-full px-6 '>
            <div className='w-full mt-6'>
                <header className='mb-4 text-xl'>Hi, username</header>
                <div className='flex gap-8  lg:flex-row md:flex-row flex-col'>
                   {dashboardUser.map((user)=>{
                    return <div className='p-4 border border-pink rounded-lg flex  lg:w-1/3 md:w-1/3 w-full h-24 items-center'>
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
               <div className='mt-12'>
                <h1 className='text-xl mb-4 font-bold'>Scheduled Classes</h1>
                {classes.map((item)=>{
                    return <div className='flex justify-between border p-3 border-white rounded bg-white shadow mb-5' >
                        <div className='text-xl '>
                            <h2 className='mb-2  font-bold'>{item.day}</h2>
                            <p>{item.date}</p>
                        </div>
                        <div className=' text-xl '>
                            <h2 className='mb-2 font-bold'>{item.topic}</h2>
                            <p>{item.time}</p>
                        </div>
                        <div className=''>
                        <button className='bg-white  border border-purple text-purple text-xl text-center rounded-lg p-2 w- 28'>Join Class</button> 
                        </div>
                    </div>
                })}
                <button  
                   className='bg-white text-purple border text-xl border-purple  text-center rounded-lg p-2 w-[109px] h-[46px]  relative float-right mt-8'>View All</button>
               </div>
               <div></div>
               <div className=' mt-12'>
                 <div className='flex mb-10 font-bold'>
                 <img src={SmallGraph} alt={SmallGraph} />
                <h2 className='text-xl ml-2'>Weekly Progress</h2>
                 </div>
                <div>
                  <img src={Barchart} alt={Barchart} />  
                </div>
               </div>
            </div> 
            <div className='mt-6 ml-10 '>
                <header className='text-xl'>Calender</header>
            <Calendar onChange={setDate} value={date} className='react-calendar' />
            <div className='mt-10'>
                <h5 className='text-xl'>Completed Modules</h5>
                <div className='mt-4'>
                    <img src={CompleteImage} alt={CompleteImage}/>
                </div>
            </div>
            <div className='mt-10'>
                <h5 className='text-xl'>My Assignment</h5>
                <div className='mt-4'>
                   {courseData.slice(0,4).map((course)=>{
                    return<div className='border border-lightgrey rounded p-2 flex  lg:flex-col md:flex-row flex-col  justify-between w-full mb-4  ' >
                    <div className='flex items-center '>
                        <img src={course.img} alt=""  className='w-[100px] h-[100px] '/>
                        <div className='ml-4 items-center mt-6'>
                          <header className=''>{course.name}</header>
                          <div className='flex gap-9 mt-3'>
                            <p className='text-lightergrey text-sm'>{course.time}</p>
                            <p className='text-xs'>{course.finalGrade} <br /> <span className='text-[10px] text-lightergrey'>Final Grade</span></p>
                          </div>
                        </div>
                    </div>
                    <Link to='/assignmentqest' className='p-2 ml-[60%]'>{button}</Link>
                </div>
                   })}
                   <button  
                   className='bg-white text-purple border text-xl border-purple  text-center rounded-lg p-2 w-[109px] h-[46px]  relative float-right mt-8'>See more</button>
                </div>
            </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Dashboard