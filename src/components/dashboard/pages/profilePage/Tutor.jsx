import React from 'react';
// import user1 from '../../../../assets/user1.svg';

// This is a Tutor component of the ProfileList.jsx
const Tutor = (props) => {
  const { picture, name, track } = props;
  return (
    <div className='flex justify-between items-center px-4 h-12 w-full mb-4'>
      <div className='flex items-center'>
        <img src={require(`../../../../assets/${picture}`)} alt='' />
        <div className='flex flex-col ml-4'>
          <p className='text-base text-[black]'>{name}</p>
          <p className='text-xs font-light'>{track}</p>
        </div>
      </div>

      <button className='border border-purple rounded-lg py-1 px-2 text-base text-purple'>
        Message
      </button>
    </div>
  );
};

export default Tutor;
