import { Link } from 'react-router-dom';
// import DashboardHeader from '../../DashboardHeader';
// import Sidebar from '../../Sidebar';
import CourseImage from '../../../../assets/course.png';
import Beginner from '../../../../assets/beginner.png';
import Intermidiate from '../../../../assets/intermidiate.png';
import Simage from '../../../../assets/s-image.svg';

const Course = () => {
  return (
    <div className='  w-full'>
      {/* <DashboardHeader /> */}
      <div className='flex p-3'>
        {/* <Sidebar /> */}

        <div className='flex flex-col w-full p-6'>
          <div>
            <header className='text-[24px] my-4'>Courses</header>
            <div className='flex lg:flex-row md:flex-col flex-col w-full'>
              <div className='lg:w-1/3 md:w-full w-full pr-6]'>
                <img
                  src={CourseImage}
                  alt={CourseImage}
                  className=' lg:w-[100%] md:w-[70%] w-[80%]'
                />
                <div className='bg-pink p-4 rounded-b-lg  lg:w-[100%] md:w-[70%] w-[80%]'>
                  <div className='flex  items-center '>
                    <img src={Simage} alt={Simage} />
                    <p className='ml-3'>STUTERN</p>
                  </div>
                  <p className='mt-4'>UI/UX DESIGN</p>
                </div>
              </div>
              <div className=' lg:ml-[32px] md:ml-0 ml-0 lg:mt-0 md:mt-8 mt-8 lg:w-2/3 md:w-full w-full'>
                <header className='text-[20px] '>About this course</header>
                <ul className='list-none xl:w-[604px]'>
                  <li className=' xl:mb-8 lg:mb-2 md:mb-4 mb-4 '>
                    The focus of Stutern’s UI/UX course is to expose the learner
                    to User Interface (UI) and User Experience (UX) design.
                  </li>
                  <li className='xl:mb-8 lg:mb-2 md:mb-4 mb-4'>
                    The focus of Stutern’s UI/UX course is to expose the learner
                    to User Interface (UI) and User Experience (UX) design.
                  </li>
                  <li className='xl:mb-8 lg:mb-2 md:mb-4 mb-4'>
                    The focus of Stutern’s UI/UX course is to expose the learner
                    to User Interface (UI) and User Experience (UX) design.
                  </li>
                  <li className='xl:mb-4 lg:mb-2 md:mb-4 mb-4'>
                    The focus of Stutern’s UI/UX course is to expose the learner
                    to User Interface (UI) and User Experience (UX) design.
                  </li>
                </ul>
                <button className='bg-purple text-white xl:mt-28 lg:mt-6 md:mt-6 mt-6 px-20 py-2  items-center rounded'>
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className='w-full '>
            <header className='text-[24px] lg:mt-8 md:mt-12 mt-12 ml-6'>
              Levels
            </header>
            <div className='flex lg:flex-row md:flex-col flex-col '>
              <Link to='/courses/beginner' className='lg:w-1/2'>
                <img src={Beginner} alt={Beginner} className=' w-full' />
                <div className='ml-6'>
                  <p className='mt-2'>Beginner Level</p>
                  <p className='mt-4 '>1.3 UI/UX Design</p>
                </div>
              </Link>
              <Link to='/courses/intermediate' className='lg:w-1/2'>
                <img src={Intermidiate} alt={Intermidiate} className='w-full' />
                <div className='ml-6'>
                  <p className='mt-2'>Intermediate Level</p>
                  <p className='mt-4'>1.3 UI/UX Design</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;