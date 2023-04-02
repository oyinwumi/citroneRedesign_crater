import React from 'react';
import profileIcon from '../../../../assets/profile-icon.svg';
import warningIcon from '../../../../assets/warning-icon.svg';
import leftChevron from '../../../../assets/chevron-left.svg';

const AccountSettings = () => {
  return (
    <div className='mt-20 pb-[358px] pl-[136px] pr-28 h-full relative'>
      <div>
        <h3 className='text-3xl font-bold mb-1'>Your account</h3>
        <p className='text-2xl'>
          See information about your account or learn about your deactivation
          options.
        </p>
      </div>

      <div className='flex items-center mt-20'>
        <img src={profileIcon} alt='' />
        <div className='flex flex-col ml-7'>
          <h1 className='text-3xl font-medium mb-1'>Account Information</h1>
          <p className='text-2xl'>
            See information about your account like email address.
          </p>
        </div>
      </div>

      <div className='flex items-center mt-20'>
        <img src={warningIcon} alt='' />
        <div className='flex flex-col ml-7'>
          <h1 className='text-3xl font-medium mb-1'>Deactivate your account</h1>
          <p className='text-2xl'>
            Discover how you can deactivate your account.
          </p>
        </div>
      </div>

      <div className='flex absolute bottom-0 right-4 mb-20'>
        <img src={leftChevron} alt='' />
        <h3 className=' text-2xl ml-2'>Go back</h3>
      </div>
    </div>
  );
};

export default AccountSettings;
