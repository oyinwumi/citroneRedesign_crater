import React from 'react';
import TrackMember from './TrackMember';
import Tutor from './Tutor';
import { profilesData } from './ProfileData';
import { v4 as uuidv4 } from 'uuid';

// This returns the list of all the profiles of Tutors and Track members
//It is also a component of the ProfilePage.jsx
const ProfileList = () => {
  const students = profilesData[0].map((data) => {
    return <TrackMember key={uuidv4()} {...data} />;
  });

  const tutors = profilesData[1].map((data) => {
    return <Tutor key={uuidv4()} {...data} />;
  });

  return (
    <div className='h-full flex flex-col justify-between'>
      <div className=' mb-4 h-3/5 relative'>
        <h1 className='border-b text-xl font-bold py-5 text-center'>
          Track Members
        </h1>
        <div className=' mt-4 h-[420px] overflow-auto'>{students}</div>

        {/* <p className='absolute bottom-0 right-4 text-purple'>see more</p> */}
      </div>

      <div className=' h-2/5 mb-4'>
        <h1 className='border-y text-xl font-bold py-5 text-center'>Tutors</h1>
        <div className=' mt-4 h-60 '>{tutors}</div>
      </div>
    </div>
  );
};

export default ProfileList;
