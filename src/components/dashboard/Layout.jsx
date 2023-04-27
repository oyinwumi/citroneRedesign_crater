import React from 'react';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='w-full relative'>
      <div>
        <DashboardHeader />
      </div>

      <div className='w-full flex'>
        <div>
          <Sidebar />
        </div>

        <div className='grow'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
