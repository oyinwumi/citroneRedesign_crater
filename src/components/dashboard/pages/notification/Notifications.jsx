import React from 'react';
import { Outlet } from 'react-router';
import NotificationsHeader from './NotificationsHeader';

const Notifications = () => {
  return (
    <div className='h-full mt-6 ml-6 mr-8 mb-40 overflow-hidden'>
      <div>
        <NotificationsHeader />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Notifications;
