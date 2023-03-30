import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../../components/pages/coursePage/Sidebar';
import Dashboard from '../pages/Dashboard';
import UserProfile from '../pages/UserProfile';

const DashboardLandingPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>
        <Sidebar />
      </div>

      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/user-profile' element={<UserProfile />} />
      </Routes>
    </div>
  );
};

export default DashboardLandingPage;
