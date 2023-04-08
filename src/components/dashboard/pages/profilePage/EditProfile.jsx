import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../../../assets/x-close.svg';
import addImg from '../../../../assets/gallery-add.svg';

const EditProfile = () => {
  return (
    <div className='body bg-grey bg-opacity-50 min-h-screen mx-auto sm:flex sm:justify-center sm:items-center'>
      <div className='container w-[708px] h-[710px] bg-white shadow mx-auto pt-6 '>
        <span className='flex items-center ml-7'>
          <img src={close} alt='' />
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
            className='border border-purple rounded-lg py-2 px-4 mt-2 mr-4 text-base font-bold text-purple'>
            Upload Photo
          </button>
        </div>

        <div className=' border-pink pt-4 px-4'>
          <form action=''>
            <div className='mt-4'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                value=''
                placeholder='@haddy'
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0 shadow'
              />
            </div>

            <div className='mt-4'>
              <label htmlFor='email'>Email Address</label>
              <input
                type='text'
                value=''
                placeholder='hadizaabdulazeez@gmail.com'
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0 shadow'
              />
            </div>
            <div className='mt-4'>
              <label htmlFor='phone' className='mt-4'>
                Phone Number
              </label>
              <input
                type='text'
                value=''
                placeholder='+234567899900'
                className='block bg-verylightgrey w-full p-3 mt-2 border border-pink rounded outline-0 shadow'
              />
            </div>
            <div className='flex justify-end mt-10'>
              <button
                type='button'
                className='text-purple border border-purple text-base font-bold  rounded-lg py-2 px-4 mr-6 '>
                Cancel
              </button>
              <Link to='/profiledata'>
                <button
                    type='submit'
                    className='text-white bg-purple text-base font-bold py-2 px-4 rounded-lg'>
                    Save Changes
                  </button>
            </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
