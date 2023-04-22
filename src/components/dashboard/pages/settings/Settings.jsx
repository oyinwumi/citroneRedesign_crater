import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SettingsHeader from './SettingsHeader';

const Settings = () => {
  return (
    <div className='p-5'>
      <div>
        <SettingsHeader />
      </div>

      <div className='mt-20 pl-[136px]'></div>
      <Outlet />
    </div>
  );
};

export default Settings;
