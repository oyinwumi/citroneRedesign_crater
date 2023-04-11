import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/logo.svg';
import Lock from '../../../assets/lock-icon.svg';
import Eye from '../../../assets/eye-icon.svg';
import Check from '../../../assets/shield-tick.svg';
import { Link } from 'react-router-dom';

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  //CSS constants
  const instructions = 'text-red relative ';
  const hide = 'absolute left-[-9999px]';

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidConfirmPassword(password === confirmPassword);
  }, [password, confirmPassword]);

  return (
    <div className='body bg-light mx-auto sm:h-screen sm:flex sm:justify-center sm:items-center'>
      <div className='bg-white rounded shadow-lg pb-20 sm:w-148 '>
        <div className='py-8 px-6'>
          <Link to='/'>
            <img src={Logo} alt='' className='cursor-pointer' />
          </Link>
        </div>

        <div className='px-6 sm:px-16'>
          <h1 className='text-center mt-12 text-black text-xl font-bold'>
            Reset Password
          </h1>
          <p className='text-center mt-4 px-4 text-black'>
            Your password should be at least 9 characters of lower case and
            upper case.
          </p>

          <form action=''>
            <div className='bg-white flex items-center border border-lightgrey mt-5 rounded overflow-hidden shadow'>
              <img src={Lock} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='password'
                id='new-password'
                name='new-password'
                placeholder='Enter new password'
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-3 placeholder:text-black focus: outline-0'
              />
              <img src={Eye} alt='' className=' eye mx-4 cursor-pointer' />
            </div>
            <p className={password && !validPassword ? instructions : hide}>
              8 to 24 characters. Must include uppercase and lowercase letters,
              a number and a special character ! @ # $ %.
            </p>

            <div className='bg-white flex items-center mt-8 border border-lightgrey rounded overflow-hidden shadow'>
              <img src={Check} alt='' className='bg-light px-3 py-3.5' />
              <input
                type='password'
                id='re-password'
                name='re-password'
                placeholder='Confirm new password'
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='w-full px-3 placeholder:text-black focus: outline-0'
              />
            </div>
            <p
              className={
                confirmPassword && !validConfirmPassword ? instructions : hide
              }
            >
              Must match the first password input field
            </p>

            <button
              type='submit'
              disabled={!validPassword || !validConfirmPassword ? true : false}
              className='bg-purple flex justify-center items-center w-full mt-8 py-3 px-2 font-bold text-white rounded shadow'
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
