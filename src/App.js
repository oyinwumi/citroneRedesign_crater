import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/landingPage/LandingPage';
import SignUp from './components/pages/Authentication/SignUp';
import LogIn from './components/pages/Authentication/LogIn';
import CoursePage from './components/pages/coursePage/Course';
import ForgotPassword from './components/pages/Authentication/ForgotPassword';
import Beginner from './components/pages/coursePage/beginner/Beginner';
import ModuleOne from './components/pages/courseModule/ModuleOne';
import Quiz from './components/pages/courseModule/quiz/Quiz';
import Assignment from './components/pages/assignment/Assignment';
import Sidebar from './components/pages/coursePage/Sidebar';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/beginner' element={<Beginner />} />
        <Route path='/moduleone' element={<ModuleOne />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/assignment' element={<Assignment />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sidebar' element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
