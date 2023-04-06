// import React from 'react'
// import { Link } from 'react-router-dom';
// import { useState } from "react";
// import Dashboard from '../../../assets/dashboard.svg'
// import Chat from '../../../assets/chat.svg'
// import Award from '../../../assets/award.svg'
// import Support from '../../../assets/24-support.svg'
// import Video from '../../../assets/video-square.svg'
// import Book from '../../../assets/book.svg'
// import Note from '../../../assets/note.svg'
// import Logout from '../../../assets/logout.svg'

// const Sidebar = () => {
//     const [open, setOpen] = useState(false);
//   return (
//     <div className="lg:mt-6 lg:border-r-2 md:border-r-none border-r-none border-lightgrey h-full  lg:block md:hidden hidden">
//      <div className="bg-white ">
//      <div  onClick={() => setOpen(!open)}className='text-black text-4xl ml-2'>
//            <ion-icon name={open ? "close" : "menu"} ></ion-icon>
//         </div>
//      <div className={`px-4 md:text-center text-black  lg:z-auto md:z-auto z-50 md:static absolute w-full left-0 md:w-auto lg:pt-0 md:pt-10 pt-10
//         md:pb-0 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-560px]'} `}>
//      <Link to='/dashboard' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
//        <img src={Dashboard} alt={Dashboard} />
//        <p className="ml-4">Dashbord</p>
//      </Link>
//      <Link to='/course' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
//        <img src={Book} alt={Book} />
//        <p className="ml-4 lg:display-block md:display-hidden display-hidden">Course</p>
//      </Link>
//      <Link to='/assignment' className="flex hover:bg-pink  p-4  hover:border-r-4 items-center">
//        <img src={Note} alt={Note} />
//        <p className="ml-4">Assignment</p> className={`px-4 md:text-center text-black 
//      </Link>
//      <Link to='/chatroom' className="flex hover:bg-pink  p-4 hover:border-r-4 border-purple items-center">
//        <img src={Chat} alt={Chat} />
//        <p className="ml-4">Chat Room</p>
//      </Link>
//      <Link to='/scoreboard' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
//        <img src={Award} alt={Award} />
//        <p className="ml-4">Scoreboard</p>
//      </Link>
//      <Link to='/sessions' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
//        <img src={Video} alt={Video} />
//        <p className="ml-4">Sessions</p>
//      </Link>
//      <Link to='/helpdesk' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
//        <img src={Support} alt={Support} />
//        <p className="ml-4">H className={`px-4 md:text-center text-black elp Desk</p>
//      </Link>
//      <Link to='/logout' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center mt-12">
//        <img src={Logout} alt={Logout} />
//        <p className="ml-4">Logout</p>
//      </Link>
//      </div>FaBasketballBall

//      </div>
//     </div>
//   )
// }

// export default Sidebar

import React , { useState}from 'react'
import { Link } from 'react-router-dom';
import Dashboard from '../../../assets/dashboard.svg';
import Chat from '../../../assets/chat.svg';
import Award from '../../../assets/award.svg';
import Support from '../../../assets/24-support.svg';
import Video from '../../../assets/video-square.svg';
import Book from '../../../assets/book.svg';
import Note from '../../../assets/note.svg';
import Logout from '../../../assets/logout.svg';
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
 const [open , setOpen] = useState(true);
 const toggle = () =>{
  setOpen(!open)
 }
    const menu =[
      {
        path: '/dashbord',
        name: 'Dashbord',
        icon: <img src={Dashboard} alt={Dashboard} />
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
      // {
      //   path: '/logout',
      //   name: 'Logout',
      //   icon: <img src={Logout} alt={Logout} />
      // },
    ]

  return (
    <div className={`lg:mt-10 lg:border-r-2 md:border-r-none border-r-none border-lightgrey h-full  lg:block md:hidden hidden transition-all ${ open ? 'lg:w-1/6' : 'lg:w-20'}`}>
      <div className="bg-white ">
          <div className={`text-black text-3xl ml-2`}>
            <FaBars  onClick={toggle}/>
          </div>
          {
            menu.map((item , index)=>{
               return <NavLink to={item.path} key={index} activeclassName='active' className="px-4 md:text-center text-black ">
                    <div className="flex hover:bg-pink  p-3 hover:border-r-4  text-xl items-center"> 
                    <div className='mr-4 ' >{item.icon}</div>
                      <div className={` ${open ? 'display:block ': 'hidden '}`}>{item.name}</div>
                    </div>
                  
               </NavLink>
            })
          }
            <Link to='/logout' className="flex text-xl hover:bg-pink  p-4 hover:border-r-4 items-center mt-12">
                    <img src={Logout} alt={Logout} />
                    <p className={`ml-3 ${open ? 'display:block ': 'hidden '}`}>Logout</p>
                    </Link>
      </div>
    </div>
  )
}

export default Sidebar