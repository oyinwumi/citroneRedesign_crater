import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Sidebar from '../pages/coursePage/Sidebar';
// import DashboardPage from './pages/dashboardPage/DashboardPage';
// import ProfilePage from './pages/profilePage/ProfilePage';
import EditProfile from './pages/profilePage/EditProfile';

const DashboardLandingPage = () => {
  return (
    <div className='body'>
      {/* <div className='h-[104px] text-center '>
        <Header />
      </div>

      <div className='bg-lightpink h-full flex'>
        <div className='bg-purple w-[245px] border'><Sidebar /></div> */}

      {/* <div className='grow'> */}
      <Routes>
        {/* <Route exact path='/' element={<DashboardPage />} /> */}
        {/* <Route exact path='/' element={<ProfilePage />} /> */}
        <Route exact path='/' element={<EditProfile />} />
      </Routes>
      {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default DashboardLandingPage;
