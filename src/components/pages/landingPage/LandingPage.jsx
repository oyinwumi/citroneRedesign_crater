import React from 'react';
import Logo from '../../../assets/logo.svg';
import PrettyLady from '../../../assets/prettylady.png';
import Ellipse from '../../../assets/ellipse.svg';
import Jet from '../../../assets/jet.svg';
import MockupOne from '../../../assets/mockup1.png';
import Mockuptwo from '../../../assets/mockup2.png';
import Mockupthree from '../../../assets/mockup3.png';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaRegCaretSquareRight,
  FaDove,
  FaLinkedinIn,
} from 'react-icons/fa';

const LandingPage = () => {
  return (
    <section className=''>
      <nav className='bg-white flex justify-between h-[88px] border border-white items-center px-32'>
        <div>
          <img src={Logo} alt={Logo} />
        </div>
        <div>
        <Link to='/login'><button className='border border-x-purple text-center py-3 px-4 w-[102px] text-purple text-sm rounded-lg bg-white hover:bg-purple hover:text-white'>
            LOGIN
          </button></Link>
           <Link to='/signup'><button className='border border-x-purple text-center py-3 px-4 w-[102px] text-white text-sm rounded-lg bg-purple ml-3  hover:bg-purple hover:opacity-50'>
            SIGNUP
          </button></Link>
        </div>
      </nav>
      <div className='flex justify-between items-center leading-[64px] bg-light  px-32 pt-20 '>
        <div className=''>
          <h1 className='text-black text-6xl font-bold w-[600px] mt-10'>
            Deliver a <span className='text-purple'>Community-First</span>{' '}
            Learning Experience
          </h1>
          <p className='text-black text-lg w-[650px] mt-8'>
            Citrone makes it easy for educators to create learning experiences
            that positively engage students.
          </p>
          <div className='mt-20'>
            <button className='border border-x-purple text-center py-3 px-4 w-[184px] text-white text-sm rounded-lg bg-purple  hover:bg-purple hover:opacity-50'>
              Get Started for Free
            </button>
            <button className='border border-x-purple text-center py-3 px-4 w-[184px] ml-3 text-purple text-sm rounded-lg bg-white hover:bg-purple hover:text-white'>
              Learn more
            </button>
          </div>
        </div>
        <div className='relative mr-32'>
          <img src={PrettyLady} alt={PrettyLady} className='h-auto' />
          <img src={Jet} alt={Jet} className='absolute top-0 left-20' />
          <img
            src={Ellipse}
            alt={Ellipse}
            className='absolute bottom-2 left-[-32px]'
          />
        </div>
      </div>
      <section className='my-14 px-32'>
        <h2 className='text-center items-center text-purple text-2xl mb-4'>
          WHAT WE OFFER
        </h2>
        <div className='flex'>
          <div className='border border-lightgrey rounded text-justify px-6 py-10 text-black mr-4 w-1/3 h-60'>
            <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
            <p className='text-lg font-bold mb-3'>Create a course</p>
            <p className='font-normal text-base'>
              Create and manage courses seamlessly.
            </p>
          </div>
          <div className='border border-lightgrey rounded text-justify px-6 py-10 text-black mr-4 w-1/3  h-60'>
            <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
            <p className='text-lg font-bold mb-3'>Engagements</p>
            <p className='font-normal text-base'>
              Seamless engagement between tutors and students.
            </p>
          </div>
          <div className='border border-lightgrey rounded text-justify px-6 py-10 text-black w-1/3 h-60 items-center'>
            <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
            <p className='text-lg font-bold mb-3'>Feedback</p>
            <p className='font-normal text-base'>
              Give feedback as quickly as possible.
            </p>
          </div>
        </div>
      </section>
      <section className='flex py-14 px-32 justify-between'>
        <img src={MockupOne} alt={MockupOne} className=' w-5/12 h-auto' />
        <div className='w-1/2 mt-20'>
          <h3 className='text-purple text-[40px] font-extrabold mb-2'>
            Community
          </h3>
          <p className='text-black font-semibold text-[32px] mb-2 '>
            Nurture a community-first learning experience.
          </p>
          <p className='text-xl'>
            Students who feel connected to their learning community are more
            likely to persist. We foster meaningful connection by ensuring
            students are never more than 1 click away from their peers and
            educators.
          </p>
        </div>
      </section>
      <section className='flex py-14 px-32 justify-between'>
        <div className='w-1/2 mt-20'>
          <h3 className='text-purple text-[40px] font-extrabold mb-2'>
            Effective Learning
          </h3>
          <p className='text-black font-semibold text-[32px] mb-2 '>
            Engaging and effective training.
          </p>
          <p className='text-xl'>
            Engage learners with video interactions, note-taking, slides,
            e-books, self-assessment, certificates, and much more.
          </p>
        </div>
        <img src={Mockuptwo} alt={MockupOne} className=' w-5/12 h-auto' />
      </section>
      <section className='mt-32  mb-20 relative'>
        <div className='flex px-32'>
          <img src={Mockupthree} alt={Mockupthree} className='w-5/12 h-auto' />
          <p className='text-purple text-[40px] ml-20 mt-20'>Reporting</p>
        </div>
        <div className='bg-light  absolute  bottom-0 w-full h-80 '>
          <h3 className='text-center text-black text-[40px] pt-12 mb-4'>
            Want to start learning <br /> easily today?
          </h3>
          <button className=' mb-16 ml-[45%] mt-6 border border-x-purple text-center py-3 px-4 w-[184px] text-white text-sm rounded-lg bg-purple  hover:bg-purple hover:opacity-50'>
            Get Started for Free
          </button>
        </div>
      </section>
      <footer className='bg-white px-32 pb-10 flex justify-between'>
        <div className='flex w-3/5'>
          <div className=' text-justify text-black w-1/4'>
            <h5 className='text-sm font-bold '>COMPANY</h5>
            <div className='text-black text-xs flex flex-col'>
              <Link to='#' className='py-2'>
                About
              </Link>
              <Link to='#' className='pb-2'>
                Contact Us
              </Link>
              <Link to='#' className='pb-2'>
                Partners
              </Link>
            </div>
          </div>
          <div className='text-justify text-black w-1/4'>
            <h5 className='text-sm font-bold pb-3'>DISCOVER</h5>
            <div className='text-black text-xs flex flex-col'>
              <Link to='#' className='pb-2'>
                Events
              </Link>
              <Link to='#' className='pb-2'>
                Community
              </Link>
              <Link to='#' className='pb-2'>
                Courses
              </Link>
            </div>
          </div>
          <div className=' text-justify text-black w-1/4'>
            <h5 className='text-sm font-bold pb-3'>SUPPORT</h5>
            <div className='text-black text-xs flex flex-col'>
              <Link to='#' className='pb-2'>
                Faqs
              </Link>
              <Link to='#' className='pb-2'>
                Help Center
              </Link>
            </div>
          </div>
          <div className='text-justify text-black w-2/5'>
            <h5 className='text-sm font-bold pb-3 '>CONTACT US</h5>
            <div className='text-black text-xs flex flex-col'>
              <div className='flex '>
                <span className='mr-2 '>
                  <FaEnvelope />
                </span>{' '}
                <Link to='#' className='pb-2'>
                  citrone@gmail.com
                </Link>
              </div>
              <div className='flex'>
                <span className='mr-2'>
                  <FaPhoneAlt />
                </span>{' '}
                <Link to='#' className='pb-2'>
                  citrone@gmail.com
                </Link>
              </div>
              <div className='flex'>
                <span className='mr-2'>
                  <FaMapMarkerAlt />
                </span>{' '}
                <Link to='#' className='pb-2'>
                  Lagos, Nigeria
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/4 '>
          <img src={Logo} alt={Logo} />
          <p className='text-sm text-black mt-4'>
            We build educational hub where young adults with special needs can
            have access to information and education about the Blockchain
            Ecosystem.
          </p>
          <div className='flex flex-row mt-8'>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              <FaInstagram />
            </span>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              {' '}
              <FaRegCaretSquareRight />
            </span>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              {' '}
              <FaFacebookF />
            </span>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              <FaDove />
            </span>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              <FaLinkedinIn />
            </span>
          </div>
        </div>
      </footer>
      <div className='text-black text-sm text-center h-10 border-t  border-lightgrey'>
        <p className='py-4'>© All rights reserved. Powered by Citrone</p>
      </div>
    </section>
  );
};

export default LandingPage;
