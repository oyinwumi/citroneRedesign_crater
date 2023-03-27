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
    <div className='bg-light h-full flex justify-center items-center'>
      <div className='w-148 h-200 bg-white '>
        <img src={Logo} alt='' className='ml-6 mt-8 cursor-pointer' />

        <div className='px-16 mt-12'>
          <h1 className='text-center text-black text-xl font-bold'>
            Forgot Password
          </h1>
          <p className='text-center mt-4 text-black'>
            Enter the email registered with your account
          </p>

          <form action=''>
            <div className='flex items-center bg-white mt-8 border border-lightgrey rounded'>
              <img
                src={Mail}
                alt=''
                className='bg-light px-3 py-3.5 rounded-l'
              />
              <input
                type='text'
                name='email'
                placeholder='Enter your email'
                className='w-full rounded-r ml-3 placeholder:text-black focus: outline-0'
              />
            </div>

            <button
              type='submit'
              className='bg-purple flex justify-center items-center w-full mt-8 py-3 font-bold text-white rounded'>
              Continue
            </button>
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

export default ForgotPassword;
