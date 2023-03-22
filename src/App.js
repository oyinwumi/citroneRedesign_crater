import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './components/pages/landingPage/LandingPage';
// import SignUp from './components/pages/Authentication/SignUp';
// import LogIn from './components/pages/Authentication/LogIn';
// import ForgotPassword from './components/pages/Authentication/ForgotPassword';
import ResetPassword from './components/pages/Authentication/ResetPassword';

function App() {
  return (
    <div>
      <ResetPassword />
      {/* <Router>
        <Routes> */}
      {/* <Route exact path='/' element={<LandingPage />}></Route> */}
      {/* <Route exact path='/' element={<SignUp />}></Route>
          <Route exact path='/login' element={<LogIn />}></Route>
          <Route
            exact
            path='/forgot-password'
            element={<ForgotPassword />}
          ></Route>
          <Route
            exact
            path='/reset-password'
            element={<ResetPassword />}
          ></Route> */}
      {/* </Routes>
      </Router> */}
    </div>
  );
}

export default App;
