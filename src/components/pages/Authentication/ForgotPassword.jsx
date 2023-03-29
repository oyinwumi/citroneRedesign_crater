import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {setEmail} from '../../../apps/Reducers/userReducer'
import Logo from '../../../assets/logo.svg';
import Mail from '../../../assets/mail-icon.svg';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state.userReducer);

  // const checkEmail =() => {
  //   const{email} = state
  // }
  return (
    <div className=' body h-200 bg-light mx-auto sm:flex sm:justify-center sm:items-center'>
      <div className='bg-white rounded shadow-lg pb-20 sm:w-148'>
        <div className='py-8 px-6'>
          <Link to='/'>
            <img src={Logo} alt='' className='cursor-pointer' />
          </Link>
        </div>

        <div className='px-16'>
          <h1 className='text-center mt-12 text-black text-xl font-bold'>
            Forgot Password
          </h1>
          <p className='text-center mt-4 text-black'>
            Enter the email registered with your account
          </p>

          <form action=''>
            <div className='bg-white flex items-center mt-8 border border-lightgrey rounded overflow-hidden shadow'>
              <img src={Mail} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='text'
                name='email'
                placeholder='Enter your email'
                className='w-full px-3 placeholder:text-black focus: outline-0'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-purple flex justify-center items-center mt-8 py-3 px-2 font-bold text-white rounded shadow'
            >
              Continue
            </button>
          </form>

          <div className='flex justify-center mt-5'>
            <p className='text-lightergrey mr-4'>Don't have an account?</p>
            <Link to='/signup' className='text-purple font-semibold'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
