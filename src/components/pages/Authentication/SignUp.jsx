// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   setFirstName,
//   setLastName,
//   setEmail,
//   setMobile,
//   setPassword,
// } from '../../../apps/Reducers/userReducer';
// import Logo from '../../../assets/logo.svg';
// import Person from '../../../assets/person-icon.svg';
// import Mail from '../../../assets/mail-icon.svg';
// import Call from '../../../assets/call-icon.svg';
// import Lock from '../../../assets/lock-icon.svg';
// import Eye from '../../../assets/eye-icon.svg';
// import Google from '../../../assets/logos_google-icon.svg';
// import Facebook from '../../../assets/grommet-icons_facebook-option.svg';

// const SignUp = () => {
//   const dispatch = useDispatch();
//   const state = useSelector((state) => state.userReducer);

//   // const saveNewUser = () => {
//   //   let allUsers = JSON.parse(localStorage.getItem('Users')) || [];

//   //   const { firstName, lastName, email, password } = state;
//   //   if (!firstName || !lastName || !email || !password) {
//   //     return 'firstName, lastName, email and password cannot be empty';
//   //   }

//   //   let user = { firstName, lastName, email, password };
//   //   allUsers.push(user);
//   //   localStorage.setItem('users', JSON.stringify(allUsers));
//   //   alert('SignUp Successful');
//   // };

//   return (
//     <div className='h-full bg-light flex justify-center items-center '>
//       <div className='w-148 h-200 bg-white'>
//         <div className='pt-8 pl-6'>
//           <img src={Logo} alt='' className='cursor-pointer' />
//         </div>

//         <div className='px-16'>
//           <h4 className='text-center pt-12 font-bold text-xl text-black'>
//             Create Account
//           </h4>
//           <form action=''>
//             <div className='flex justify-between mt-12'>
//               <div className='flex items-center w-56 border border-lightgrey rounded  '>
//                 <img
//                   src={Person}
//                   alt=''
//                   className='bg-light px-3 py-3.5 rounded-l'
//                 />
//                 <input
//                   type='text'
//                   id='firstName'
//                   placeholder='Enter your first name'
//                   name='firstname'
//                   onChange={(e) => dispatch(setFirstName(e.target.value))}
//                   className='w-full rounded-r pl-3 placeholder:text-black focus: outline-0'
//                 />
//               </div>

//               <div className='flex items-center w-56 border border-lightgrey rounded'>
//                 <img
//                   src={Person}
//                   alt=''
//                   className='bg-light px-3 py-3.5 rounded-l'
//                 />
//                 <input
//                   type='text'
//                   id='lastName'
//                   placeholder='Enter your last name'
//                   name='lastname'
//                   onChange={(e) => dispatch(setLastName(e.target.value))}
//                   className='w-full rounded-r pl-3 placeholder:text-black focus: outline-0'
//                 />
//               </div>
//             </div>

//             <div className='flex items-center border border-lightgrey mt-5 rounded'>
//               <img
//                 src={Mail}
//                 alt=''
//                 className='bg-light px-3 py-3.5 rounded-l'
//               />
//               <input
//                 type='email'
//                 id='email'
//                 placeholder='Enter your email'
//                 onChange={(e) => dispatch(setEmail(e.target.value))}
//                 className='w-full rounded-r pl-3 placeholder:text-black focus: outline-0'
//               />
//             </div>

//             <div className='flex items-center border border-lightgrey mt-5 rounded'>
//               <img
//                 src={Call}
//                 alt=''
//                 className='bg-light px-3 py-3.5 rounded-l'
//               />
//               <input
//                 type='text'
//                 id='phone'
//                 placeholder='Enter your phone number'
//                 name='phone'
//                 onChange={(e) => dispatch(setMobile(e.target.value))}
//                 className='w-full rounded-r pl-3 placeholder:text-black focus: outline-0'
//               />
//             </div>

//             <div className='flex items-center bg-white border border-lightgrey mt-5 rounded'>
//               <img
//                 src={Lock}
//                 alt=''
//                 className='bg-light px-3 py-3.5 rounded-l'
//               />
//               <input
//                 type='password'
//                 id='password'
//                 placeholder='Enter your password'
//                 name='password'
//                 onChange={(e) => dispatch(setPassword(e.target.value))}
//                 className='w-full rounded-r pl-3 placeholder:text-black focus: outline-0'
//               />
//               <img src={Eye} alt='' className=' eye mx-4 cursor-pointer' />
//             </div>

//             <div className='flex items-center mt-4'>
//               <input
//                 type='checkbox'
//                 id='checkbox'
//                 value=''
//                 className='w-4 h-4 checked:accent-purple'
//               />
//               <label for='checkbox' className='pl-2'>
//                 By signing up, I agree to the{' '}
//                 <span className='text-purple cursor-pointer'>
//                   Terms of Service and privacy policy
//                 </span>
//               </label>
//             </div>

//             <button
//               type='submit'
//               id='signUp'
//               className='w-full flex justify-center items-center bg-purple py-3 text-white rounded font-bold mt-4'>
//               Sign Up
//             </button>

//             <p className='center-text text-center text-lightgrey mt-4'>
//               Or continue with
//             </p>

//             <div className='flex mt-4 justify-between'>
//               <button
//                 type='submit'
//                 id='google'
//                 className='flex justify-center items-center w-56 py-2 border  border-lightgrey rounded'>
//                 <img src={Google} alt='Google icon' />
//                 <p className='pl-2 font-semibold'>Sign up with Google</p>
//               </button>

//               <button
//                 type='submit'
//                 id='facebook'
//                 className='flex justify-center items-center w-56 bg-blue py-2 rounded'>
//                 <img src={Facebook} alt='Facebook icon' />
//                 <p className='pl-2 font-semibold text-white'>
//                   Sign up with Facebook
//                 </p>
//               </button>
//             </div>
//           </form>

//           <div className='flex justify-center mt-5 font-semibold'>
//             <p className='text-lightergrey mr-4'>Already have an account?</p>
//             <Link to='/login' className='text-purple'>
//               Login
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;