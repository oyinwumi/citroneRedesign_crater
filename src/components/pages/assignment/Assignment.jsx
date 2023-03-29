import React from 'react'
import CoursePageNav from '../coursePage/CoursePageNav'
import Sidebar from '../coursePage/Sidebar'

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
                
            </div>
        </div>

    </div>
  )
}

export default Assignment