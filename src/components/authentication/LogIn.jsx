import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../apps/reducers/userReducer';
import Logo from '../../assets/logo.svg';
import Mail from '../../assets/mail-icon.svg';
import ShowPassword from '../ShowPassword';
import Google from '../../assets/logos_google-icon.svg';
import Facebook from '../../assets/grommet-icons_facebook-option.svg';
import api from '../../api/axios';

const LOGIN_URL = '/api/citrone/auth/login';

const LogIn = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { auth } = state;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  // const [fullName, setFullName] = useState('')

  // Clear out the error message once the user makes changes to the email or password
  useEffect(() => {
    setErrorMsg('');
  }, [email, password]);

  // Function to check that the email and password exists
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg('All fields are required');
      return false;
    }
    const user = { email, password };

    try {
      const response = await api.post(LOGIN_URL, user, {
        headers: { 'Content-Type': 'application/json' },
        // withCredentials: true,
      });
      // const response = await api.post( +
      //   '/users',
      //   JSON.stringify({ email, password }),
      //   {
      //     headers: { 'Content-Type': 'application/json' },
      //     withCredentials: true,
      //   }
      // );
      console.log(response.data);
      localStorage.setItem("token", response?.data?.token)
     
      // localStorage.setItem("user", JSON.stringify(response?.data))
  
      // console.log(response.data.firstName);
      // console.log(response.data.lastName);
      // console.log(response.data.email);
      // console.log(response.data.username);
      // console.log(response.data.role);
      // console.log(response.data.accessToken);
      // console.log(JSON.stringify(response?.data));
      const firstName = response?.data?.user?.firstName;
      const lastName = response?.data?.user?.lastdispatchName;
      const email = response?.data?.user?.email;
      const userName = response?.data?.user?.username;
      const role = response?.data?.user?.role;
      const accessToken = response?.data?.user?.accessToken;
      const fullName = response?.data.user?.firstName + ' ' +  response?.data.user?.lastName ;
      const details = { email, password, userName, role, accessToken };
      const detailsPlus = {
        firstName,
        lastName,
        email,
        userName,
        role,
        accessToken,
        fullName
      };
    
      console.log(`Details: ${JSON.stringify(details)}`);
      console.log(`DetailsPlus: ${JSON.stringify(detailsPlus)}`);
      localStorage.setItem("user",detailsPlus.userName )
      localStorage.setItem("fullName", detailsPlus.fullName)

      dispatch(setAuth(state,detailsPlus));
      console.log(`AUTH: ${JSON.stringify(auth)}`);

      setEmail('');
      setPassword('');
      navigate('/dashboard');
      // return <Navigate replace to='/login' />;
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMsg('Missing email or password');
      } else if (error.response?.status === 401) {
        setErrorMsg('Wrong Username or Password');
      } else {
        setErrorMsg('Login Failed');
      }
      console.log(error.response);
      console.log(`Error: ${error.message}`);
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
                value={email}
                placeholder='Enter your email'
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-3 placeholder:text-black focus:outline-0'
              />
            </div>

            <div>
              <ShowPassword
                placeHolder='Enter Password'
                password={password}
                setPassword={setPassword}
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
