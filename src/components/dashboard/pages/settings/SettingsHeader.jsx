import React from 'react';

const SettingsHeader = (props) => {
  // const {}
  return (
    <div className='flex '>
      <div className='w-1/2 flex flex-col text-center'>
        <h4
          className='text-2xl font-bold'
          // id='account'
          // onClick={(e) => handleClick(e)}
        >
          Your account
        </h4>
        <div className='h-4 bg-purple rounded-full'></div>
      </div>

      <div className='w-1/2 flex flex-col text-center'>
        <h4
          className='text-2xl font-bold'
          // id='security'
          // onClick={(e) => handleClick(e)}
        >
          Security & Safety
        </h4>
        <div className='h-4 bg-light border border-pink rounded-full'></div>
      </div>
    </div>
  );
};

export default SettingsHeader;
