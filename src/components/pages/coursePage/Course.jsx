import { Link } from "react-router-dom";
import CoursePageNav from "./CoursePageNav";
import Sidebar from "./Sidebar"
import CourseImage from '../../../assets/course.png';
import Beginner from '../../../assets/beginner.png';
import Intermidiate from '../../../assets/intermidiate.png';
import Simage from '../../../assets/s-image.svg'

 const Course = () => {
  return (
    <div className='lg:p-8'>
       <CoursePageNav/>
       <div className="flex">
       <div className="lg:w-1/6">
       <Sidebar/>
       </div>

    <div className="flex flex-col  lg:w-5/6 p-5" >
    <div>
        <header className="text-[24px] my-4">Courses</header>
        <div className="flex lg:flex-row md:flex-col flex-col">
       <div className="">
       <img src={CourseImage} alt={CourseImage}  className="w-auto "/>
       <div className="bg-pink p-4 rounded-b-lg w-[inherit]">  
          <div className="flex  items-center"> 
        <img src={Simage} alt={Simage} />
        <p className="ml-3">STUTERN</p>
      </div>
      <p className="mt-4">UI/UX DESIGN</p>
      </div>
       </div>
        <div className=" lg:ml-[32px] md:ml-0 ml-0 lg:mt-0 md:mt-8 mt-8">
          <header className="text-[20px] mb-4">About this course</header>
          <ul className="list-none font-bold">
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          </ul>
          <button className="bg-purple text-white lg:mt-24 md:mt-10 mt-10 px-20 py-2  items-center rounded">Learn more</button>
        </div>
        </div>
       </div>
       <div className="w-full ">
        <header className="text-[24px] lg:mt-4 md:mt-12 mt-12">Levels</header>
       <div className="flex lg:flex-row md:flex-col flex-col ">
      <Link to="/beginner" className="w-1/2">
        <img src={Beginner} alt={Beginner} className=" w-full"/>
        <div className="ml-4">
        <p className="mt-2">Beginner Level</p>
        <p className="mt-4 ">1.3 UI/UX Design</p>
        </div>
      </Link>
      <Link to="/intermidiate" className="w-1/2">
        <img src={Intermidiate} alt={Intermidiate} className="w-full"/>
         <div className="ml-4">
         <p className="mt-2">Intermediate Level</p>
        <p className="mt-4">1.3 UI/UX Design</p>
         </div>
      </Link>
       </div>
       </div>
    </div>
       </div>
    </div>
  )
}

export default Course

