import { useState } from 'react';
import Logo from '../../../assets/logo.svg';
import ProfileImage from '../../../assets/profileImage.svg'
import { FaSearch , FaRegBell, FaCog} from "react-icons/fa";

const CoursePageNav = () => {
  const [open, setOpen] = useState(false);
  return (
        <nav className='flex justify-between h-[88px] items-center   '>
          <div className=''>
          <img src={Logo} alt={Logo}  className='lg:w-auto md:w-[150x] w-[120px]'/>
          <div  onClick={() => setOpen(!open)}className='text-violet-900 text-4xl cursor-pointer md:hidden absolute right-8 top-6 text-center'>
           <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>
          </div>
         <div className={`flex  lg:flex-row md:flex-col flex-col px-4 md:text-center text-black md:z-auto z-50 md:static absolute w-full left-0 md:w-auto lg:pt-0 md:pt-10 pt-10
        md:pb-0 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}> 
          <div className='relative lg:mb-0 md:mb-6 mb-6 '>
              <span className='text-lightgrey text-xl absolute top-3 left-2 '><FaSearch/></span><input type="text" placeholder='search'  className='border rounded-lg  border-lightgrey lg:w-[300px] md:w-[200px]  w-[150px] placeholder:pl-8 h-10'/>
           </div>
           <div className='flex lg:flex-row md:flex-col flex-col  lg:items-center  md:items-start items-start lg:ml-[32rem] md:ml-0 ml-0 ' >
            <div className='class relative '>
             <span className='text-lightgrey text-3xl lg:mt-0 md:mt-4 mt-4 cursor-pointer'>< FaRegBell/> </span>
            <div className='w-4 h-4 rounded-full border  text-center absolute bottom-4 left-5 bg-lightpurple'> <p className='text-xs text-purple'>0</p></div>
            </div>
            <span className='text-3xl text-black lg:ml-4 md:ml-0 ml-0 lg:mt-0 md:mt-4 mt-4 cursor-pointer'><FaCog/></span>
            <div className='flex items-center lg:ml-4 md:ml-0 ml-0 lg:mt-0 md:mt-4 mt-4'>
                <div className=''>
                    <img src={ProfileImage} alt={ProfileImage} />
                    <span className='w-2 h-2 rounded-full bg-lemongreen'></span>
                </div>
                <div className='flex flex-col lg:ml-2 md:ml-0 ml-0'>
                <header className='text-xs'>User Fullname</header>
                <p className='text-xs'>online</p>
                </div>
            </div>
           </div>
       </div>
        </nav>
  )
}

export default CoursePageNav;

