import React from 'react';
import Logo from '../../../assests/logo.svg';
import PrettyLady from '../../../assests/prettylady.png';
import Ellipse from '../../../assests/ellipse.svg';
import Jet from '../../../assests/jet.svg';
import MockupOne from '../../../assests/mockup1.png';
import Mockuptwo from '../../../assests/mockup2.png';
import Mockupthree from '../../../assests/mockup3.png';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt ,FaEnvelope, FaPhoneAlt,FaFacebookF,FaInstagram,FaRegCaretSquareRight,FaDove , FaLinkedinIn} from "react-icons/fa";

const LandingPage = () => {
  return (
    <section  className='overflow-x-hidden'>
        <nav className='bg-white flex justify-between h-[88px] border border-white items-center md:px-30 px-14'>
            <div>
                <img src={Logo} alt={Logo} className='md:w-auto w-[100px]'/>
            </div>
            <div className=''>
                <button className='border border-x-purple text-center md:py-3 py-2 md:px-4 px-0 md:w-[102px] w-12 text-purple md:text-sm text-xs rounded-lg bg-white hover:bg-purple hover:text-white'>LOGIN</button>
                <button className='border border-x-purple text-center md:py-3 py-2 md:px-4 px-0 md:w-[102px] w-14 text-white md:text-sm text-xs rounded-lg bg-purple ml-3  hover:bg-purple hover:opacity-50'>SIGNUP</button>
            </div>
        </nav>
        <div className='flex md:flex-row flex-col md:items-center md:leading-[64px] bg-light md:px-30 px-14 pt-20 '>
          <div className='w-1/2'>
             <h1 className='text-black md:text-[64px] text-[40px] font-bold md:w-[600px] w-full md:mt-10 mt-0'>Deliver a <span className='text-purple'>Community-First</span> Learning Experience</h1>
             <p className='text-black text-lg lg::w-[600px] md:w-full w-full mt-8'>Citrone makes it easy for educators to create learning experiences that positively engage students.</p>
             <div className='my-10 md:flex-none flex '> 
                <button className='border border-x-purple text-center py-3  px-4 w-[184px] text-white md:text-sm text-xs rounded-lg bg-purple  hover:bg-purple hover:opacity-50'>Get Started for Free</button>
                <button className='border border-x-purple text-center py-3  px-4 w-[184px]  ml-3 text-purple md:text-sm text-xs rounded-lg bg-white hover:bg-purple hover:text-white'>Learn more</button>
             </div>
          </div>
          <div className='relative  md:ml-20 ml-14 md:w-1/2 w-full md:mt-0 mt-14'>
            <img src={PrettyLady} alt={PrettyLady} className='h-auto md:w-12/12 w-full '/>
            <img src={Jet} alt={Jet}  className='absolute top-0 md:left-1 left-10'/>
            <img src={Ellipse} alt={Ellipse} className='absolute bottom-2 right-40' />
          </div>
        </div>
        <section className='my-14 md:px-30 px-14'>
            <h2 className='text-center items-center text-purple tmd:text-2xl text-xl mb-4 '>WHAT WE OFFER</h2>
            <div className='flex md:flex-row flex-col '>
               <div className='border border-lightgrey rounded md:text-justify px-6 py-10 text-black md:mr-4 mr-0 md:w-1/3 w-full  md:h-60 h-64  items-center mb-6 '>
                 <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
                 <p className='text-lg font-bold mb-3'>Create a course</p>
                 <p className='font-normal text-base'>Create and manage courses seamlessly.</p>
               </div>
               <div className='border border-lightgrey rounded md:text-justify px-6 py-10  text-black md:mr-4 mr-0 md:w-1/3 w-full  
               md:h-60 h-64 items-center mb-6' >
                 <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
                 <p className='text-lg font-bold mb-3'>Engagements</p>
                 <p className='font-normal text-base'>Seamless engagement between tutors and students.</p>
               </div>
               <div className='border border-lightgrey rounded md:text-justify px-6 py-10 text-black md:mr-4 mr-0 md:w-1/3 w-full  md:h-60 h-64  items-center'>
                 <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
                 <p className='text-lg font-bold mb-3'>Feedback</p>
                 <p className='font-normal text-base'>Give feedback as quickly as possible.</p>
               </div>
            </div>
        </section>
        <section className='flex  md:flex-row flex-col py-14 md:px-30 px-14 justify-between'>
            <img src={MockupOne} alt={MockupOne} className=' md:w-5/12 w-full h-auto'/>
           <div className='md:w-1/2 w-full md:mt-20 mt-12'>
           <h3 className='text-purple md:text-[40px] text-3xl font-extrabold mb-2'>Community</h3>
            <p className='text-black font-semibold md:text-[32px] text-2xl mb-2 '>Nurture a community-first learning experience.</p>
            <p className='md:text-xl '>Students who feel connected to their learning community are more likely to persist. We foster meaningful connection by ensuring students are never more than 1 click away from their peers and educators.</p>
           </div>
        </section>
        <section className='flex md:flex-row flex-col pb-14 md:px-30 px-14  justify-between'>
        <div className='md:w-1/2  w-full md:mt-20 mt-12'>
           <h3 className='text-purple md:text-[40px] text-3xl font-extrabold mb-2'>Effective Learning</h3>
            <p className='text-black font-semibold tmd:text-[32px] text-2xl mb-2 '>Engaging and effective training.</p>
            <p className='md:text-xl'>Engage learners with video interactions, note-taking, slides, e-books, self-assessment, certificates, and much more.</p>
           </div>
           <img src={Mockuptwo} alt={MockupOne} className=' md:w-5/12  w-full md:mt-0 mt-14 h-auto'/>
        </section>
        <section className='mt-32  mb-20 relative'>
           <div className='flex px-32'>
            <img src={Mockupthree} alt={Mockupthree} className='md:w-5/12 w-full h-auto' />
            <p className='text-purple text-[40px] ml-20 mt-20'>Reporting</p>
           </div>
           <div className='bg-light  absolute  md:bottom-0 -bottom-1 w-full md:h-80 h-40 '>
            <h3 className='text-center text-black md:text-[40px] text-xl md:pt-12 pt-6 mb-4 leading-10'>Want to start learning <br /> easily today?</h3>
             <button className=' mb-16 md:ml-[45%] ml-[30%] md:mt-6 mt-0 border border-x-purple text-center py-3 px-4 w-[184px] text-white text-sm rounded-lg bg-purple  hover:bg-purple hover:opacity-50'>Get Started for Free</button> 
           </div> 
        </section>
        <footer className='bg-white md:px-30 px-14 pb-10 flex  md:flex-row flex-col justify-between'>
             <div className='flex md:flex-row flex-col md:w-3/5 w-full md:order-1 order-2'>
                <div className=' text-justify text-black md:w-1/4 w-full md:mr-4 mr-0'>
                    <h5 className='text-sm font-bold '>COMPANY</h5>
                    <div className='text-black text-xs flex flex-col'>
                        <Link to="#" className='py-2'>About</Link>
                        <Link to="#" className='pb-2'>Contact Us</Link>
                        <Link to="#"  className='pb-2'>Partners</Link>
                    </div>
                </div>
                <div className='text-justify text-black md:w-1/4 w-full md:mr-4 mr-0'>
                    <h5 className='text-sm font-bold pb-3'>DISCOVER</h5>
                    <div className='text-black text-xs flex flex-col'>
                        <Link to="#" className='pb-2'>Events</Link>
                        <Link to="#" className='pb-2'>Community</Link>
                        <Link to="#"  className='pb-2'>Courses</Link>
                    </div>
                </div>
                <div className=' text-justify text-black md:w-1/4 w-full md:mr-4 mr-0'>
                    <h5 className='text-sm font-bold pb-3'>SUPPORT</h5>
                    <div className='text-black text-xs flex flex-col'>
                        <Link to="#" className='pb-2'>Faqs</Link>
                        <Link to="#" className='pb-2'>Help Center</Link>
                    </div>
                </div>
                <div className='text-justify text-black md:w-2/5 w-full md:mr-4 mr-0'>
                    <h5 className='text-sm font-bold pb-3 '>CONTACT US</h5>
                    <div className='text-black text-xs flex flex-col'>
                     <div className='flex '>
                     <span className='mr-2 '><FaEnvelope/></span>  <Link to="#" className='pb-2'>citrone@gmail.com</Link>
                     </div>
                      <div className='flex'>
                      <span className='mr-2'><FaPhoneAlt/></span>  <Link to="#" className='pb-2'>citrone@gmail.com</Link>
                      </div>
                     <div className='flex'>
                     <span className='mr-2'><FaMapMarkerAlt/></span>  <Link to="#"  className='pb-2'>Lagos, Nigeria</Link>
                     </div>
                    </div>
                </div>
             </div>
             <div className='md:w-1/4 w-full md:order-2 order-1 md:mb-0 mb-8'>
             <img src={Logo} alt={Logo} />
             <p className='text-sm text-black mt-4'>We build educational hub where young adults with special needs can have access to information and education about the Blockchain Ecosystem.</p>
             <div className='flex flex-row mt-8' >
             <span  className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'><FaInstagram/></span>
             <span  className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'> <FaRegCaretSquareRight/></span>
              <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'> <FaFacebookF /></span>
               <span  className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'><FaDove/></span>
               <span  className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'><FaLinkedinIn/></span>
             </div>
             </div>
           </footer>
           <div className='text-black md:text-sm text-xs text-center h-10 border-t  border-lightgrey'>
           <p className='py-4'>© All rights reserved.  Powered by Citrone</p>
           </div>
    </section>
  )
}
 
export default LandingPage;