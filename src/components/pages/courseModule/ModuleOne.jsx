import React from 'react'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import CoursePageNav from '../coursePage/CoursePageNav';
import Sidebar from '../coursePage/Sidebar';
import moduleOne from './moduleone';


const ModuleOne = () => {
  return (
    <div className='lg:p-8'>
       <CoursePageNav/>
       <div className='flex'>
        <div>
            <Sidebar/>
        </div>
        <div className=''>
        <div className='my-6'>
                <p className=' flex items-center  ml-6'>courses <Link to='/moduleone' className='mx-2 text-sm'>< FaChevronRight/></Link>Module 1  <span className='mx-2 text-sm'>< FaChevronRight/></span>Lesson 1</p>
            </div>
        <h5 className='text-[24px] mb-4 ml-6'>Module 1</h5>
        <p  className='ml-6 w-full text-lg mb-4' >This Module introduces you to product design, the design process, the tools product designers use and job opportunities for product designers.</p>
        <div  className='ml-6'>
            <header className='font-bold mb-2'>Learning Objectives</header>
            <ul className='font-extralight'>
                <li className='mb-2'>At the end of this module, you should:</li>
                <li className='mb-2' >Know who a product designer is</li>
                <li  className='mb-2'>Understand the design process</li>
                <li  className='mb-2'>Be familiar with the differnt design tools</li>
            </ul>
        </div>
          {moduleOne.map((lesson)=>{
            return    <div className='ml-6 mb-4 w-full'>
            <header className='mt-6 mb-2 text-[24px]'>{lesson.title}</header>
            <p className='mb-4'>{lesson.description}</p>
            <p className='mb-2'>{lesson.text}</p>
           <div className='my-4 w-full  '>
           <p className='mb-2 text-[12px]'>{lesson.linkTitle}</p>
            <a className='lg:border border-lightergrey p-2 w-full rounded hover:text-blue lg:pr-6' href={lesson.link} >{lesson.link}</a>
           </div>
           <div className='my-4 w-full'>
           <p className='mb-2 text-[12px]'>{lesson.linkTitleTwo}</p>
           <a  className='lg:border border-lightergrey p-2 w-full rounded hover:text-blue lg:pr-6' href={lesson.linkTwo} >{lesson.linkTwo}</a>
           </div>
           <div className='my-4 w-full'>
           <p className='mb-2 text-[12px]'>{lesson.linkTitleThree}</p>
           <a  className='lg:border border-lightergrey p-2 w-full rounded hover:text-blue lg:pr-6'  href={lesson.linkThree} >{lesson.linkThree}</a>
           </div>
           <div className='my-4 w-full'>
           <p className='mb-2 text-[12px]'>{lesson.linkTitleFour}</p>
           <a  className='lg:border border-lightergrey p-2 w-full rounded hover:text-blue lg:pr-6' href={lesson.linkFour} >{lesson.linkFour}</a>
           </div>
        </div>
        
          })}
          <button className='ml-6 mt-4 text-white bg-deepgreen hover:opacity-50 py-1 px-4 text-center rounded'>Complete</button>
        </div>
   
       </div>
    </div>
  )
}

export default ModuleOne