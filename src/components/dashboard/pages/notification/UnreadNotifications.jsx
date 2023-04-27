import React from 'react';
import { all } from './NotificationsData';
import DisplayStyle from './DisplayStyle';
import { v4 as uuidv4 } from 'uuid';

const UnreadNotifications = () => {
  const unread = all.unread.map((data) => {
    return <DisplayStyle key={uuidv4()} {...data} />;
  });

  const no = all.unread.length;

  return (
    <div>
      <h1 className='mt-8 mb-4 font-light'>{`${no} Unread Notifications`}</h1>
      <div>{unread}</div>
    </div>
  );
};

export default UnreadNotifications;
