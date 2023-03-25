import { useState } from 'react';
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
  FaInstagramSquare,
  FaYoutube,
  FaDove,
  FaLinkedinIn,
} from 'react-icons/fa';

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <section className='overflow-x-hidden'>
      <nav className='bg-white flex justify-between h-[88px] border border-white items-center lg:px-32 md:px-20 px-12'>
        <div className='flex md:flex-col'>
          <img src={Logo} alt={Logo} className='lg:w-auto md:w-32 w-32' />
          <div
            onClick={() => setOpen(!open)}
            className='text-violet-900 text-5xl cursor-pointer md:hidden absolute right-8 top-6 text-center'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>
        </div>
        <div
          className={`md:flex px-4 md:text-centertext-black md:z-auto z-50 md:static absolute w-full left-0 md:w-auto lg:pt-0 md:pt-10 pt-10
        md:pb-0 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${
          open ? 'top-20' : 'top-[-490px]'
        } `}>
          <Link to='/login'>
            <button className='border border-x-purple text-center py-3 px-4 w-[102px] text-purple text-sm rounded-lg bg-white hover:bg-purple hover:text-white '>
              LOGIN
            </button>
          </Link>
          <Link to='/signup'>
            <button className='border border-x-purple text-center py-3 px-4 w-[102px] text-white text-sm rounded-lg bg-purple ml-3  hover:bg-purple hover:opacity-50'>
              SIGNUP
            </button>
          </Link>
        </div>
      </nav>
      <div className='flex lg:flex-row md:flex-col flex-col justify-between items-center leading-[64px] bg-light  lg:px-32 md:px-20 px-10 pt-10 '>
        <div className=''>
          <h1 className='text-black lg:text-[64px] md:text-6xl text-5xl font-bold lg:w-full md:w-full w-full mt-10'>
            Deliver a <span className='text-purple'>Community-First </span>
            Learning Experience
          </h1>
          <p className='text-black lg:text-lg md:text-sm text-sm lg:w-[600px] md:w-full w-full mt-8'>
            Citrone makes it easy for educators to create learning experiences
            that positively engage students.
          </p>
          <div className='my-10 lg:text-sm md:text-xs text-xs '>
            <button className='border border-x-purple text-center lg:py-3 md:py-2 py-2  lg:px-4 md:px-2 px-2 lg:w-[184px] md:w-[150px] w-[130px] text-white rounded-lg bg-purple  hover:bg-purple hover:opacity-50 lg:text-sm md:text-xs text-xs'>
              Get Started for Free
            </button>
            <button className='border border-x-purple text-center lg:py-3 md:py-2 py-2  lg:px-4 md:px-2 px-2 lg:w-[184px] md:w-[150px] w-[130px] ml-3 text-purple rounded-lg bg-white hover:bg-purple hover:text-white lg:text-sm md:text-xs text-xs'>
              Learn more
            </button>
          </div>
        </div>
        <div className='relative lg:ml-40 md:ml-20px ml-10 lg:mt-0 md:mt-10 mt-10 lg-w1/2 md:w-full w-full'>
          <img src={PrettyLady} alt={PrettyLady} className='h-auto ' />
          <img
            src={Jet}
            alt={Jet}
            className='absolute top-0 left-20  lg:w-auto md:w-24 w-20'
          />
          <img
            src={Ellipse}
            alt={Ellipse}
            className='absolute bottom-2 left-[-32px] lg:w-auto md:w-24 w-20'
          />
        </div>
      </div>
      <section className='my-14 lg:px-32 md:px-20 px-12 '>
        <h2 className='text-center items-center text-purple lg:text-2xl md:text-xl text-xl mb-8'>
          WHAT WE OFFER
        </h2>
        <div className='flex lg:flex-row md:flex-col flex-col md:justify-center md:items-center'>
          <div className='border border-lightgrey rounded text-justify px-6 py-10 text-black lg:mr-4 md:mr-0 mr-0  lg:mb-0 md:mb-4 mb-4 lg:w-1/3 md:w-2/3 w-full h-60'>
            <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
            <p className='text-lg font-bold mb-3'>Create a course</p>
            <p className='font-normal text-base'>
              Create and manage courses seamlessly.
            </p>
          </div>
          <div className='border border-lightgrey rounded text-justify px-6 py-10 text-black lg:mr-4 md:mr-0 mr-0  lg:mb-0 md:mb-4 mb-4 lg:w-1/3 md:w-2/3 w-full   h-60'>
            <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
            <p className='text-lg font-bold mb-3'>Engagements</p>
            <p className='font-normal text-base'>
              Seamless engagement between tutors and students.
            </p>
          </div>
          <div className='border border-lightgrey rounded text-justify px-6 py-10 text-black lg:mr-4 md:mr-0 mr-0  lg:mb-0 md:mb-4 mb-4 lg:w-1/3 md:w-2/3 w-full h-60 items-center'>
            <h3 className='font-bold text-purple mb-3 text-5xl'>01</h3>
            <p className='text-lg font-bold mb-3'>Feedback</p>
            <p className='font-normal text-base'>
              Give feedback as quickly as possible.
            </p>
          </div>
        </div>
      </section>
      <section className='flex lg:flex-row md:flex-col flex-col py-14 lg:px-32 md:px-20 px-12 justify-between'>
        <img
          src={MockupOne}
          alt={MockupOne}
          className=' lg:w-5/12 md:w-full w-full h-auto lg:order-1 md:order-2 order-2'
        />
        <div className=' lg:w-1/2 md:w-full w-full lg:order-2 md:order-1 order-1 lg:mt-20 md:mt-14 mt-10'>
          <h3 className='text-purple text-[40px] font-extrabold mb-2'>
            Community
          </h3>
          <p className='text-black font-semibold lg:text-[32px] md:text-3xl text-2xl mb-2 '>
            Nurture a community-first learning experience.
          </p>
          <p className='lg:text-xl md:text-sm text-sm lg:mb-0 md:mb-10 mb-10'>
            Students who feel connected to their learning community are more
            likely to persist. We foster meaningful connection by ensuring
            students are never more than 1 click away from their peers and
            educators.
          </p>
        </div>
      </section>
      <section className='flex lg:flex-row md:flex-col flex-col py-14 lg:px-32 md:px-20 px-10 justify-between'>
        <div className='wlg:w-1/2 md:w-full w-full mt-20'>
          <h3 className='text-purple text-[40px] font-extrabold mb-2'>
            Effective Learning
          </h3>
          <p className='text-black font-semibold lg:text-[32px] md:text-3xl text-2xl mb-2 '>
            Engaging and effective training.
          </p>
          <p className='lg:text-xl md:text-sm text-sm lg:mb-0 md:mb-10 mb-10 '>
            Engage learners with video interactions, note-taking, slides,
            e-books, self-assessment, certificates, and much more.
          </p>
        </div>
        <img
          src={Mockuptwo}
          alt={Mockuptwo}
          className=' lg:w-5/12 md:w-full w-full h-auto'
        />
      </section>
      <section className='mt-32  mb-20 relative'>
        <div className='flex lg:flex-row md:flex-col flex-col justify-between lg:px-32 md:px-20 px-10 mb-20'>
          <img
            src={Mockupthree}
            alt={Mockupthree}
            className='lg:w-5/12 md:w-full w-full h-auto lg:order-1 md:order-2 order-2'
          />
          <div className=' lg:w-1/2 md:w-full w-full lg:order-2 md:order-1 order-1 mt-20'>
            <h3 className='text-purple text-[40px] font-extrabold mb-2'>
              Reporting
            </h3>
            <p className='text-black font-semibold lg:text-[32px] md:text-3xl text-2xl mb-2 '>
              Nurture a community-first learning experience.
            </p>
            <p className='lg:text-xl md:text-sm text-sm lg:mb-0 md:mb-10 mb-10'>
              Students who feel connected to their learning community are more
              likely to persist. We foster meaningful connection by ensuring
              students are never more than 1 click away from their peers and
              educators.
            </p>
          </div>
        </div>
      </section>
      <div className='bg-light  h-80  w-full'>
        <h3 className='text-center text-black lg:text-[40px] md:text-3xl text-2xl pt-12 mb-4'>
          Want to start learning <br /> easily today?
        </h3>
        <button className=' mb-16 lg:ml-[45%] md:ml[40%] ml-[35%] mt-6 border border-x-purple text-center py-3 px-4 w-[184px] text-white text-sm rounded-lg bg-purple  hover:bg-purple hover:opacity-50'>
          Get Started for Free
        </button>
      </div>
      <footer className='bg-white lg:px-32 md:px-20 px-12 pb-10  mt-20 flex lg:flex-row md:flex-col flex-col justify-between'>
        <div className='flex lg:flex-row md:flex-col flex-col lg:w-3/5 md:w-full w-full lg:order-1 md:order-2 order-1'>
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
        <div className='lg:w-1/4 md:w-full w-full '>
          <img src={Logo} alt={Logo} />
          <p className='text-sm text-black mt-4'>
            We build educational hub where young adults with special needs can
            have access to information and education about the Blockchain
            Ecosystem.
          </p>
          <div className='flex flex-row mt-8 lg:mb-0 md:mb-6 mb-6'>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              <FaInstagramSquare />
            </span>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
              <FaYoutube className='text-lg' />
            </span>
            <span className='p-1 ml-2 w-7 h-7 border text-center border-black rounded-full'>
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
        <p className='py-4 lg:text-sm md:text-xs text-xs'>
          © All rights reserved. Powered by Citrone
        </p>
      </div>
    </section>
  );
};

export default LandingPage;
