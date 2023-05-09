import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import LinkIcon from '../../../../assets/linkicon.svg';
import TextIcon from '../../../../assets/texticon.svg';
import MicIcon from '../../../../assets/microphone-2.svg';
import {  useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../../../apps/courseSlice';
import { openModal } from '../../../../apps/modal/modalSlice';


const AssignmentQest = () => {
  const {inputValue} =  useSelector((store)=> store.course)
  const dispatch = useDispatch();

  const updateAssignment = (e)=>{
    e.preventDefault();
    dispatch(setInputValue(e.target.value))
  }
  const submit = () =>{
    dispatch(openModal());
    dispatch(setInputValue(inputValue))
  }
  return (
    <div className='w-full h-full relative'>
      <div className='flex p-3 '>
        <div className='w-full px-6 '>
          <div className='my-6'>
            <p className=' flex items-center text-center '>
              courses{' '}
              <Link to='/moduleone' className='mx-2 text-sm '>
                <FaChevronRight />
              </Link>
              Module 1{' '}
              <span className='mx-2 text-sm'>
                <FaChevronRight />
              </span>
              Assignment 1
            </p>
          </div>
          <h5 className='text-[24px] mb-4 '>Module 1 Assignment 1</h5>
          <div className=''>
            <header className='font-bold mb-3 lg:text-[24px] md:text-xl text-lg'>
              Question
            </header>
            <p className='lg:text-xl '>
              Replicate the design from the first assignment and try a different
              colour.
            </p>
          </div>
          <div>
            <div className='flex justify-between mt-10 mb-4'>
              <p>Answer</p>
              <Link to='*'>Find Resources</Link>
            </div>
            <div className='w-full'>
              <textarea
              onChange={updateAssignment}
                name=''
                id=''
                value={inputValue}
                cols='30'
                rows='10'
                placeholder='Comment'
                className='border rounded border-pink  w-full p-4 outline-none texx-lg capitalize'
                type='text'
                required
              ></textarea>
            </div>
          </div>
          <div className='flex justify-between mb-4 border rounded-b border-pink p-4'>
            <div className='flex items-center text-center'>
              <img src={TextIcon} alt={TextIcon} className='mr-4 w-6 h-76' />
              <img src={LinkIcon} alt={LinkIcon} className='mr-4 w-6 h-6' />
              <img src={MicIcon} alt={MicIcon} className='mr-4 w-6 h-6' />
            </div>
            <div>
              <button
                onClick={submit}
                className='bg-purple text-white text-center rounded-lg p-2 w-20 '
              >
                Submit
              </button>
            </div>
          </div>
          <div className=''>
            <input type='checkbox' className='accent-purple' />{' '}
            <span>Receive an email when submissions are graded.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentQest;
