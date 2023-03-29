import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  setMobileNo,
  setPassword,
} from '../../../apps/reducers/userReducer';
import Logo from '../../../assets/logo.svg';
import Person from '../../../assets/person-icon.svg';
import Mail from '../../../assets/mail-icon.svg';
import Call from '../../../assets/call-icon.svg';
import Lock from '../../../assets/lock-icon.svg';
import Eye from '../../../assets/eye-icon.svg';
import Google from '../../../assets/logos_google-icon.svg';
import Facebook from '../../../assets/grommet-icons_facebook-option.svg';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);

  const saveNewUser = () => {
    let allUsers = JSON.parse(localStorage.getItem('Users')) || [];

    const { firstName, lastName, email, mobileNo, password } = state;
    if (!firstName || !lastName || !email || mobileNo || !password) {
      return 'firstName, lastName, email, mobileNo and password cannot be empty';
    }

    let user = { firstName, lastName, email, mobileNo, password };
    allUsers.push(user);
    localStorage.setItem('users', JSON.stringify(allUsers));
    alert('SignUp Successful');
  };

  return (
    <div className='body h-200 bg-light mx-auto sm:flex sm:justify-center sm:items-center'>
      <div className='bg-white rounded shadow-lg sm:w-148'>
        <div className='py-8 px-6'>
          <img src={Logo} alt='' className='cursor-pointer' />
        </div>

        <div className='px-16'>
          <h4 className='text-center mt-4 font-bold text-xl text-black'>
            Create Account
          </h4>

          <form action=''>
            <div className='sm:flex sm:justify-between sm:mt-12'>
              <div className='mt-12 flex items-center bg-white w-full border border-lightgrey rounded overflow-hidden shadow sm:w-1/2 sm:mt-0 '>
                <img src={Person} alt='' className='bg-light px-3 py-3.5' />
                <input
                  type='text'
                  id='firstName'
                  placeholder='Enter your first name'
                  name='firstname'
                  onChange={(e) => dispatch(setFirstName(e.target.value))}
                  className='w-full pl-3 placeholder:text-black focus: outline-0'
                />
              </div>

              <div className='flex items-center bg-white w-full border border-lightgrey rounded overflow-hidden shadow mt-5 sm:w-1/2 sm:ml-4 sm:mt-0'>
                <img src={Person} alt='' className='bg-light px-3 py-3.5' />
                <input
                  type='text'
                  id='lastName'
                  placeholder='Enter your last name'
                  name='lastname'
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                  className='w-full pl-3 placeholder:text-black focus: outline-0'
                />
              </div>
            </div>

            <div className='flex items-center bg-white border border-lightgrey mt-5 rounded overflow-hidden shadow'>
              <img src={Mail} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='email'
                id='email'
                placeholder='Enter your email'
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className='w-full pl-3 placeholder:text-black focus: outline-0'
              />
            </div>

            <div className=' flex items-center bg-white border border-lightgrey mt-5 rounded overflow-hidden shadow'>
              <img src={Call} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='text'
                id='phone'
                placeholder='Enter your phone number'
                name='phone'
                onChange={(e) => dispatch(setMobileNo(e.target.value))}
                className='w-full pl-3 placeholder:text-black focus: outline-0'
              />
            </div>

            <div className='flex items-center bg-white border border-lightgrey mt-5 rounded overflow-hidden shadow'>
              <img src={Lock} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='password'
                id='password'
                placeholder='Enter your password'
                name='password'
                onChange={(e) => dispatch(setPassword(e.target.value))}
                className='w-full pl-3 placeholder:text-black focus: outline-0'
              />
              <img src={Eye} alt='' className=' eye mx-4 cursor-pointer' />
            </div>

            <div className='flex items-center mt-4'>
              <input
                type='checkbox'
                id='checkbox'
                value=''
                className='w-4 h-4 checked:accent-purple'
              />
              <label for='checkbox' className='ml-2'>
                By signing up, I agree to the{' '}
                <span className='text-purple cursor-pointer'>
                  Terms of Service and privacy policy
                </span>
              </label>
            </div>

            <button
              type='submit'
              id='signUp'
              onClick={saveNewUser}
              className='w-full flex justify-center items-center bg-purple py-3 text-white rounded font-bold mt-4 shadow'
            >
              Sign Up
            </button>

            <p className='center-text text-center text-lightergrey mt-4'>
              Or continue with
            </p>

            <div className='sm:flex sm:justify-between sm:mt-4'>
              <button
                type='submit'
                id='google'
                className='w-full mt-4 flex justify-center items-center py-2 border border-lightgrey rounded shadow sm:w-1/2 sm:mt-0'
              >
                <img src={Google} alt='Google icon' />
                <p className='pl-2 font-semibold'>Sign up with Google</p>
              </button>

              <button
                type='submit'
                id='facebook'
                className='w-full mt-4 flex justify-center items-center bg-blue py-2 rounded shadow sm:w-1/2 sm:mt-0 sm:ml-4'
              >
                <img src={Facebook} alt='Facebook icon' />
                <p className='pl-2 font-semibold text-white'>
                  Sign up with Facebook
                </p>
              </button>
            </div>
          </form>

          <div className='flex justify-center mt-5 pb-20'>
            <p className='text-lightergrey mr-4'>Already have an account?</p>
            <Link to='/login' className='text-purple font-semibold'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
