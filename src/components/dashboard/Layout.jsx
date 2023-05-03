import React from 'react';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import {useSelector } from 'react-redux';
// import { closeModal } from '../../apps/modal/modalSlice';
import AssignmentModal from  '../../components/dashboard/pages/assignment/AssignmentModal'
import AssignmentModalTwo from '../../components/dashboard/pages/assignment/AssignmentModalTwo'
import QuizModalOne from './pages/quiz/QuizModalOne';
import QuizModalTwo from './pages/quiz/QuizModalTwo';
import QuizModalThree from './pages/quiz/QuizModalThree';



const Layout = () => {

  const { isOpen , isOpenTwo, isOpenThree, isOpenFive , isOpenSix } = useSelector((store) => store.modal );

  return (
    <div className='w-full relative'>
       {isOpen && <AssignmentModal/>}
       {isOpenTwo && <AssignmentModalTwo />}
       
      <div>
        <div>
        {isOpenThree && <QuizModalOne />}
        {isOpenFive && <QuizModalTwo/>}
        {isOpenSix && <QuizModalThree/>}
        </div>
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
