import React from 'react';
import arrowLeft from '../../../../assets/arrow-left.svg';
import dashboardImg from '../../../../assets/dashboard-img.svg';
import profileImg from '../../../../assets/user-image.svg';
import location from '../../../../assets/location-icon.svg';

// This returns the view of the active (i.e clicked) user profile.
// It is also a component of the ProfilePage.jsx
const CurrentProfileView = () => {
  return (
    <div div className='container'>
      <span className='flex items-center ml-7'>
        <img src={arrowLeft} alt='' />
        <span className='ml-3 text-xl font-bold'>Profile</span>
      </span>

      <div className='relative'>
        <img src={dashboardImg} alt='' className='pt-2 w-full' />
        <img src={profileImg} alt='' className='absolute -bottom-16 left-7' />
      </div>
      <div className='flex justify-end'>
        <button
          type='button'
          className='border border-purple rounded py-2 px-4 mt-2 text-base text-purple'
        >
          Edit Profile
        </button>
      </div>

      <div className='pl-6 mt-10'>
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

        <div className=' border-t border-pink pt-4 '>
          <h1 className='text-xl font-bold'>Contact Information</h1>
          <form action=''>
            <div className='mt-4'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                value=''
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='text'
                value=''
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='phone' className='mt-4'>
                Phone Number
              </label>
              <input
                type='text'
                value=''
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CurrentProfileView;
