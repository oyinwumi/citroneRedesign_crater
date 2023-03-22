import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage";
import CoursePage from './components/pages/coursePage/Course'


function App() {
  return (
    <div className="font-font">
     <Router>
       <Routes>
         <Route path='/' element={ <LandingPage/>}/>
         <Route path='/course' element={ <CoursePage/>}/>
       </Routes>
     </Router>
   
    </div>
  );
}

export default App;
