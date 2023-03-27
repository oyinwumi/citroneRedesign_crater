import React from 'react';
import Logo from '../../../assets/logo.svg';
import Lock from '../../../assets/lock-icon.svg';
import Eye from '../../../assets/eye-icon.svg';
import Check from '../../../assets/shield-tick.svg';

const ResetPassword = () => {
  return (
    <div className='bg-light h-full flex justify-center items-center'>
      <div className='w-148 h-200 bg-white '>
        <img src={Logo} alt='' className='ml-6 mt-8 cursor-pointer' />

        <div className='px-16 mt-12'>
          <h1 className='text-center text-black text-xl font-bold'>
            Reset Password
          </h1>
          <p className='text-center mt-4 px-4 text-black'>
            Your password should be at least 9 characters of lower case and
            upper case.
          </p>

          <form action=''>
            <div className='flex items-center bg-white border border-lightgrey mt-5 rounded'>
              <img
                src={Lock}
                alt=''
                className='bg-light px-3 py-3.5 rounded-l'
              />
              <input
                type='password'
                id='new-password'
                name='new-password'
                placeholder='Enter new password'
                className='w-full rounded-r pl-3 placeholder:text-black focus: outline-0'
              />
              <img src={Eye} alt='' className=' eye mx-4 cursor-pointer' />
            </div>

            <div className='flex items-center bg-white mt-8 border border-lightgrey rounded'>
              <img
                src={Check}
                alt=''
                className='bg-light px-3 py-3.5 rounded-l'
              />
              <input
                type='password'
                id='re-password'
                name='re-password'
                placeholder='Confirm new password'
                className='w-full rounded-r ml-3 placeholder:text-black focus: outline-0'
              />
            </div>

            <button
              type='submit'
              className='bg-purple flex justify-center items-center w-full mt-8 py-3 font-bold text-white rounded'>
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
