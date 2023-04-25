import React from 'react';
import DashboardHeader from './pages/navigation/DashboardHeader';
import Sidebar from './pages/navigation/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='w-full'>
      <div>
        <DashboardHeader />
      </div>

      <div className='flex'>
        <div>
          <Sidebar />
        </div>

        <div className='flex'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
