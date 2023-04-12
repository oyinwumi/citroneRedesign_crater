import { useState } from 'react';
import Logo from '../../../../assets/logo.svg';
import ProfileImage from '../../../../assets/profileImage.svg'
import { FaSearch , FaRegBell, FaRegSun} from "react-icons/fa";
import { Link } from 'react-router-dom';
import Dashboard from '../../../../assets/dashboard.svg';
import Chat from '../../../../assets/chat.svg';
import Award from '../../../../assets/award.svg';
import Support from '../../../../assets/24-support.svg';
import Video from '../../../../assets/video-square.svg';
import Book from '../../../../assets/book.svg';
import Note from '../../../../assets/note.svg';
import Logout from '../../../../assets/logout.svg';

const CoursePageNav = () => {
  const [open, setOpen] = useState(false);
  return (
        <nav className='flex justify-between h-[88px] items-center  px-6 py-4 '>
          <div className=''>
         <Link to='/'><img src={Logo} alt={Logo}  className='lg:w-auto md:w-[150x] w-[120px]'/></Link>
          </div>
          <div className='relative lg:mb-0 md:mb-6 mb-6 lg:block md:hidden hidden'>
              <span className='text-lightgrey text-xl absolute top-3 left-2 '><FaSearch/></span><input type="text" placeholder='search'  className='border rounded-lg  border-lightgrey lg:w-[300px] md:w-[200px]  w-[150px] placeholder:lg:pl-8  h-10'/>
           </div>
         <div className=''>
           <div className='flex flex-row items-center justify-center text-center' >
            <div className=' relative '>
             <Link to='/notification' className='text-lightgrey text-3xl lg:mt-0 md:mt-4 mt-4 cursor-pointer'>< FaRegBell/> </Link>
            <div className='w-4 h-4 rounded-full border  text-center absolute bottom-4 left-5 bg-lightpurple'> <p className='text-xs text-purple'>0</p></div>
            </div>
            <Link to='/settings' className='lg:text-3xl md:text-3xl text-[25px] text-dark lg:ml-4 md:ml-3 ml-3  cursor-pointer items-center text-center'><FaRegSun/></Link>
            <Link to='/profile' className='flex items-center lg:ml-4 md:ml-0 ml-0 lg:mt-0 md:mt-4 mt-4'>
                <div className='items-center lg:mb-0 md:mb-4 mb-4 relative'>
                    <img src={ProfileImage} alt={ProfileImage}  className=" lg:ml-0 md:ml-3 ml-3  "/>
                    <span className='w-2 h-2 rounded-full bg-teagreen absolute top-8 right-0' ></span>
                </div>
                <div className='lg:flex md:hidden hidden  lg:flex-col lg:ml-2 md:ml-0 ml-0 items-start'>
                <header className='text-xs '>User Fullname</header>
                <p className='text-xs '>online</p>
                </div>
            </Link>
           </div>
       </div>
       <div  onClick={() => setOpen(!open)}className='text-black text-4xl ml-2 lg:hidden'>
           <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>
        <div className={` lg:hidden px-4 md:text-center text-black  lg:z-auto md:z-50 z-50 md:absolute absolute  w-full left-0 md:w-full lg:pt-0 md:pt-10 pt-10
        md:pb-0 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-560px]'} `}>
     <Link to='/dashboard' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Dashboard} alt={Dashboard} />
       <p className="ml-4">Dashbord</p>
     </Link>
     <Link to='/course' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Book} alt={Book} />
       <p className="ml-4 lg:display-block md:display-hidden display-hidden">Course</p>
     </Link>
     <Link to='/assignment' className="flex hover:bg-pink  p-4  hover:border-r-4 items-center">
       <img src={Note} alt={Note} />
       <p className="ml-4">Assignment</p>
     </Link>
     <Link to='/chatroom' className="flex hover:bg-pink  p-4 hover:border-r-4 border-purple items-center">
       <img src={Chat} alt={Chat} />
       <p className="ml-4">Chat Room</p>
     </Link>
     <Link to='/scoreboard' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Award} alt={Award} />
       <p className="ml-4">Scoreboard</p>
     </Link>
     <Link to='/sessions' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Video} alt={Video} />
       <p className="ml-4">Sessions</p>
     </Link>
     <Link to='/helpdesk' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Support} alt={Support} />
       <p className="ml-4">Help Desk</p>
     </Link>
     <Link to='/logout' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center mt-12">
       <img src={Logout} alt={Logout} />
       <p className="ml-4">Logout</p>
     </Link>
     </div>
        </nav>
  )
}

export default CoursePageNav;

