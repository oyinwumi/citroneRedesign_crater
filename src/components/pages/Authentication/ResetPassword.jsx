import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg';
import Mail from '../../../assets/mail-icon.svg';

const ResetPassword = () => {
  return (
    <div className='bg-lightpink flex justify-center items-center'>
      <div className='w-148 h-200 bg-green '>
        <div className='ml-6 mt-8'>
          <img src={Logo} alt='' />
        </div>

        <div className='px-16 mt-12'>
          <h1 className='text-center text-black text-xl font-bold'>
            Forgot Password
          </h1>
          <p className='text-center mt-4 text-black'>
            Enter the email registered with your account
          </p>

          <form action=''>
            <div className='flex bg-white mt-8 border border-lightgrey rounded'>
              <img src={Mail} alt='' className='bg-light p-3 rounded-l' />
              <input
                type='text'
                name='email'
                placeholder='Enter your email'
                className='w-full rounded-r ml-3 placeholder:text-black focus: outline-0'
              />
            </div>

            <button
              type='submit'
              className='bg-purple w-full mt-8 py-3.5 text-white rounded'
            >
              Continue
            </button>
          </form>

          <div className='flex'>
            <p>Don't have an account?</p>
            <Link to='/signup'>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
