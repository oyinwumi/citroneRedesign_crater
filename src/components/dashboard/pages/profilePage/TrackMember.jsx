import React from 'react';
import user1 from '../../../../assets/user1.svg';

// This is a Track Member component of the ProfileList.jsx
const TrackMember = () => {
  return (
    <div className='flex justify-around items-center'>
      <div className='flex items-center'>
        <img src={user1} alt='' />
        <div className='flex flex-col ml-4'>
          <p className='text-base text-[black]'>Tolulope Aina</p>
          <p className='text-xs font-light'>@toluene</p>
        </div>
      </div>

      <button className='border border-purple rounded py-1 px-4 text-base text-purple'>
        Message
      </button>
    </div>
  );
};

export default TrackMember;
