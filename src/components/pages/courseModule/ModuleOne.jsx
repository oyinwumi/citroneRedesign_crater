import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import CoursePageNav from '../coursePage/CoursePageNav';
import Sidebar from '../coursePage/Sidebar';
import moduleOne from './moduleone';


const ModuleOne = () => {
  return (
    <div className='lg:p-8  w-full'>
       <CoursePageNav/>
       <div className='flex p-3'>
        <div className='lg:w-1/6'>
            <Sidebar/>
        </div>
        <div className='mx-6  mb-14 overflow-x-hidden'>
        <div className='my-6'>
                <p className=' flex items-center '>courses <Link to='/moduleone' className='mx-2 text-sm'>< FaChevronRight/></Link>Module 1  <span className='mx-2 text-sm'>< FaChevronRight/></span>Lesson 1</p>
            </div>
        <h5 className='lg:text-[24px] md:text-xl text-xl mb-4 '>Module 1</h5>
        <p  className=' lg:text-lg mb-4' >This Module introduces you to product design, the design process, the tools product designers use and job opportunities for product designers.</p>
        <div  className=''>
            <header className='font-bold mb-2'>Learning Objectives</header>
            <ul className='font-extralight'>
                <li className='mb-2'>At the end of this module, you should:</li>
                <li className='mb-2' >Know who a product designer is</li>
                <li  className='mb-2'>Understand the design process</li>
                <li  className='mb-2'>Be familiar with the differnt design tools</li>
            </ul>
        </div>
          {moduleOne.map((lesson)=>{
            return    <div className=' mb-4 break-all'>
            <header className='mt-6 mb-2 Lg:text-[24px] md:text-xl text-xl'>{lesson.title}</header>
            <p className='mb-4 '>{lesson.description}</p>
            <p className='mb-2'>{lesson.text}</p>
           <div className='my-4  '>
           <p className='mb-2 text-[12px]'>{lesson.linkTitle}</p>
            <a className='lg:border border-lightergrey p-2  rounded hover:text-blue lg:pr-6' href={lesson.link} >{lesson.link}</a>
           </div>
           <div className='my-4 '>
           <p className='mb-2 text-[12px]'>{lesson.linkTitleTwo}</p>
           <a  className='lg:border border-lightergrey p-2 rounded hover:text-blue lg:pr-6' href={lesson.linkTwo} >{lesson.linkTwo}</a>
           </div>
           <div className='my-4'>
           <p className='mb-2 text-[12px]'>{lesson.linkTitleThree}</p>
           <a  className='lg:border border-lightergrey p-2 rounded hover:text-blue lg:pr-6'  href='/assignmentqest' >{lesson.linkThree}</a>
           </div>
           <div className='my-4 '>
           <p className='mb-2 text-[12px]'>{lesson.linkTitleFour}</p>
           <a  className='lg:border border-lightergrey p-2  rounded hover:text-blue lg:pr-6' href="/quiz" >{lesson.linkFour}</a>
           </div>
        </div>
        
          })}
          <button className=' mt-4 text-white bg-deepgreen hover:opacity-50 py-1 px-4 text-center rounded'>Complete</button>
        </div>
   
       </div>
    </div>
  )
}

export default ModuleOne