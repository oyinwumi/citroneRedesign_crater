import React, {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { getModule } from '../../../../../apps/moduleSlice';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const loader = <h1 className='text-4xl '>Loading...</h1>

const CourseCategory = () => {

   const { level } = useParams();
    console.log(level)
  // alert(level)
  const dispatch = useDispatch();
  const {module, isLoading } =  useSelector((store)=> store.module)

  useEffect(()=>{
   dispatch(getModule(level))
   console.log(module)
  }, [level])

  return (
    <div className='w-full '>
      {/* <DashboardHeader /> */}
      <div className='flex p-3 '>
        {/* <Sidebar /> */}
        <div className=' w-full'>
          <div className='my-6'>
            <p className='ml-6 flex items-center'>
              courses{' '}
              <Link to='/moduleone' className='mx-2 text-sm'>
                <FaChevronRight />{' '}
              </Link>
              Module 1
            </p>
          </div>
          <h5 className='text-[24px] mb-4 ml-6'>Beginner Level: All Courses</h5>
          <div className='flex  flex-wrap items-center mb-14 '>

            {isLoading? loader : module.map((course) => {

              return (
                <Link 
                  to='/moduleone'
                  className=' lg:w-1/4 md:w-full w-full items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                >
                  <img src={course.imageUrl} alt={course.imageUrl} className=' w-full' />
                  <div className='ml-8 capitalize mb-4' key={course._id}>
                    <header className='font-[600] text-[16px]'>{course.module}</header>
                    <p className='text-xl text-black font-bold'>{course.title}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;