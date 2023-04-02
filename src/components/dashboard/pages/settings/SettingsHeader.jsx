import React from 'react';

const SettingsHeader = () => {
  return (
    <div className='flex '>
      <div className='w-1/2 flex flex-col text-center'>
        <h4 className='text-2xl font-bold'>Your account</h4>
        <div className='h-4 bg-purple rounded-full'></div>
      </div>

      <div className='w-1/2 flex flex-col text-center'>
        <h4 className='text-2xl font-bold'>Security & Safety</h4>
        <div className='h-4 bg-light border border-pink rounded-full'></div>
      </div>
    </div>
  );
};

export default SettingsHeader;
