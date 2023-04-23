import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  setEmail,
  setPassword,
  setAuth,
} from '../../../apps/reducers/userReducer';
import Logo from '../../../assets/logo.svg';
import Mail from '../../../assets/mail-icon.svg';
import Lock from '../../../assets/lock-icon.svg';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import Google from '../../../assets/logos_google-icon.svg';
import Facebook from '../../../assets/grommet-icons_facebook-option.svg';
import api from '../../../api/axios';

const LOGIN_URL = '/api/citrone/auth/login';

const LogIn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const navigate = useNavigate();

  const { email, password, auth } = state;
  const [errorMsg, setErrorMsg] = useState('');

  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(eyeSlash);

  // Clear out the error message once the user makes changes to the email or password
  useEffect(() => {
    setErrorMsg('');
  }, [email, password]);

  // Function to check if there are users in the database and also check that the email and password exists
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('All fields are required');
      return false;
    }
    const user = { email, password };

    try {
      const response = await api.post(LOGIN_URL, user 
        // {headers: {'Content-Type': 'application/json'}, withCredentials : true}
        );
      // const response = await api.post(
      //   '/users',
      //   JSON.stringify({ email, password }),
      // {
      //   headers: { 'Content-Type': 'application/json' },
      //   withCredentials: true,
      // }
      // console.log(response.data);
      // console.log(response.data.role);
      // console.log(response.data.username);
      // console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const role = response?.data?.role;
      const userName = response?.data?.username;
      const details = { email, password, userName, role, accessToken };
      setAuth({ email, password, userName, role, accessToken });
      // console.log(`AUTH: ${JSON.stringify(auth)}`);
      // console.log(`AUTH: ${JSON.stringify(details)}`);
      setEmail('');
      setPassword('');
      navigate('/dashboard');
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMsg('Missing email or password');
      } else if (error.response?.status === 401) {
        setErrorMsg('User does not exist');
      } else {
        setErrorMsg('Login Failed');
      }
      // console.log(error.response);
      console.log(`Error: ${error.message}`);
    }
  };

  // Handle display/hiding of the password
  const handleToggle = () => {
    if (passwordType === 'password') {
      setEyeIcon(eye);
      setPasswordType('text');
    } else {
      setEyeIcon(eyeSlash);
      setPasswordType('password');
    }
  };

  return (
    <div className='body min-h-screen bg-light mx-auto sm:flex sm:justify-center sm:items-center'>
      <div className='bg-white rounded shadow-lg pb-20 sm:w-148'>
        <div className=' py-8 px-6'>
          <Link to='/'>
            <img src={Logo} alt='' className='cursor-pointer' />
          </Link>
        </div>

        <div className=' px-6 sm:px-16'>
          <h2 className='text-center mt-4 font-bold text-xl text-black'>
            Welcome Back
          </h2>

          <p className={errorMsg ? 'errorInstructions' : 'hide'}>{errorMsg}</p>

          <form onSubmit={handleLogin}>
            <div className='bg-white flex items-center mt-12 border border-pink rounded overflow-hidden shadow'>
              <img src={Mail} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='text'
                placeholder='Enter your email'
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className='w-full px-3 placeholder:text-black focus:outline-0'
              />
            </div>

            <div className='bg-white flex items-center mt-5 border border-pink rounded overflow-hidden shadow'>
              <img src={Lock} alt='' className='bg-light px-3 py-3.5' />
              <input
                type={passwordType}
                placeholder='Enter your password'
                onChange={(e) => dispatch(setPassword(e.target.value))}
                className='w-full pl-3 placeholder:text-black focus:outline-0'
              />
              <Icon
                icon={eyeIcon}
                onClick={handleToggle}
                className='mx-4 cursor-pointer'
              />
            </div>

            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  id='checkbox'
                  value=''
                  className='w-4 h-4 checked:accent-purple'
                />
                <label htmlFor='checkbox' className=' text-darkgrey ml-2'>
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
              className='w-full bg-purple flex justify-center items-center mt-8 py-3 px-2 text-white font-bold rounded shadow'
            >
              Login
            </button>
          </form>

          <p className='center-text text-center text-lightergrey mt-4'>
            Or continue with
          </p>

          <div className='sm:flex sm:justify-between sm:mt-4'>
            <button
              type='submit'
              id='google'
              className='w-full mt-4 flex justify-center items-center py-2 px-2 border border-lightgrey rounded shadow sm:w-1/2 sm:mt-0'
            >
              <img src={Google} alt='Google icon' />
              <p className='ml-2 font-semibold'>Login with Google</p>
            </button>

            <button
              type='submit'
              id='facebook'
              className='w-full mt-4 flex justify-center items-center bg-blue py-2 px-2 rounded shadow sm:w-1/2 sm:mt-0 sm:ml-4'
            >
              <img src={Facebook} alt='Facebook icon' />
              <p className='ml-2 font-semibold text-white'>
                Login with Facebook
              </p>
            </button>
          </div>

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

export default LogIn;
