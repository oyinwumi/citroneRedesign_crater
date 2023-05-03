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
import Quiz from './components/dashboard/pages/quiz/Quiz';
import QuizModalOne from './components/dashboard/pages/quiz/QuizModalOne';
import Chat from './components/dashboard/pages/chat/Chat';
import Scoreboard from './components/dashboard/pages/scoreboard/Scoreboard';
import Grade from './components/dashboard/pages/assignment/Grade';
import LiveSession from './components/dashboard/pages/liveSession/LiveSession';
import LiveSessionUserPage from './components/dashboard/pages/liveSession/LiveSessionUserPage';
import HelpDesk from './components/dashboard/pages/helpdesk/HelpDesk';
import ProfilePage from './components/dashboard/pages/profilePage/ProfilePage';
import Settings from './components/dashboard/pages/settings/Settings';
import AccountSettings from './components/dashboard/pages/settings/AccountSettings';
import SecuritySettings from './components/dashboard/pages/settings/SecuritySettings';
import { useSelector } from 'react-redux';
import LogoutModal from './components/dashboard/pages/logoutPage/LogoutModal';
import Notifications from './components/dashboard/pages/notification/Notifications';
import AllNotifications from './components/dashboard/pages/notification/AllNotifications';
import UnreadNotifications from './components/dashboard/pages/notification/UnreadNotifications';
import Faq from './components/dashboard/pages/helpdesk/Faq';
import HelpdeskModal from './components/dashboard/pages/helpdesk/HelpdeskModal';

function App() {
  const { isOpenFour } = useSelector((store) => store.modal);
  
  return (
    <div className='w-full overflow-x-hidden'>
      <div>{isOpenFour && <LogoutModal />}</div>

      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/login' element={<LogIn />} />
        <Route exact path='/forgot-password' element={<ForgotPassword />} />
        <Route exact path='/reset-password' element={<ResetPassword />} />

        <Route path='/' element={<Layout />}>
          <Route exact path='dashboard' element={<Dashboard />} />
          <Route exact path='course' element={<CoursePage />} />
          <Route
            exact
            path='courses/:course_category'
            element={<CourseCategory />}
          />
          <Route exact path='moduleone' element={<ModuleOne />} />
          <Route exact path='quiz' element={<Quiz />} />
          <Route exact path='quizmodalone' element={<QuizModalOne />} />
          <Route exact path='grade' element={<Grade />} />
          <Route exact path='assignment' element={<Assignment />} />
          <Route exact path='assignmentqest' element={<AssignmentQest />} />
          <Route exact path='editassignment' element={<EditAssignment />} />
          <Route exact path='chat' element={<Chat />} />
          <Route exact path='scoreboard' element={<Scoreboard />} />
          <Route exact path='sessions' element={<LiveSession />} />
          <Route path='faq' element={<Faq/>} />
          <Route path='helpmodal' element={<HelpdeskModal/>} />
          <Route
            exact
            path='live-session-user-page'
            element={<LiveSessionUserPage />}
          />
          <Route exact path='helpdesk' element={<HelpDesk />} />
          <Route exact path='profile' element={<ProfilePage />} />

          <Route exact path='settings' element={<Settings />}>
            <Route index element={<AccountSettings />}></Route>
            <Route exact path='account' element={<AccountSettings />} />
            <Route
              exact
              path='security&safety'
              element={<SecuritySettings />}
            />
          </Route>

          <Route exact path='notifications' element={<Notifications />}>
            <Route index element={<UnreadNotifications />}></Route>
            <Route exact path='unread' element={<UnreadNotifications />} />
            <Route exact path='all' element={<AllNotifications />} />
          </Route>

          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
