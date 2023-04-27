import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import EditProfile from './EditProfile';
import arrowLeft from '../../../../assets/arrow-left.svg';
import dashboardImg from '../../../../assets/dashboard-img.svg';
import profileImg from '../../../../assets/user-image.svg';
import location from '../../../../assets/location-icon.svg';

// This returns the view of the active (i.e clicked) user profile.
// It is also a component of the ProfilePage.jsx
const CurrentProfileView = () => {
  const state = useSelector((state) => state.userReducer);
  const { userName, email, phoneNumber } = state;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div div className='bg-white h-full pt-6 pb-[126px]'>
      <span className='flex items-center ml-7'>
        <img src={arrowLeft} alt='' />
        <span className='ml-3 text-xl font-bold'>Profile</span>
      </span>

      <div className='pr-6'>
        <div className='relative'>
          <img src={dashboardImg} alt='' className='pt-2 w-full' />
          <img src={profileImg} alt='' className='absolute -bottom-16 left-7' />
        </div>
        <div className='flex justify-end'>
          <button
            to='/editprofile'
            type='button'
            className='border border-purple rounded-lg py-2 px-4 mt-2 text-base text-purple'
            onClick={openModal}
          >
            Edit Profile
          </button>
        </div>
      </div>
      {showModal ? <EditProfile setShowModal={setShowModal} /> : null}

      <div className='pl-6 pr-8 mt-10'>
        <div className='flex justify-between items-center'>
          <div>
            <h2 className='text-xl font-bold'>
              <span>Hadiza Abdulazeez</span>
              <span className='text-base font-light ml-2'>@haddy</span>
            </h2>
            <h3 className='text-lg pt-1'>UI/UX Design Intern</h3>
          </div>
          <div>
            <h2 className='text-xl font-bold'>
              <span>Accountant</span>
              <span className='font-light ml-2'>at AEDC</span>
            </h2>
            <h3 className='font-light mt-2'>Hadizaabdulaziz@gmail.com</h3>
          </div>
        </div>

        <p className='font-light'>Intermediate Class</p>
        <div className='mt-2 flex mb-4'>
          <img src={location} alt='' />
          <span className='font-light'>
            Abuja, Federal Capital Territory, Nigeria
          </span>
        </div>

        <div className=' border-t border-pink pt-4'>
          <h1 className='text-xl font-bold'>Contact Information</h1>

          <div className='mt-4'>
            <h3 className='text-base'>Username</h3>
            <div className='bg-verylightgrey p-3 mt-2 border border-pink rounded shadow'>
              {userName}
            </div>
          </div>

          <div className='mt-4'>
            <h3 className='text-base'>Email</h3>
            <div className='bg-verylightgrey p-3 mt-2 border border-pink rounded shadow'>
              {email}
            </div>
          </div>
          <div className='mt-4'>
            <h3 className='text-base'>Phone Number</h3>
            <div className='bg-verylightgrey p-3 mt-2 border border-pink rounded shadow'>
              {phoneNumber}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentProfileView;
