import React from 'react';
// import DashboardHeader from '../navigation/DashboardHeader';
// import Sidebar from '../navigation/Sidebar';
import CurrentProfileView from './CurrentProfileView';
import ProfileList from './ProfileList';

//This the Profile Page view. It is one of the pages of the dashboard.
const ProfilePage = () => {
  return (
    <div className='flex'>
      <div className=''>
        <CurrentProfileView />
      </div>

      <div className='h-full bg-lightpink w-[360px] rounded-lg my-4 mr-8'>
        <ProfileList />
      </div>
    </div>

    // <div>
    //   <div className='w-full'>
    //     <DashboardHeader />
    //   </div>

    //   <div className='flex'>
    //     <div className=''>
    //       <Sidebar />
    //     </div>

    //     <div className='flex'>
    //       <div className=''>
    //         <CurrentProfileView />
    //       </div>

    //       <div className='h-full bg-lightpink w-[360px] rounded-lg my-4 mr-8'>
    //         <ProfileList />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProfilePage;
