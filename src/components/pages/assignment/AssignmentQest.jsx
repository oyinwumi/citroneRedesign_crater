import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import CoursePageNav from '../coursePage/CoursePageNav';
import Sidebar from '../coursePage/Sidebar';
import LinkIcon from '../../../assets/linkicon.svg';
import TextIcon from '../../../assets/texticon.svg';
import MicIcon from '../../../assets/microphone-2.svg';
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from "../../../apps/modal/modalSlice";
import AssignmentModal from "./AssignmentModal";

const AssignmentQest = () => {
    const { isOpen} = useSelector((store)=> store.modal);
    const dispatch = useDispatch() ;
  return (
    <div className=" lg:p-8 w-full h-full relative">
        { isOpen && <AssignmentModal/>}
          <CoursePageNav/>
       <div className='flex p-3 '>
       <Sidebar/>
      
        <div className="w-full px-6 ">
        <div className='my-6'>
                <p className=' flex items-center text-center '>courses <Link to='/moduleone' className='mx-2 text-sm '>< FaChevronRight/></Link>Module 1  <span className='mx-2 text-sm'>< FaChevronRight/></span>Assignment 1</p>
            </div>
        <h5 className='text-[24px] mb-4 '>Module 1 Assignment 1</h5>
        <div  className=''>
            <header className='font-bold mb-3 lg:text-[24px] md:text-xl text-lg'>Question</header>
            <p className="lg:text-xl ">Replicate the design from the first assignment and try a different colour.</p>
        </div>
        <div>
            <div className="flex justify-between mt-10 mb-4">
                <p>Answer</p>
                <Link to='*'>Find Resources</Link>
            </div>
            <div className="w-full">
                <textarea name="" id="" cols="30" rows="10" placeholder="Comment" className="border rounded border-lightergrey  w-full p-4 outline-none texx-lg capitalize" type="text" required></textarea>
            </div>
        </div>
        <div className="flex justify-between mb-4 border rounded-b border-lightergrey p-4"  >
            <div className="flex">
             <img src={TextIcon} alt={TextIcon}  className="mr-2 w-6 h-76"/>
             <img src={LinkIcon} alt={LinkIcon} className="mr-2 w-6 h-6"/>
             <img src={MicIcon} alt={MicIcon}  className="mr-2 w-6 h-6"/>
            </div>
            <div>
            <button onClick={() => dispatch(openModal())}
            className='bg-purple text-white text-center rounded-lg p-2 w-20 '>Submit</button>
            </div>
          
        </div>
        <div className="">
            <input type="checkbox" className="accent-purple"/> <span>Receive an email when submissions are graded.</span>
        </div>
    </div>
    </div>
    </div>
  )
}

export default AssignmentQest