import React from 'react'
import CoursePageNav from '../coursePage/CoursePageNav'
import Sidebar from '../coursePage/Sidebar'
import beginnerCourse from '../coursePage/beginner/beginner'


const button= <button className='bg-purple text-white text-center rounded p-3 '>start</button>
const Assignment = () => {
  return (
    <div className='lg:p-8'>
        <CoursePageNav/>
        <div className='flex'>
            <div className="lg:w-1/6">
                <Sidebar/>
            </div>
            <header className='ml-6'>Modules</header>
            <div>
               {beginnerCourse.map((course)=>{
                return <div className='border border-lightgrey rounded p-3 flex justify-between'>
                    <div className='flex'>
                        <img src={course.img} alt=""  className='w-[100px] h-[100px]'/>
                        <div className='ml-4'>
                          <header className='text-[24px]'>{course.name}</header>
                          <p className='text-extralight'>{course.date}</p>
                        </div>
                    </div>
                    <div>{button}</div>
                </div>
               })}
            </div>
        </div>

    </div>
  )
}

export default Assignment