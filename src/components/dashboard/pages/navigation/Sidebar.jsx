
import React , { useState}from 'react'
// import { Link } from 'react-router-dom';
// import Dashboard from '../../../../assets/dashboard.svg';
import Chat from '../../../../assets/chat.svg';
import Award from '../../../../assets/award.svg';
import Support from '../../../../assets/24-support.svg';
import Video from '../../../../assets/video-square.svg';
import Book from '../../../../assets/book.svg';
import Note from '../../../../assets/note.svg';
import Logout from '../../../../assets/logout.svg';
import DashboardIcon from '../../../../assets/dashboard.svg'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import {  useDispatch } from 'react-redux';
import { openModal } from '../../../../apps/modal/modalSlice';
// import LogoutModal from '../../../pages/ logoutPage/LogoutModal';



const Sidebar = () => {
  // const {isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch()
 const [open , setOpen] = useState(true);
 const toggle = () =>{
  setOpen(!open)
 }
    const menu =[
      {
        path: '/dashboard',
        name: 'Dashboard',
        icon: <img src={DashboardIcon} alt={DashboardIcon} />
      },
      {
        path: '/course',
        name: 'Course',
        icon: <img src={Book} alt={Book} />
      },
      {
        path: '/assignment',
        name: 'Assignment',
        icon: <img src={Note} alt={Note} className='w-[24px]' />
      },
      {
        path: '/chat',
        name: 'Chat',
        icon: <img src={Chat} alt={Chat} />
      },
      {
        path: '/scoreboard',
        name: 'Scoreboard',
        icon: <img src={Award} alt={Award} />
      },
      {
        path: '/sessions',
        name: 'Sessions',
        icon: <img src={Video} alt={Video} />
      },
      {
        path: '/helpdesk',
        name: 'Help Desk',
        icon: <img src={Support} alt={Support} />
      },
 
    ]

  return (
    <>
  
    <div className={`lg:mt-10 lg:border-r pl-3 md:border-r-none border-r-none border-pink h-full p lg:block md:hidden hidden transition-all ${ open ? 'lg:w-[300px]' : 'lg:w-20'}`}>
      
      <div className="bg-white ">
          <div className={`text-black text-3xl ml-2`}>
            <FaBars  onClick={toggle}/>
          </div>
          {
            menu.map((item , index)=>{
               return <NavLink to={item.path} key={index} className="px-4 md:text-center text-black ">
                    <div className="flex hover:bg-pink  p-3 hover:border-r-4  text-xl items-center"> 
                    <div className='mr-4 ' >{item.icon}</div>
                      <div className={` ${open ? 'display:block ': 'hidden '}`}>{item.name}</div>
                    </div>
                  
               </NavLink>
            })
          }
            <div  onClick={() => dispatch(openModal())} className="flex text-xl hover:bg-pink  p-4 hover:border-r-4 items-center mt-12 cursor-pointer ">
                    <img src={Logout} alt={Logout} />
                    <p className={`ml-3 ${open ? 'display:block ': 'hidden '}`}>Logout</p>
                    </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar;