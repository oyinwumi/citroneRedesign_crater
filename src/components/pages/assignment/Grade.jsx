import { Link } from "react-router-dom";
import { FaChevronRight} from "react-icons/fa";
import DashboardHeader from '../../dashboard/pages/navigation/DashboardHeader';
import Sidebar from '../../dashboard/pages/navigation/Sidebar';
import Smile from '../../../assets/smile.svg';
import Send from '../../../assets/sendicon.svg';

const Grade = () => {
  return (
    <div className="w-full h-full relative">

      <DashboardHeader/>
   <div className='flex p-3'>
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
        <div className="flex  flex-col mt-10 mb-4 ">
            <p className="mb-4 font-bold lg:text-[24px] md:text-xl text-xl ">Your Score</p>
            <p className="lg:text-xl">90/100</p>
        </div>
        <div className="w-full mb-20" >
            <h5 className="font-bold lg:text-[24px] md:text-xl text-xl mb-4">Tutor Remark</h5>
            <textarea name="" placeholder="Comment" className="border rounded border-gray  w-full p-4 outline-none texx-lg capitalize " type="text" value='Weldone, Keep up the good work '></textarea>
        </div>
    </div>
    <div className="flex justify-between  border rounded-t-lg  border-gray "  >
        <div className="flex flex-col w-full ">
           <h5 className="m-2">Add Comment</h5>
           <textarea name="" rows='5' cols='8' className="border rounded-b-lg opacity-50  border-gray  w-full p-4 outline-none texx-lg capitalize" ></textarea>
        </div>
    </div>
   <div className="w-full border border-gray rounded p-2">
    <input type="text" placeholder="Send a message" className="w-full border border-gray rounded p-2 outline-none relative "/> 
    <div className="flex gap-3 items-center absolute bottom-7 right-14">
        <img src={Smile} alt={Smile} />
        <img src={Send} alt={Send} />
    </div>
   </div>
</div>
</div>

</div>
  )
}

export default Grade