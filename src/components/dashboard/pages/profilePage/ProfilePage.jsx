import React from 'react';
import CurrentProfileView from './CurrentProfileView';
import ProfileList from './ProfileList';

const ProfilePage = () => {
  return (
    <div>
      <div>
        <CurrentProfileView />
      </div>
      <div>
        <ProfileList />
      </div>
    </div>
  );
};

export default ProfilePage;
