import React from 'react';
import eyeIcon from '../../../../assets/eye-icon.svg';
import eyeSlashIcon from '../../../../assets/eyeSlash-icon.svg';
import leftChevron from '../../../../assets/chevron-left.svg';

const SecuritySettings = () => {
  return (
    <div>
      <div>
        <h2 className='text-3xl font-bold mb-1'>Security</h2>
        <p className='text-2xl'>You can change your password anytime.</p>
      </div>

      <div className='mt-12'>
        <h2 className='text-3xl mb-1'>Current password</h2>
        <div className='flex justify-between border bg-light rounded-lg overflow-hidden'>
          <input
            type='text'
            placeholder='current password'
            className='w-full p-3 bg-light text-2xl'
          />
          <img src={eyeIcon} alt='' className='p-3 bg-light' />
        </div>
      </div>

      <div className='mt-20'>
        <h2 className='text-3xl mb-1'>New password</h2>
        <div className='flex justify-between border bg-light rounded-lg overflow-hidden'>
          <input
            type='text'
            placeholder='new password'
            className='w-full p-3 bg-light text-2xl'
          />
          <img src={eyeSlashIcon} alt='' className='p-3 bg-light' />
        </div>
      </div>

      <div className='mt-20'>
        <h2 className='text-3xl mb-1'>Confirm password</h2>
        <div className='flex justify-between border bg-light rounded-lg overflow-hidden'>
          <input
            type='text'
            placeholder='confirm new password'
            className='w-full p-3 bg-light text-2xl'
          />
          <img src={eyeSlashIcon} alt='' className='p-3 bg-light ' />
        </div>
      </div>

      <div className='flex justify-between my-20'>
        <button
          type='button'
          className='bg-purple text-white text-2xl py-1 px-6 rounded-lg'>
          Save changes
        </button>

        <div className='flex items-center '>
          <img src={leftChevron} alt='' />
          <h3 className=' text-2xl ml-2'>Go back</h3>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
