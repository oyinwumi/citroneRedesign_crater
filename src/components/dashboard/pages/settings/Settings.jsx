import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import SettingsHeader from './SettingsHeader';
import AccountSettings from './AccountSettings';
import SecuritySettings from './SecuritySettings';

const Settings = () => {
  const [accountSettings, setAccountSettings] = useState('false');
  const [securitySettings, setSecuritySettings] = useState('false');

  // const handleClick = (e) => {
  //   if (id === account )
  // }

  return (
    <div className='p-5'>
      <div>
        <SettingsHeader
          setAccountSettings={setAccountSettings}
          setSecuritySettings={setSecuritySettings}
        />
      </div>

      <div className='mt-20 pl-[136px]'>
        {securitySettings ? <SecuritySettings /> : <AccountSettings />}
      </div>
    </div>
  );
};

export default Settings;
