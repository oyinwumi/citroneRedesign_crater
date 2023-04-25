// import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeModalFour } from '../../../../apps/modal/modalSlice';
import { Link } from 'react-router-dom';

const LogoutModal = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // useEffect(()=>{
  //     navigate('/login')
  // })
  return (
    <aside className='w-full  h-full bg-gray fixed z-50 '>
      <div className='bg-white  border border-white rounded-lg  lg:w-[432px]  md:w-[40%] w-[75%]  p-4 items-center mx-auto lg:mt-[18%] md:mt-[20%] mt-[25%] z-100  '>
        <h2 className='text-xl mb-4 '>Logout</h2>
        <p className='mb-4 text-[16px]'>
          Are you sure you want to log out your citrone account?
        </p>
        <div>
          <Link to='/login'>
            <button className='w-full text-center bg-deepred text-white border rounded mb-4 p-2'>
              Logout
            </button>
          </Link>
          <button
            onClick={() => dispatch(closeModalFour())}
            className='w-full text-center bg-white text-purple  border rounded mb-4 p-2'
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default LogoutModal;
