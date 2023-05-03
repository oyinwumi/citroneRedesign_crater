import {  FaCheck} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { closeModal, closeModalTwo } from '../../../../apps/modal/modalSlice';


const AssignmentModalTwo = () => {
  const dispatch = useDispatch()
  const close = () =>{
   dispatch(closeModal());
   dispatch(closeModalTwo())
  }

  return (
    <aside  className='w-full items-center text-center h-full bg-gray fixed z-10 '>
  <div className='bg-white  border border-white rounded-lg  lg:w-[432px] md:w-[40%] w-[75%] p-4 items-center mx-auto lg:mt-[13%] md:mt-[20%] mt-[25%] z-50  '>
      <span className=''><FaCheck  className='bg-white w-5 h-5 border text-green border-green rounded-full p-1 text-center mx-auto my-4'/></span>
  <h2 className='text-[24px] mb-4 ' >Success!</h2>
  <p className='mb-4 '>Your assignment has been submitted</p>
  <div className='flex flex-col items-center'>
     <Link  to='/grade'onClick={close} > <button className=' text-center bg-purple text-white border rounded mb-4 p-2 w-24 hover:opacity-50'>View Grade</button></Link>
     <Link to="/editassignment" onClick={close}> <button className=' text-center bg-white text-purple border rounded mb-4 p-2 w-24 hover:opacity-50'>Edit</button></Link>
  </div>
</div>
</aside>
  )
}

export default AssignmentModalTwo