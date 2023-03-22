import React from 'react';
import Logo from '../../../assets/logo.svg';
import Mail from '../../../assets/mail-icon.svg';
import Lock from '../../../assets/lock-icon.svg';
import Eye from '../../../assets/eye-icon.svg';
import Google from '../../../assets/logos_google-icon.svg';
import Facebook from '../../../assets/grommet-icons_facebook-option.svg';
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='h-full bg-light flex justify-center items-center'>
      <div className='w-148 h-200 bg-white '>
        <img src={Logo} alt='' className='mt-8 ml-6 cursor-pointer' />

        <div className='mt-12 px-16'>
          <h2 className='text-center text-black font-bold text-xl'>
            Welcome Back
          </h2>

          <form action=''>
            <div className='bg-white flex items-center mt-12 border border-pink rounded'>
              <img
                src={Mail}
                alt=''
                className='bg-light px-3 py-3.5 rounded-l'
              />
              <input
                type='text'
                placeholder='Enter your email'
                name='email'
                className='w-full pl-3 rounded-r placeholder:text-black focus:outline-0'
              />
            </div>

            <div className='bg-white flex items-center mt-5 border border-pink rounded'>
              <img
                src={Lock}
                alt=''
                className='bg-light px-3 py-3.5 rounded-l'
              />
              <input
                type='text'
                placeholder='Enter your password'
                name='password'
                className='w-full pl-3 rounded-r placeholder:text-black focus:outline-0'
              />
              <img src={Eye} alt='' className=' eye mx-4 cursor-pointer' />
            </div>

            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='checkbox'
                  value=''
                  className='w-4 h-4 checked:accent-purple'
                />
                <label for='checkbox' className=' text-darkgrey ml-2'>
                  Remember Me
                </label>
              </div>
              <Link
                to='/forgot-password'
                className=' text-purple cursor-pointer'>
                Forgot password?
              </Link>
            </div>

            <button
              type='submit'
              className='w-full bg-purple flex justify-center items-center mt-8 py-3 text-white font-bold rounded '>
              Login
            </button>

            <p className='center-text text-center text-lightgrey mt-4'>
              Or continue with
            </p>

            <div className='flex mt-4 justify-between'>
              <button
                type='submit'
                id='google'
                className='flex justify-center items-center w-56 py-2 border border-lightgrey rounded'>
                <img src={Google} alt='Google icon' />
                <p className='pl-2 font-semibold'>Login with Google</p>
              </button>

              <button
                type='submit'
                id='facebook'
                className='flex justify-center items-center w-56 bg-blue py-2 rounded'>
                <img src={Facebook} alt='Facebook icon' />
                <p className='pl-2 font-semibold text-white'>
                  Login with Facebook
                </p>
              </button>
            </div>
          </form>

          <div className='flex justify-center items-center mt-5'>
            <p className='text-lightgrey mr-4'>Don't have an account?</p>
            <Link to='/signup' className='text-purple font-semibold'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
