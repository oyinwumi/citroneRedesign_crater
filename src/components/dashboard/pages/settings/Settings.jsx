import React from 'react';
import { Outlet } from 'react-router-dom';
import SettingsHeader from './SettingsHeader';

const Settings = () => {
  return (
    <div className='p-5'>
      <div>
        <SettingsHeader />
      </div>

      <div className='w-full mt-20 '></div>
      <Outlet />
    </div>
  );
};

export default Settings;
