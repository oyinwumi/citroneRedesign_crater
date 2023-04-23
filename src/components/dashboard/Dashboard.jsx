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
import recentActivity from '../dashboard/activity';
import Blue from '../../assets/blue-square.svg';
import Orange from '../../assets/orange-square.svg'
import { useSelector } from 'react-redux';
import LogoutModal  from '../pages/logoutPage/LogoutModal'


const button= <button className='bg-purple text-white text-center rounded-lg p-2 w-24 '>Completed</button>
const Dashboard = () => {
    const {isOpen } = useSelector((store) => store.modal);
    const [date, setDate] = useState(new Date());
  return (
    <div className='w-full'> 
      { isOpen && <LogoutModal/>}
     <CoursePageNav/>
     <div className="flex p-3  mb-14">
        <Sidebar/>
        <div className='flex  lg:flex-row md:flex-col flex-col w-full px-6 '>
            <div className='w-full mt-8'>
                <header className='mb-4 text-xl'>Hi, username</header>
                <div className='flex gap-8  lg:flex-row md:flex-row flex-col'>
                   {dashboardUser.map((user)=>{
                    return <div className='p-4 border border-pink rounded-lg flex  lg:w-1/3 md:w-1/3 w-full h-24 items-center'>
                        <div className='w-14 h-14 justify-between border border-pink rounded-full bg-pink p-4 items-center mr-4'>
                        <img src={user.icon} alt={user} />
                        </div>
                        <div className='flex flex-col mt-2'>
                            <h5 className='text-darkgray ;g:text-lg md:text-sm text-sm'>{user.title}</h5>
                            <p className=' lg:text-[24px] md:text-xl text-xl'>{user.detail}</p>
                        </div>
                    </div>
                   })} 
                </div>
               <div className='mt-12'>
                <h2 className='text-xl mb-4 font-bold'>Scheduled Classes</h2>
                {classes.map((item)=>{
                    return <div className='flex  lg:flex-row md:flex-row flex-col justify-between border p-3 border-white rounded bg-white shadow mb-5' >
                        <div className='lg:text-xl md:text-lg text-[16px] lg:block md:block flex gap-5'>
                            <h2 className='mb-2  font-bold'>{item.day}</h2>
                            <p>{item.date}</p>
                        </div>
                        <div className='lg:text-xl md:text-lg text-[16px]  lg:block md:block flex gap-5'>
                            <h2 className='mb-2 font-bold'>{item.topic}</h2>
                            <p>{item.time}</p>
                        </div>
                        <div className=''>
                        <button className='bg-white  border border-purple text-purple lg:text-xl md:text-lg text-[16px] rounded-lg p-2 lg:w-28 md:w-28 w-24 '>Join Class</button> 
                        </div>
                        
                    </div>
                })}
                 <button  className='bg-white text-purple border lg:text-xl md:text-lg text-[16px] border-purple  text-center rounded-lg p-2 lg:w-[109px] md:w-24 w-28 h-[46px] lg:ml-[89%] md:ml-[85%] ml-[70%] lg:mt-8 md:mt-6 mt-4'>View All</button>
               </div>
               <div className='mt-14'>
                <h2 className='text-xl font-bold ml-2'>Student Recent Activity</h2>
                <div className='mt-6'>
                    {recentActivity.map((activity)=>{
                        return <div className='flex lg:flex-row md:flex-row flex-col items-center justify-between  lg:ml-6 md:ml-4 ml-0 md:mb-4 mb-4 '>
                            <div className='flex gap-4  '>
                                <img src={activity.iconOne} alt={activity.iconOne} />
                                <div  className='text-[16px] font-semibold'>
                                    <h5>{activity.header}</h5>
                                    <div className='flex gap-2  mt-2'>
                                        <img src={activity.iconTwo} alt={activity.iconTwo} />
                                        <p className='text-lightergrey '>{activity.day}</p>
                                    </div>
                                </div>
                            </div>
                         <div className='flex gap-24 md:my-4 my-4'>
                         <div className=' lg:order-1 md:order-2 order-2'>
                                <p> {activity.level}</p>
                            </div>
                            <div className='flex justify-between flex-row gap-2 font-semi-bold  lg:order-2 md:order-1 order-1'>
                                <img src={activity.iconThree} alt={activity.iconThree}/>
                                <p>{activity.profileName}</p>
                            </div>
                         </div>
                        </div>
                    })}
                </div>
               </div>
               <div className=' mt-12'>
                 <div className='flex gap-3 items-center mb-10 font-bold'>
                 <img src={SmallGraph} alt={SmallGraph} />
                <h2 className='text-xl  '>Weekly Progress</h2>
                 </div>
                 <div className='flex  justify-center gap-10 w-full items-center mx-auto mb-10'  >
                    <img src={Blue} alt={Blue} />
                    <img src={Orange} alt={Orange} />
                 </div>
                <div className='w-full'>
                  <img src={Barchart} alt={Barchart}  className='w-full h-[45vh] '/>  
                </div>
               </div>
            </div> 
            <div className='mt-8 lg:ml-10 md:ml-8 ml-0  '>
                <header className='text-xl font-bold lg:mx-0 md:mx-auto mx-0 md:text-center' >Calender</header>
            <Calendar onChange={setDate} value={date} className='react-calendar lg:mx-0 md:mx-auto mx-0' />
            <div className='mt-12'>
                <h5 className='text-xl md:text-center'>Completed Modules</h5>
                <div className='mt-4'>
                    <img src={CompleteImage} alt={CompleteImage} className='lg:mx-0 md:mx-auto mx-0'/>
                </div>
            </div>
            <div className='mt-12'>
                <h5 className='text-xl'>My Assignment</h5>
                <div className='mt-4'>
                   {courseData.slice(0,4).map((course)=>{
                    return<div className='border border-lightgrey rounded p-2 flex  lg:flex-col md:flex-row flex-col  justify-between  mb-4  ' >
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
                    <Link to='/assignmentqest' className='p-2 lg:ml-[60%] md:ml[60%] ml-[50%] md:mt-8'>{button}</Link>
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