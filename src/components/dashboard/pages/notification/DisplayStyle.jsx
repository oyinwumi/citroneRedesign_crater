import React from 'react';

const displayStyle = ({ message, date }) => {
  return (
    <div>
      <div className='w-full flex justify-between p-3 bg-verylightgrey text-base mt-2 border border-pink rounded shadow cursor-pointer'>
        <p>{message}</p>
        <p className='font-light'>{date}</p>
      </div>
    </div>
  );
};

export default displayStyle;
