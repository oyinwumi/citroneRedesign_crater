import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/pages/landingPage/LandingPage";


function App() {
  return (
    <div className="font-font">
     <Router>
       <Routes>
         <Route path='/' element={ <LandingPage/>}/>
       </Routes>
     </Router>
   
    </div>
  );
}

export default App;
