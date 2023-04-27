import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsHeader = () => {
  const [isAccount, setIsAccount] = useState(true);
  const [isSecurity, setIsSecurity] = useState(false);

  const handleToggle = (e) => {
    if (e.currentTarget.id === 'security') {
      setIsSecurity(true);
      setIsAccount(false);
    } else if (e.currentTarget.id === 'account') {
      setIsAccount(true);
      setIsSecurity(false);
    }
  };

  return (
    <div className='flex w-full '>
      <div
        className='w-1/2 flex flex-col text-center'
        id='account'
        onClick={(e) => handleToggle(e)}
      >
        <Link to='account'>
          <h4 className='text-2xl font-bold'>Your account</h4>
          <div
            className={`h-4 border border-pink rounded-full ${
              isAccount ? 'bg-purple' : 'bg-light'
            }`}
          ></div>
        </Link>
      </div>

      <div
        className='w-1/2 flex flex-col text-center'
        id='security'
        onClick={(e) => handleToggle(e)}
      >
        <Link to='security&safety'>
          <h4 className='text-2xl font-bold'>Security & Safety</h4>
          <div
            className={`h-4  border border-pink rounded-full ${
              isSecurity ? 'bg-purple' : 'bg-light'
            }`}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default SettingsHeader;
