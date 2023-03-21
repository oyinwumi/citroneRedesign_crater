import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/landingPage/LandingPage';
import SignUp from './components/pages/Authentication/SignUp';
import LogIn from './components/pages/Authentication/LogIn';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
          <Route exact path='/signup' element={<SignUp />}></Route>
          <Route exact path='/login' element={<LogIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
