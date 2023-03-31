import React from 'react';
import TrackMember from './TrackMember';
import Tutor from './Tutor';

// This returns the list of all the profiles of Tutors and Track members
//It is also a component of the ProfilePage.jsx
const ProfileList = () => {
  return (
    <div className='h-full flex flex-col justify-between'>
      <div className=' mb-4 h-3/5 relative'>
        <h1 className='border-b text-xl font-bold py-5 text-center'>
          Track Members
        </h1>
        <div className=' mt-4'>
          <TrackMember />
        </div>

        <p className='absolute bottom-0 right-4 text-purple'>see more</p>
      </div>

      <div className=' h-2/5 mb-4'>
        <h1 className='border-y text-xl font-bold py-5 text-center'>Tutors</h1>
        <div className=' mt-4'>
          <Tutor />
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
