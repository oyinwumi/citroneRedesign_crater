import React from 'react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../../DashboardHeader';
import Sidebar from '../../Sidebar';
import beginnerCourse from '../coursePage/courseCategory/coursedata';

const button = (
  <button className='bg-purple text-white text-center rounded p-2 w-20 '>
    Start
  </button>
);
const Assignment = () => {
  return (
    <div className='w-full'>
      <DashboardHeader />
      <div className='flex p-3'>
        <Sidebar />
        <div className='w-full px-6 '>
          <header className=' mt-6'>Modules</header>
          <div className='mt-6 w-full '>
            {beginnerCourse.map((course) => {
              return (
                <div className='border border-lightgrey rounded p-2 flex  lg:flex-row md:flex-row flex-col lg:items-center md:items-center justify-between w-full mb-4  '>
                  <div className='flex items-center '>
                    <img
                      src={course.img}
                      alt=''
                      className='w-[100px] h-[100px] '
                    />
                    <div className='ml-4'>
                      <header className='lg:text-[24px] md:text-[20px] text-[px] '>
                        {course.name}
                      </header>
                      <p className='text-extralight'>{course.date}</p>
                    </div>
                  </div>
                  <Link to='/assignmentqest' className='p-2'>
                    {button}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
