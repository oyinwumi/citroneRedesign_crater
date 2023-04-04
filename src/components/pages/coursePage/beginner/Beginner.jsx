import React from 'react'
import { Link } from 'react-router-dom';
import CoursePageNav from '../CoursePageNav'
import Sidebar from '../Sidebar'
import beginnerCourse from './beginner';
import { FaChevronRight } from "react-icons/fa";

const Beginner = () => {
  return (
    <div className='lg:p-8 '>
       <CoursePageNav/>
       <div className='flex p-3 '>
        <div className='lg:w-1/6'>
            <Sidebar/>
        </div>
        <div className='items-center '>
            <div className='my-6'>
                <p className='ml-6 flex items-center'>courses <Link  to="/moduleone"className='mx-2 text-sm'>< FaChevronRight/> </Link>Module 1</p>
            </div>
        <h5 className='text-[24px] mb-4 ml-6'>Beginner Level: All Courses</h5>
        <div className='flex  flex-wrap items-center mb-14 '>

            {beginnerCourse.map((course)=>{
                return <Link to={course.link} className=' lg:w-1/4 md:w-full w-10/12 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                     <img src={course.img} alt={course.img} className=" w-full" />
                    <div className='ml-6'>
                  <header>{course.header}</header>
                   <p>{course.text}</p>
                </div>
                </Link>
            })}
            
        </div>
        </div>
       </div>
    </div>
  )
}

export default Beginner