import React, { useState } from 'react';
import Lock from '../assets/lock-icon.svg';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/fa/eye';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';

//This component takes care of revealing or hiding the password input
const ShowPassword = ({ placeHolder, password, setPassword, isSettings }) => {
  const [passwordType, setPasswordType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(eye);

  // Handle display/hiding of the password
  const handleToggle = (e) => {
    if (passwordType === 'password') {
      setPasswordType('text');
      setEyeIcon(eyeSlash);
    } else if (passwordType === 'text') {
      setPasswordType('password');
      setEyeIcon(eye);
    }
  };

  return (
    <>
      {isSettings ? (
        <div className='flex border overflow-hidden shadow bg-light rounded-lg'>
          <input
            type={passwordType}
            placeholder={placeHolder}
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 focus: outline-0 bg-light text-2xl'
          />
          <Icon
            icon={eyeIcon}
            onClick={(e) => handleToggle(e)}
            className='cursor-pointer mx-4 my-3'
          />
        </div>
      ) : (
        <div className='flex border overflow-hidden shadow items-center bg-white border-lightgrey rounded mt-5'>
          <img src={Lock} alt='' className='bg-light px-3 py-3.5' />
          <input
            type={passwordType}
            placeholder={placeHolder}
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 focus: outline-0 placeholder:text-black '
          />
          <Icon
            icon={eyeIcon}
            onClick={(e) => handleToggle(e)}
            className='cursor-pointer mx-4'
          />
        </div>
      )}
    </>
  );
};

export default ShowPassword;
