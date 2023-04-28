import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from './../../../../assets/user-image.svg';

const ProfilePopUp = () => {
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className='w-[400px] h-[200px] bg-[#ebdcf9] py-8 pl-4 rounded-lg relative'>
      <div className='flex items-center'>
        <img src={profileImg} alt='' />
        <div className='ml-4'>
          <h1 className='text-xl mb-2 font-bold'>Hadiza Abdulazeez</h1>
          <p className='font-light mb-2'>Hadizaabdulaziz@gmail.com</p>
          <Link
            to='profile'
            className='text-base font-semibold  cursor-pointer'
          >
            Profile
          </Link>
        </div>
      </div>
      <Link
        to=''
        className='text-[#131313] text-base font-semibold absolute top-3 right-[18px] cursor-pointer'
      >
        Log Out
      </Link>
    </div>
  );
};

export default ProfilePopUp;
