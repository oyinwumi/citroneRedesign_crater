import React, { useState } from 'react';
import ShowPassword from '../../../ShowPassword';
import leftChevron from '../../../../assets/chevron-left.svg';
import { Link } from 'react-router-dom';

const SecuritySettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const isSettings = true;

  return (
    <div>
      <div>
        <h2 className='text-3xl font-bold mb-1'>Security</h2>
        <p className='text-2xl'>You can change your password anytime.</p>
      </div>

      <div className='mt-12'>
        <h2 className='text-3xl mb-1'>Current password</h2>
        <ShowPassword
          placeHolder='Current Password'
          password={currentPassword}
          setPassword={setCurrentPassword}
          isSettings={isSettings}
        />
      </div>

      <div className='mt-20'>
        <h2 className='text-3xl mb-1'>New password</h2>
        <ShowPassword
          placeHolder='New Password'
          password={newPassword}
          setPassword={setNewPassword}
          isSettings={isSettings}
        />
      </div>

      <div className='mt-20'>
        <h2 className='text-3xl mb-1'>Confirm password</h2>
        <ShowPassword
          placeHolder='Current Password'
          password={confirmPassword}
          setPassword={setConfirmPassword}
          isSettings={isSettings}
        />
      </div>

      <div className='flex justify-between my-20'>
        <button
          type='button'
          className='bg-purple text-white text-2xl py-1 px-6 rounded-lg'
        >
          Save changes
        </button>

        <div className='flex items-center '>
          <img src={leftChevron} alt='' />
          <Link to='/profile'>
            <h3 className=' text-2xl ml-2'>Go back</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
