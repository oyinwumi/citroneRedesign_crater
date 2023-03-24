
import Logo from '../../../assets/logo.svg';
import ProfileImage from '../../../assets/profileImage.svg'
import { FaSearch , FaRegBell, FaCog} from "react-icons/fa";

const Course = () => {
  return (
    <div className='lg:px-32 md:px-10 '>
        <nav className='flex h-[88px] items-center  border '>
          <div >
          <img src={Logo} alt={Logo}  className='lg:w-auto md:w-[80px] w-[50px]'/>
          </div>
       <div className='flex justify-between'>
       <div className='relative'>
              <span className='text-lightgrey text-xl absolute top-3 left-2 '><FaSearch/></span><input type="text" placeholder='search'  className='border rounded-lg  border-lightgrey lg:w-[300px] md:w-[200px]  w-[150px] placeholder:pl-8 h-10'/>
           </div>
           <div className='flex items-center'>
            <div className='class relative'>
             <span className='text-lightgrey text-2xl'>< FaRegBell/> </span>
            <div className='w-4 h-4 rounded-full border  text-center absolute bottom-4 left-5 bg-lightpurple'> <p className='text-xs text-purple'>0</p></div>
            </div>
            <span className='text-2xl text-black ml-4'><FaCog/></span>
            <div className='flex items-center ml-4'>
                <div className=''>
                    <img src={ProfileImage} alt={ProfileImage} />
                    <span className='w-2 h-2 rounded-full bg-lemongreen'></span>
                </div>
                <div className='flex flex-col ml-2 '>
                <header className='text-xs'>User Fullname</header>
                <p className='text-xs'>online</p>
                </div>
            </div>
           </div>
       </div>
        </nav>
    </div>
  )
}

export default Course

