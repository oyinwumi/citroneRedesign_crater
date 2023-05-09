import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';
import { useState } from 'react';

const EditAssignment = () => {
  const {inputValue} =  useSelector((store)=> store.course)
  const [updateInput , setUpdateInput] = useState(inputValue);
  // const navigate = useNavigate()
  const reSubmit = (e) =>{
    console.log(e.target.value);
    setUpdateInput(e.target.value)
  
  }
  const handleSubmit = ()=>{
    setUpdateInput(updateInput)
    alert('submitted')
    // navigate('/assignment')
  }
  return (
    <div className='w-full h-full relative'>
      
      <div className='flex p-3'>
     
        <div className='w-full px-6 '>
          <div className='my-6'>
            <p className=' flex items-center text-center '>
              courses
              <Link to='/moduleone' className='mx-2 text-sm '>
                <FaChevronRight />
              </Link>
              Module 1
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
            <div className='mt-10 mb-4 font-bold lg:text-[24px] md:text-xl text-xl'>
              <p>Your Answer</p>
            </div>
            <div className='w-full'>
              <textarea
            
                name=''
              value= {updateInput}
                placeholder={inputValue}
                className='border rounded-sm border-pink  w-full p-4 outline-none texx-lg capitalize'
                type='text'
                onChange={() => reSubmit }
              ></textarea>
            </div>
          </div>
          <div className='mt-3 relative float-right'>
            <button onClick={handleSubmit}  className='bg-white text-purple border border-purple text-center rounded-lg p-1 w-24 '>
              Re-Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAssignment;
