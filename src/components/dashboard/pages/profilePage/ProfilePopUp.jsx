import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from './../../../../assets/user-image.svg';
import { openModalFour } from '../../../../apps/modal/modalSlice';
import { useDispatch } from 'react-redux';

const ProfilePopUp = () => {
  const dispatch = useDispatch();

  return (
    <div className='w-[390px] h-[160px] bg-[#ebdcf9] pt-8 pb-8 pl-4 rounded-lg relative'>
      <div className='flex items-center'>
        <img src={profileImg} alt='' className='w-[100px] h-[100px]' />
        <div className='ml-4'>
          <h1 className='text-xl mb-2 font-bold'>Hadiza Abdulazeez</h1>
          <p className='font-light mb-2'>Hadizaabdulaziz@gmail.com</p>
          <Link
            to='profile'
            className='font-semibold  cursor-pointer underline outline-none'
          >
            Profile
          </Link>
        </div>
      </div>
      <div
        className='text-[#131313] font-semibold absolute top-3 right-[18px] cursor-pointer'
        onClick={() => dispatch(openModalFour())}
      >
        Log Out
      </div>
    </div>
  );
};

export default ProfilePopUp;
