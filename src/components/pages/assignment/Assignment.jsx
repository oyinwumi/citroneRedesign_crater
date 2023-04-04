import React from 'react'
import { Link } from 'react-router-dom'
import CoursePageNav from '../coursePage/CoursePageNav'
import Sidebar from '../coursePage/Sidebar'
import beginnerCourse from '../coursePage/beginner/beginner'


const button= <button className='bg-purple text-white text-center rounded p-2 w-20 '>Start</button>
const Assignment = () => {
  return (
    <div className='lg:p-8'>
        <CoursePageNav/>
        <div className='flex'>
            <div className="lg:w-1/6">
                <Sidebar/>
            </div>
            <div className='w-full'>
            <header className='ml-6 mt-6'>Modules</header>
            <div className='mt-6 w-full px-6'>
               {beginnerCourse.map((course)=>{
                return <div className='border border-lightgrey rounded p-2 flex  lg:flex-row md:flex-col flex-col  justify-between w-full mb-4 items-center ' >
                    <div className='flex items-center'>
                        <img src={course.img} alt=""  className='w-[100px] h-[100px]'/>
                        <div className='ml-4'>
                          <header className='lg:text-[24px] md:text-[20px] text-[px] '>{course.name}</header>
                          <p className='text-extralight'>{course.date}</p>
                        </div>
                    </div>
                    <Link to='/assignmentqest' className='lg:ml-0  ml-[60%]'>{button}</Link>
                </div>
               })}
            </div>
            </div>
        </div>

    </div>
  )
}

export default Assignment