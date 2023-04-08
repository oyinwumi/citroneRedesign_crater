import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom';
import DashboardHeader from '../../../dashboard/pages/navigation/DashboardHeader'
import Sidebar from '../../../dashboard/pages/navigation/Sidebar'
import courseData from './coursedata';
import { FaChevronRight } from "react-icons/fa";

import { useParams } from 'react-router-dom';

const CourseCategory = () => {
  const [data , setData] = useState([]);
  const { course_category } = useParams()
  useEffect(()=>{
     let filteredData = courseData.filter((c)=>{

      return c.categoryId === course_category 
      
     })
     setData(filteredData);
  },[course_category ])
  console.log(course_category )
  return (
    <div className='w-full '>
       <DashboardHeader/>
       <div className='flex p-3 '>
       <Sidebar/>
        <div className=' w-full'>
            <div className='my-6'>
                <p className='ml-6 flex items-center'>courses <Link  to="/moduleone"className='mx-2 text-sm'>< FaChevronRight/> </Link>Module 1</p>
            </div>
        <h5 className='text-[24px] mb-4 ml-6'>Beginner Level: All Courses</h5>
        <div className='flex  flex-wrap items-center mb-14 '>

            {data.map((course)=>{
                return <Link to={course.link} className=' lg:w-1/4 md:w-full w-full items-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
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

export default CourseCategory