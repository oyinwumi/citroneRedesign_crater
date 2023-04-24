import React from 'react';
import { Link } from 'react-router-dom';

const SettingsHeader = () => {
  return (
    <div className='flex '>
      <div className='w-1/2 flex flex-col text-center'>
        <Link to='account' className='group'>
          <h4 className='text-2xl font-bold'>Your account</h4>
          <div className='h-4 bg-light border border-pink rounded-full group-focus:bg-purple'></div>
        </Link>
      </div>

      <div className='w-1/2 flex flex-col text-center'>
        <Link to='security&safety' className='group'>
          <h4 className='text-2xl font-bold'>Security & Safety</h4>
          <div className='h-4 bg-light border border-pink rounded-full group-focus:bg-purple'></div>
        </Link>
      </div>
    </div>
  );
};

export default SettingsHeader;
