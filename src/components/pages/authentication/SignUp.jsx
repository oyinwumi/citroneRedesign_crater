import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFirstName,
  setLastName,
  setEmail,
  setMobileNo,
} from '../../../apps/reducers/userReducer';
import Logo from '../../../assets/logo.svg';
import Person from '../../../assets/person-icon.svg';
import Mail from '../../../assets/mail-icon.svg';
import Call from '../../../assets/call-icon.svg';
import ShowPassword from '../../ShowPassword';
import Google from '../../../assets/logos_google-icon.svg';
import Facebook from '../../../assets/grommet-icons_facebook-option.svg';
import { Link } from 'react-router-dom';
import SignUpSuccess from './SignUpSuccess';
import api from '../../../api/axios';

// const USER_REGEX = /^[A-Z][a-zA-Z]{3,23}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^([+]\d{2})?\d{11}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SIGNUP_URL = '/api/citrone/auth';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMobileNo, setValidMobileNo] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);

  const { firstName, lastName, email, mobileNo } = state;

  useEffect(() => {
    setValidFirstName(firstName.length > 2);
  }, [firstName]);

  useEffect(() => {
    setValidLastName(lastName.length > 2);
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidMobileNo(PHONE_REGEX.test(mobileNo));
  }, [mobileNo]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !validFirstName ||
      !validLastName ||
      !validEmail ||
      !validMobileNo ||
      !validPassword ||
      !validConfirmPassword
    ) {
      console.log('All fields must be filled correctly');
      setErrorMsg('All fields must be filled correctly');
      return false;
    }
    const newUser = {
      firstName,
      lastName,
      email,
      phoneNumber: mobileNo,
      password,
    };
    try {
      // const response = await api.post(SIGNUP_URL, newUser);
      await api.post(SIGNUP_URL, newUser);
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setMobileNo('');
      setPassword('');
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('No server response');
      } else if (error.response?.status === 401) {
        setErrorMsg('All input fields are required');
      } else if (error.response?.status === 409) {
        setErrorMsg('User already exists');
      } else {
        setErrorMsg(error.response.data);
      }
      console.log(error.response);
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <>
      {success ? (
        <SignUpSuccess />
      ) : (
        <div className='body min-h-screen bg-light mx-auto sm:flex sm:justify-center sm:items-center'>
          <div className='bg-white rounded shadow-lg pb-20 sm:w-148'>
            <div className='py-8 px-6'>
              <Link to='/'>
                <img src={Logo} alt='' className='cursor-pointer' />
              </Link>
            </div>

            <div className='px-6 sm:px-16'>
              <h4 className='text-center mt-4 font-bold text-xl text-black'>
                Create Account
              </h4>

              <p className={errorMsg ? 'errorInstructions' : 'hide'}>
                {errorMsg}
              </p>

              <form onSubmit={handleSubmit}>
                <div className='sm:flex sm:justify-between sm:mt-12'>
                  <div className='mt-12 flex items-center bg-white w-full border border-lightgrey rounded overflow-hidden shadow sm:w-1/2 sm:mt-0 '>
                    <img src={Person} alt='' className='bg-light px-3 py-3.5' />
                    <input
                      type='text'
                      placeholder='Enter your first name'
                      value={firstName}
                      autoComplete='on'
                      required
                      onChange={(e) => dispatch(setFirstName(e.target.value))}
                      className='w-full px-3 placeholder:text-black focus: outline-0'
                    />
                  </div>

                  <div className='flex items-center bg-white w-full border border-lightgrey rounded overflow-hidden shadow mt-5 sm:w-1/2 sm:ml-4 sm:mt-0'>
                    <img src={Person} alt='' className='bg-light px-3 py-3.5' />
                    <input
                      type='text'
                      placeholder='Enter your last name'
                      value={lastName}
                      autoComplete='on'
                      required
                      onChange={(e) => dispatch(setLastName(e.target.value))}
                      className='w-full px-3 placeholder:text-black focus: outline-0'
                    />
                  </div>
                </div>
                <p
                  className={
                    firstName && !validFirstName ? 'instructions' : 'hide'
                  }
                >
                  First name must not be less than 3 characters
                </p>

                <p
                  className={
                    lastName && !validLastName ? 'instructions' : 'hide'
                  }
                >
                  Last name must not be less than 3 characters
                </p>

                <div className='flex items-center bg-white border border-lightgrey mt-5 rounded overflow-hidden shadow'>
                  <img src={Mail} alt='' className='bg-light px-3 py-3.5' />
                  <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    autoComplete='on'
                    required
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                    className='w-full px-3 placeholder:text-black focus: outline-0'
                  />
                </div>
                <p className={email && !validEmail ? 'instructions' : 'hide'}>
                  Type in a valid email
                </p>

                <div className=' flex items-center bg-white border border-lightgrey mt-5 rounded overflow-hidden shadow'>
                  <img src={Call} alt='' className='bg-light px-3 py-3.5' />
                  <input
                    type='text'
                    placeholder='Enter your phone number'
                    value={mobileNo}
                    autoComplete='on'
                    required
                    onChange={(e) => dispatch(setMobileNo(e.target.value))}
                    className='w-full px-3 placeholder:text-black focus: outline-0'
                  />
                </div>
                <p
                  className={
                    mobileNo && !validMobileNo ? 'instructions' : 'hide'
                  }
                >
                  Type in a valid mobile number
                </p>

                <div>
                  <ShowPassword
                    placeHolder='Enter Password'
                    password={password}
                    setPassword={setPassword}
                  />
                </div>
                <p
                  className={
                    password && !validPassword ? 'instructions' : 'hide'
                  }
                >
                  8 to 24 characters. Must include uppercase and lowercase
                  letters, a number and a special character ! @ # $ %.
                </p>

                <div>
                  <ShowPassword
                    placeHolder='Confirm Password'
                    password={confirmPassword}
                    setPassword={setConfirmPassword}
                  />
                </div>
                <p
                  className={
                    confirmPassword && !validConfirmPassword
                      ? 'instructions'
                      : 'hide'
                  }
                >
                  Must match the first password input field
                </p>

                <div className='flex items-center mt-4'>
                  <input
                    type='checkbox'
                    id='checkbox'
                    value=''
                    className='w-4 h-4 checked:accent-purple'
                  />
                  <label htmlFor='checkbox' className='ml-2'>
                    By signing up, I agree to the{' '}
                    <span className='text-purple cursor-pointer'>
                      Terms of Service and privacy policy
                    </span>
                  </label>
                </div>

                <button
                  type='submit'
                  className='w-full flex justify-center items-center bg-purple py-3 px-2 text-white rounded font-bold mt-4 shadow cursor-pointer'
                >
                  Sign Up
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
                  <p className='ml-2 font-semibold'>Sign up with Google</p>
                </button>

                <button
                  type='submit'
                  id='facebook'
                  className='w-full mt-4 flex justify-center items-center bg-blue py-2 px-2 rounded shadow sm:w-1/2 sm:mt-0 sm:ml-4'
                >
                  <img src={Facebook} alt='Facebook icon' />
                  <p className='ml-2 font-semibold text-white'>
                    Sign up with Facebook
                  </p>
                </button>
              </div>

              <div className='flex justify-center mt-5'>
                <p className='text-lightergrey mr-4'>
                  Already have an account?
                </p>
                <Link to='/login' className='text-purple font-semibold'>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
