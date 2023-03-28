import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import Dashboard from '../../../assets/dashboard.svg'
import Chat from '../../../assets/chat.svg'
import Award from '../../../assets/award.svg'
import Support from '../../../assets/24-support.svg'
import Video from '../../../assets/video-square.svg'
import Book from '../../../assets/book.svg'
import Note from '../../../assets/note.svg'
import Logout from '../../../assets/logout.svg'

const Sidebar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="lg:mt-6">
     <div className="bg-white ">
     <div  onClick={() => setOpen(!open)}className='text-black text-4xl cursor-pointer items-center p-4'>
        <ion-icon name={open ? "close" : "menu"} ></ion-icon>
     </div>
     <div className={`px-4 md:text-center text-black md:z-auto z-50 md:static absolute w-full left-0 md:w-auto lg:pt-0 md:pt-10 pt-10
        md:pb-0 pb-12 md:pl-0 pl-9  md:opacity-100 md:bg-white bg-white   transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
     <Link to='/dashboard' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Dashboard} alt={Dashboard} />
       <p className="ml-4">Dashbord</p>
     </Link>
     <Link to='/course' className="flex hover:bg-pink  p-4 hover:border-r-4 items-center">
       <img src={Book} alt={Book} />
       <p className="ml-4">Course</p>
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
     </div>
    </div>
  )
}

export default Sidebar