import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import Header from './Header';
// import Sidebar from '../pages/coursePage/Sidebar';
// import DashboardPage from './pages/dashboardPage/DashboardPage';
import ProfilePage from './pages/profilePage/ProfilePage';

const DashboardLandingPage = () => {
  return (
    <div className='body'>
      <div className='w-screen'>
        <div className='h-[104px] w-screen flex justify-center items-center border'>
          <Header />
        </div>

        <div className='bg-green h-screen flex'>
          <div className='bg-black w-[245px] border'>{/* <Sidebar /> */}</div>
          <div className='w-screen'>
            <ProfilePage />
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route exact path='/profile-page' element={<ProfilePage />} />
      </Routes> */}
    </div>
  );
};

export default DashboardLandingPage;
