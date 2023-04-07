import React from 'react'
import CoursePageNav from '../coursePage/CoursePageNav'
import Sidebar from '../coursePage/Sidebar'
import beginnerCourse from '../coursePage/beginner/beginner'
import { FaArrowLeft} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Scoreboard = () => {
    
  return (
    <div className='lg:p-8  w-full'>
    <CoursePageNav/>
    <div className='flex p-3'>
            <Sidebar/>
        
        <div className='w-full mx-6'>
        <h5 className='flex items-center mt-6  text-xl'><Link to='/dashboard' className='mr-3'><FaArrowLeft/></Link> Scoreboard</h5>
      <div className='flex justify-between  mt-4'>
        <p className=''>Modules</p>
        <p className=''>Grades</p>
        </div>
        <div className='mt-6 w-full '>
           {beginnerCourse.map((course)=>{
            return <div className='border border-lightgrey rounded p-2 flex  lg:flex-row md:flex-col flex-col justify-between w-full mb-4 items-center  ' >
                <div className='flex items-center w-full'>
                    <img src={course.img} alt=""  className='w-[100px] h-[100px]'/>
                    <div className='ml-4'>
                      <header className='lg:text-[24px] md:text-[20px] text-[px] '>{course.name}</header>
                      <p className='text-extralight'>{course.date}</p>
                    </div>
                </div>
                <div className='text-[24px] p-2 lg:ml-0  ml-[60%] font-bold '>{course.grade}</div>
            </div>
           })}
        </div>
        </div>
    </div>

</div>
  )
}

export default Scoreboard