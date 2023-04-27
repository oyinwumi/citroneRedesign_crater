import React from 'react';
import UnreadNotifications from './UnreadNotifications';
import DisplayStyle from './DisplayStyle';
import { all } from './NotificationsData';
import { v4 as uuidv4 } from 'uuid';

const AllNotifications = () => {
  const previous = all.previous.map((data) => {
    return <DisplayStyle key={uuidv4()} {...data} />;
  });
  return (
    <div>
      <div className=''>
        <UnreadNotifications />
      </div>

      <div>
        <h2 className='mt-10 mb-4 font-light'>Previous Notifications</h2>
        <div>{previous}</div>
      </div>
    </div>
  );
};

export default AllNotifications;
