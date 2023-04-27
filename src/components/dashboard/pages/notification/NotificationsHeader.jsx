import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import arrowLeft from '../../../../assets/arrow-left.svg';

const NotificationsHeader = () => {
  const [isAll, setIsAll] = useState(false);
  const [isUnread, setIsUnread] = useState(true);

  const handleToggle = (e) => {
    if (e.currentTarget.id === 'all') {
      setIsAll(true);
      setIsUnread(false);
    } else if (e.currentTarget.id === 'unread') {
      setIsUnread(true);
      setIsAll(false);
    }
  };

  return (
    <div>
      <div className='text-grey4 text-xl font-bold flex mb-6'>
        <img src={arrowLeft} alt='' />
        <h1 className='ml-3'>Notification</h1>
      </div>

      <div className=' bg-verylightgrey flex text-center py-3.5 pl-3.5'>
        <Link to='all'>
          <div
            id='all'
            className='w-[67px] cursor-pointer'
            onClick={(e) => handleToggle(e)}
          >
            <h2 className='mb-1 text-base font-semibold text-purple'>All</h2>
            <div
              className={`h-1 border border-pink rounded-full ${
                isAll ? 'bg-purple' : 'bg-light'
              }`}
            ></div>
          </div>
        </Link>

        <Link to='unread'>
          <div
            id='unread'
            className='w-[67px] ml-2 cursor-pointer'
            onClick={(e) => handleToggle(e)}
          >
            <h2 className='mb-1 text-base font-semibold text-grey4'>Unread</h2>
            <div
              className={`h-1  border border-pink rounded-full outline-0 ${
                isUnread ? 'bg-purple' : 'bg-[#e9f3f5]'
              }`}
            ></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotificationsHeader;
