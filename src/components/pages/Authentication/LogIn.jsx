import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setEmail, setPassword } from '../../../apps/reducers/userReducer';
import Logo from '../../../assets/logo.svg';
import Mail from '../../../assets/mail-icon.svg';
import Lock from '../../../assets/lock-icon.svg';
import Eye from '../../../assets/eye-icon.svg';
import Google from '../../../assets/logos_google-icon.svg';
import Facebook from '../../../assets/grommet-icons_facebook-option.svg';

const LogIn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const loginData = () => {
    const { email, password } = state;
    let allUsers = JSON.parse(localStorage.getItem('users'));
    if (!allUsers) {
      console.log('allUsers is empty');
      return false;
    }

    const foundUser = allUsers.filter(
      (user) => user.email === email && user.password === password
    );
    if (!foundUser.length) {
      console.log('No filtered user found');
      console.log('wrong email and password');
      return false;
    }
    navigate('/dashboard');
  };

  return (
    <div className='body h-200 bg-light mx-auto sm:flex sm:justify-center sm:items-center '>
      <div className='bg-white rounded shadow-lg sm:w-148'>
        <div className='py-8 px-6'>
          <img src={Logo} alt='' className=' cursor-pointer' />
        </div>

        <div className=' px-16'>
          <h2 className='text-center mt-4 font-bold text-xl text-black'>
            Welcome Back
          </h2>

          <form action=''>
            <div className='bg-white flex items-center mt-12 border border-pink rounded overflow-hidden shadow'>
              <img src={Mail} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='text'
                placeholder='Enter your email'
                name='email'
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className='w-full pl-3 placeholder:text-black focus:outline-0'
              />
            </div>

            <div className='bg-white flex items-center mt-5 border border-pink rounded overflow-hidden shadow'>
              <img src={Lock} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='password'
                placeholder='Enter your password'
                name='password'
                onChange={(e) => dispatch(setPassword(e.target.value))}
                className='w-full pl-3 placeholder:text-black focus:outline-0'
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
                className=' text-purple cursor-pointer'
              >
                Forgot password?
              </Link>
            </div>

            <button
              type='submit'
              onClick={loginData}
              className='w-full bg-purple flex justify-center items-center mt-8 py-3 text-white font-bold rounded shadow'
            >
              Login
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
                <p className='pl-2 font-semibold'>Login with Google</p>
              </button>

              <button
                type='submit'
                id='facebook'
                className='w-full mt-4 flex justify-center items-center bg-blue py-2 rounded shadow sm:w-1/2 sm:mt-0 sm:ml-4'
              >
                <img src={Facebook} alt='Facebook icon' />
                <p className='pl-2 font-semibold text-white'>
                  Login with Facebook
                </p>
              </button>
            </div>
          </form>

          <div className='flex justify-center mt-5 pb-20'>
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

export default LogIn;
