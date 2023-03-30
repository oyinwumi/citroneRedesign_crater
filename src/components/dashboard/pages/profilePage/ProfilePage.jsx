import React from 'react';
import CurrentProfileView from './CurrentProfileView';
import ProfileList from './ProfileList';

const ProfilePage = () => {
  return (
    <div className=' flex justify-between '>
      <div className='bg-light border'>
        <CurrentProfileView />
      </div>
      <div className='bg-blue w-[320px] border'>
        <ProfileList />
      </div>
    </div>
  );
};

export default ProfilePage;
