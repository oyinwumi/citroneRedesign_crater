import React from 'react'
import { Link } from 'react-router-dom';
import Sidebar from '../../dashboard/pages/navigation/Sidebar'
import CoursePageNav from '../../dashboard/pages/navigation/DashboardHeader'
import play from '../../../assets/play.svg'
import send from '../../../assets/send.svg'
import more from '../../../assets/more.svg'
import math from '../../../assets/math.svg'
import playBlack from '../../../assets/playblack.svg'
import shuffle from '../../../assets/shuffle.svg'
import productDesignImage1 from '../../../assets/intro-to-product-design 1.png'
import productDesignImage2 from '../../../assets/intro-to-product-design 2.png'
import productDesignImage3 from '../../../assets/intro-to-product-design 3.png'
import productDesignImage4 from '../../../assets/intro-to-product-design 4.png'
import productDesignImage5 from '../../../assets/intro-to-product-design 5.png'
import productDesignImage6 from '../../../assets/intro-to-product-design 6.png'
import productDesignImage7 from '../../../assets/intro-to-product-design 7.png'
import "../liveSession/css/session.css"



export default function LiveSession() {
  return (
  <>
    <div>
        <CoursePageNav/>
    </div>

    <div className='flex'>
        <Sidebar/>
        <div className='xl:flex gap-9 w-full p-5 font-font '>

        {/* videoframe */}
 
        <div className='bg-grey2  md:w-[540px] p-8 rounded-md w-full h-min '>
          <div className='h-[311px] w-full bg-white rounded-md hover:cursor-pointer'>
          <div>
          <p className='uppercase flex justify-center play-all-button font-bold' > <img src={play} alt= {play} className='mr-4'/>  play all</p>
          </div>
          </div>
         

          <h3 className='text-2xl font-bold text-white mt-6'> 1.3 UI/UX Design Live Sessions (Intermediate Class) </h3>
          <p className='text-white font-bold sm:text-lg mt-6'>Stutern</p>

          <div className='flex gap-3 mt-4'>
            <p className='text-white sm:text-base font-thin'>27 Videos 607 Views</p>
            <p className='text-white sm:text-base font-thin'>Updated 5 Days Ago</p>
          </div>      


          {/* icons */}
          <div className='flex mt-5'>
            <div className='bg-grey3 rounded-full h-[50px] w-[50px] grid place-items-center mr-3 hover:cursor-pointer'> <img src={math} className='w-[30px]' alt={math}/> </div>

            <div className='bg-grey3 rounded-full h-[50px] w-[50px]  grid place-items-center mr-3 hover:cursor-pointer'> <img src={send} className='w-[30px]' alt={send}/> </div>

            <div className='bg-grey3 rounded-full h-[50px] w-[50px]  grid place-items-center mr-3 hover:cursor-pointer'> <img src={more} className='w-[30px]' alt={more}/> </div>
          </div>
          {/* icons */}

          {/* buttons */}
         <div className='flex gap-9 mt-9 mb-4'>
          <button className='flex bg-white w-[205px] h-[48px]  rounded-md text-base items-center justify-center capitalize font-bold'>  <img src={playBlack} alt={playBlack} className='w-[35px]'/> play all</button>
          <button className='flex bg-grey3 text-white  w-[205px] h-[48px] rounded-md text-base items-center justify-center capitalize font-bold'> <img src={shuffle} alt={shuffle} className='w-[35px]'/>shuffle</button>
         </div>
          {/* buttons */}

        </div>
         {/* videoframe */}



         {/* videoframelist */}
         <Link to={'/live-session-user-page'}>
        <div className='mt-10 xl:mt-0'>
        <ul className='list-decimal'>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>1.</span> <img src={productDesignImage1} alt={productDesignImage1} className=''/> <div>
            <p className='md:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p> 

          </div>  </li>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>2.</span> <img src={productDesignImage2} alt={productDesignImage2}/><div>
          <p className='md:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p>

          </div> </li>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>3.</span> <img src={productDesignImage3} alt={productDesignImage3}/><div>
          <p className='md:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p>

          </div> </li>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>4.</span> <img src={productDesignImage4} alt={productDesignImage4}/><div> <p className='sm:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p>

          </div> </li>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>5.</span> <img src={productDesignImage5} alt={productDesignImage5}/><div>
          <p className='md:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p>

          </div> </li>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>6.</span> <img src={productDesignImage6} alt={productDesignImage6}/><div>
          <p className='md:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p>

          </div> </li>
          <li className='flex gap-6 hover:cursor-pointer'> <span className='grid place-items-center text-bold md:text-3xl'>7.</span> <img src={productDesignImage7} alt={productDesignImage7}/><div>
          <p className='md:text-xl font-bold'>Introduction to Product Design  17:01:23</p>
            <p className='text-grey4 font-medium sm:text-base'>Stutern . 4 views . 4 days ago</p>

          </div> </li>
        </ul>
        </div>
        </Link>
          {/* videoframelist */}
        </div>
    </div>
  </>
  )
}
