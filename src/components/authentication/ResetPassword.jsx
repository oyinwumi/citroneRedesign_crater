import React, { useState, useEffect } from 'react';
import Logo from '../../assets/logo.svg';
import ShowPassword from '../ShowPassword';
import { Link } from 'react-router-dom';
import api from '../../api/axios';

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RESETPASSWORD_URL = '/api/citrone/resetPassword/:token';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [validNewPassword, setValidNewPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  //Validate password and confirmPassword
  useEffect(() => {
    setValidNewPassword(PASSWORD_REGEX.test(newPassword));
    setValidConfirmPassword(newPassword === confirmPassword);
  }, [newPassword, confirmPassword]);

  // Clear out the error message once the user makes changes to the password
  useEffect(() => {
    setErrorMsg('');
  }, [newPassword, confirmPassword]);

  //Check the server to change the password
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword && !validConfirmPassword) {
      setErrorMsg('Password Mismatch');
    }
    try {
      await api.post(RESETPASSWORD_URL, { newPassword });
      // const response = await api.post(RESETPASSWORD_URL, { password });
      // console.log(JSON.stringify(response?.data));
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      if (!error?.response) {
        setErrorMsg('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMsg('All fields are required');
      } else {
        setErrorMsg(`Error: ${error.message}`);
      }
      console.log('error.response');
      console.log(`Error: ${error.message}`);
    }
  };

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

          <p className={errorMsg ? 'errorInstructions' : 'hide'}>{errorMsg}</p>

          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <ShowPassword
                placeHolder='Enter New Password'
                password={newPassword}
                setPassword={setNewPassword}
              />
            </div>
            <p
              className={
                newPassword && !validNewPassword ? 'instructions' : 'hide'
              }
            >
              8 to 24 characters. Must include uppercase and lowercase letters,
              a number and a special character ! @ # $ %.
            </p>

            <div className=''>
              <ShowPassword
                placeHolder='Confirm New Password'
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

            <button
              type='submit'
              disabled={
                !validNewPassword || !validConfirmPassword ? true : false
              }
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
