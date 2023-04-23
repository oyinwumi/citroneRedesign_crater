import React from 'react';
// import DashboardLandingPage from './components/dashboard/DashboardLandingPage';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/landingPage/LandingPage';
import SignUp from './components/pages/authentication/SignUp';
import LogIn from './components/pages/authentication/LogIn';
// import Dashboard from './components/dashboard/DashboardLandingPage';
import Dashboard from './components/dashboard/Dashboard';
import CoursePage from './components/pages/coursePage/Course';
import ForgotPassword from './components/pages/authentication/ForgotPassword';
import CourseCategory from './components/pages/coursePage/courseCategory/CourseCategory';
// import ModuleOne from './components/pages/courseModule/ModuleOne';
// import Quiz from './components/pages/courseModule/quiz/Quiz'
import Assignment from './components/pages/assignment/Assignment';
import Sidebar from './components/dashboard/pages/navigation/Sidebar';
import AssignmentQest from './components/pages/assignment/AssignmentQest';
import Scoreboard from './components/pages/scoreboard/Scoreboard';
import { QuizModalOne } from './components/pages/courseModule/quiz/QuizModalOne';
import EditAssignment from './components/pages/assignment/EditAssignment';
import Grade from './components/pages/assignment/Grade';
import ProfilePage from './components/dashboard/pages/profilePage/ProfilePage';
import EditProfile from './components/dashboard/pages/profilePage/EditProfile';
import Settings from './components/dashboard/pages/settings/Settings';
import LiveSession from './components/pages/liveSession/LiveSession';
import LiveSessionUserPage from './components/pages/liveSession/LiveSessionUserPage';



function App() {
  return (
    // <div>
    //   <DashboardLandingPage />
    // </div>
    <div className='w-full overflow-x-hidden'>
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route path='/course' element={<CoursePage />} />
        <Route path='/courses/:course_category' element={<CourseCategory />} />
        {/* <Route path='/moduleone' element={<ModuleOne />} />
         <Route path='/quiz' element={<Quiz />} />  */}
        <Route path='/assignment' element={<Assignment />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/assignmentqest' element={<AssignmentQest />} />
        <Route path='/scoreboard' element={<Scoreboard />} />
        <Route path='/quizmodalone' element={<QuizModalOne />} />
        <Route path='/editassignment' element={<EditAssignment />} />
        <Route path='/grade' element={<Grade />} />
        {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        <Route exact path='/profile' element={<ProfilePage />} />
          <Route exact path='/editProfile' element={<EditProfile />} />
            <Route exact path='/settings' element={<Settings />} />
            <Route exact path='/sessions' element={<LiveSession />} />
            <Route exact path='/live-session-user-page' element={<LiveSessionUserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
