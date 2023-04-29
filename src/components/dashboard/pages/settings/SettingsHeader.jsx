import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setIsAccount,
  setIsSecurity,
} from '../../../../apps/reducers/userReducer';

const SettingsHeader = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { isAccount, isSecurity } = state;

  const handleToggle = (e) => {
    if (e.currentTarget.id === 'security') {
      dispatch(setIsSecurity(true));
      dispatch(setIsAccount(false));
    } else if (e.currentTarget.id === 'account') {
      dispatch(setIsAccount(true));
      dispatch(setIsSecurity(false));
    }
  };

  return (
    <div className='flex w-full '>
      <div
        className='w-1/2 flex flex-col text-center'
        id='account'
        onClick={(e) => handleToggle(e)}
      >
        <Link to='account'>
          <h4 className='text-2xl font-bold'>Your account</h4>
          <div
            className={`h-4 border border-pink rounded-full ${
              isAccount ? 'bg-purple' : 'bg-light'
            }`}
          ></div>
        </Link>
      </div>

      <div
        className='w-1/2 flex flex-col text-center'
        id='security'
        onClick={(e) => handleToggle(e)}
      >
        <Link to='security&safety'>
          <h4 className='text-2xl font-bold'>Security & Safety</h4>
          <div
            className={`h-4  border border-pink rounded-full ${
              isSecurity ? 'bg-purple' : 'bg-light'
            }`}
          ></div>
        </Link>
      </div>
    </div>
  );
};

export default SettingsHeader;
