import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/pages/landingPage/LandingPage';
import SignUp from './components/pages/Authentication/SignUp';
import LogIn from './components/pages/Authentication/LogIn';
import CoursePage from './components/pages/coursePage/Course';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route path='/course' element={<CoursePage />} />
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<LogIn />}></Route>
          <Route
            exact
            path='/forgot-password'
            element={<ForgotPassword />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
