import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignUp from './components/authentication/SignUp';
import LogIn from './components/authentication/LogIn';
import ForgotPassword from './components/authentication/ForgotPassword';
import ResetPassword from './components/authentication/ResetPassword';
import Layout from './components/dashboard/Layout';
import Dashboard from './components/dashboard/pages/Dashboard';
import CoursePage from './components/dashboard/pages/coursePage/Course';
import CourseCategory from './components/dashboard/pages/coursePage/courseCategory/CourseCategory';
import Assignment from './components/dashboard/pages/assignment/Assignment';
import AssignmentQest from './components/dashboard/pages/assignment/AssignmentQest';
import EditAssignment from './components/dashboard/pages/assignment/EditAssignment';
import ModuleOne from './components/dashboard/pages/courseModule/ModuleOne';
import Quiz from './components/dashboard/pages/quiz/Quiz.jsx';
import QuizModalOne from './components/dashboard/pages/quiz/QuizModalOne';
import Chat from './components/dashboard/pages/chat/Chat';
import Scoreboard from './components/dashboard/pages/scoreboard/Scoreboard';
import Grade from './components/dashboard/pages/assignment/Grade';
import LiveSession from './components/dashboard/pages/liveSession/LiveSession';
import LiveSessionUserPage from './components/dashboard/pages/liveSession/LiveSessionUserPage';
import HelpDesk from './components/dashboard/pages/helpdesk/HelpDesk';
import Faq from './components/dashboard/pages/helpdesk/Faq';
import ProfilePage from './components/dashboard/pages/profilePage/ProfilePage';
import Settings from './components/dashboard/pages/settings/Settings';
import AccountSettings from './components/dashboard/pages/settings/AccountSettings';
import SecuritySettings from './components/dashboard/pages/settings/SecuritySettings';
import { useSelector } from 'react-redux';
import LogoutModal from './components/dashboard/pages/logoutPage/LogoutModal';
import Notifications from './components/dashboard/pages/notification/Notifications';
import AllNotifications from './components/dashboard/pages/notification/AllNotifications';
import UnreadNotifications from './components/dashboard/pages/notification/UnreadNotifications';

function App() {
  const { isOpenFour } = useSelector((store) => store.modal);
  return (
    <div className='w-full overflow-hidden'>
      <div>{isOpenFour && <LogoutModal />}</div>

      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />

        <Route path='/user' element={<Layout />}>
          <Route index element={<Dashboard />}></Route>
          <Route exact path='dashboard' element={<Dashboard />} />
          <Route path='course' element={<CoursePage />} />
          <Route path='courses/:course_category' element={<CourseCategory />} />
          <Route path='moduleone' element={<ModuleOne />} />
          <Route path='quiz' element={<Quiz />} />
          <Route path='quizmodalone' element={<QuizModalOne />} />
          <Route path='grade' element={<Grade />} />
          <Route path='assignment' element={<Assignment />} />
          <Route path='assignmentqest' element={<AssignmentQest />} />
          <Route path='editassignment' element={<EditAssignment />} />
          <Route path='chat' element={<Chat />} />
          <Route path='scoreboard' element={<Scoreboard />} />
          <Route exact path='sessions' element={<LiveSession />} />
          <Route
            exact
            path='live-session-user-page'
            element={<LiveSessionUserPage />}
          />
          <Route path='helpdesk' element={<HelpDesk />} />
          <Route exact path='profile' element={<ProfilePage />} />

          <Route exact path='settings' element={<Settings />}>
            <Route index element={<AccountSettings />}></Route>
            <Route path='account' element={<AccountSettings />} />
            <Route path='security&safety' element={<SecuritySettings />} />
          </Route>

          <Route exact path='notifications' element={<Notifications />}>
            <Route index element={<UnreadNotifications />}></Route>
            <Route path='unread' element={<UnreadNotifications />} />
            <Route path='all' element={<AllNotifications />} />
          </Route>

          <Route path='faq' element={<Faq />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
