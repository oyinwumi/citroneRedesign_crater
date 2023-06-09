import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setUserName,
  setEmail,
  setPhoneNumber,
  // setProfileImg,
  // setBackgroundImg,
} from '../../../../apps/reducers/userReducer';
import close from '../../../../assets/x-close.svg';
import addImg from '../../../../assets/gallery-add.svg';

const EditProfile = ({ setShowModal }) => {
  const modalRef = useRef();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userReducer);
  const { userName, email, phoneNumber } = state;

  //Close the modal when clicking outside the modal
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  //Render the modal component in the portal div
  return ReactDOM.createPortal(
    <div
      ref={modalRef}
      className='z-[1] fixed top-0 left-0 bottom-0 right-0 min-h-screen flex flex-col justify-center items-center bg-grey/50
     '
      // sm:flex sm:justify-center sm:items-center
      onClick={closeModal}
    >
      <div className='modal w-[708px] h-[710px] pt-6 bg-white mx-auto rounded-md relative'>
        <span className='flex items-center ml-7'>
          <img
            src={close}
            alt=''
            className='cursor-pointer'
            onClick={() => setShowModal(false)}
          />
          <span className='ml-3 text-xl font-bold'>Edit profile</span>
        </span>

        <div className='relative mt-4 mx-1.5'>
          <div className='w-[697px] h-[179px] bg-grey flex justify-center items-center'>
            <img src={addImg} alt='' className='pt-2 ' />
          </div>

          <div className=' w-[120px] h-[120px] rounded-full bg-grey flex justify-center items-center border border-white absolute -bottom-16 left-7'>
            <img src={addImg} alt='' className=' ' />
          </div>
        </div>
        <div className='flex justify-end'>
          <button
            type='button'
            className='border border-purple rounded-lg py-2 px-4 mt-2 mr-4 text-base font-bold text-purple'
          >
            Upload Photo
          </button>
        </div>

        <div className=' border-pink pt-4 px-4'>
          <form action=''>
            <div className='mt-4'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                value={userName}
                onChange={(e) => dispatch(setUserName(e.target.value))}
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0 shadow'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='text'
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0 shadow'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='phone' className='mt-4'>
                Phone Number
              </label>
              <input
                type='text'
                value={phoneNumber}
                onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0 shadow'
              />
            </div>
            <div className='flex justify-end mt-10'>
              <button
                type='button'
                className='text-purple border border-purple text-base font-bold  rounded-lg py-2 px-4 mr-6 '
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <Link to='/profiledata'>
                <button
                  type='submit'
                  className='text-white bg-purple text-base font-bold py-2 px-4 rounded-lg'
                >
                  Save Changes
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default EditProfile;
