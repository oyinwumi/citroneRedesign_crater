import React from 'react';
import CurrentProfileView from './CurrentProfileView';
import ProfileList from './ProfileList';

//This the Profile Page view. It is one of the pages of the dashboard.
const ProfilePage = () => {
  return (
    <div className='flex'>
      <div className='bg-lightpink grow pr-8 pt-6 pb-32'>
        <CurrentProfileView />
      </div>
      <div className='bg-verylightgrey w-[320px] my-4 mr-8'>
        <ProfileList />
      </div>
    </div>
  );
};

export default ProfilePage;
