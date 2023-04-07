import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SettingsHeader from './SettingsHeader';
// import AccountSettings from './AccountSettings';
import SecuritySettings from './SecuritySettings';

const Settings = () => {
  return (
    <div className='p-5'>
      <div>
        <SettingsHeader />
      </div>

      <div className='mt-20 pl-[136px]'>
        <Routes>
          {/* <Route exact path='/' element={<AccountSettings />} /> */}
          <Route exact path='/' element={<SecuritySettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Settings;
