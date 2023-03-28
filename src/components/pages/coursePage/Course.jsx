import React from "react"
import CoursePageNav from "./CoursePageNav";
import Sidebar from "./Sidebar"
import CourseImage from '../../../assets/course.png';
import Beginner from '../../../assets/beginner.png';
import Intermidiate from '../../../assets/intermidiate.png';
import Simage from '../../../assets/s-image.svg'

 const Course = () => {
  return (
    <div className='lg:p-8  '>
       <CoursePageNav/>
       <div className="flex">
       <div className="lg:w-1/6">
       <Sidebar/>
       </div>

    <div className="flex flex-col lg:w-5/6">
    <div>
        <header className="text-24px my-4">Courses</header>
        <div className="flex">
       <div>
       <img src={CourseImage} alt={CourseImage} />
       <div className="bg-pink p-4 rounded-br-lg">  
          <div className="flex mb- items-center"> 
        <img src={Simage} alt={Simage} />
        <p className="ml-3">STUTERN</p>
      </div>
      <p className="mt-4">UI/UX DESIGN</p></div>
       </div>
        <div className="ml-[32px]">
          <header className="text-[20px] mb-6">About this course</header>
          <ul className="list-none font-bold">
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          <li className="mb-6 ">The focus of Stutern’s UI/UX course is to expose the learner to User Interface (UI) and User Experience (UX) design.</li>
          </ul>
          <button className="bg-purple text-white mt-24 px-20 py-2  items-center rounded">Learn more</button>
        </div>
        </div>
       </div>
       <div>
        <header className="text-24px my-4">Levels</header>
       <div className="flex w-full">
      <div>
        <img src={Beginner} alt={Beginner} className=" w-"/>
        <p className="mt-2">Beginner Level</p>
        <p className="mt-4 ">1.3 UI/UX Design</p>
      </div>
      <div>
        <img src={Intermidiate} alt={Intermidiate}/>
        <p className="mt-2">Intermediate Level</p>
        <p className="mt-4">1.3 UI/UX Design</p>
      </div>
       </div>
       </div>
    </div>
       </div>
    </div>
  )
}

export default Course

