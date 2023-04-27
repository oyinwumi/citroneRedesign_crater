import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  lastName: '',
  email: 'hadizaabdulazeez@gmail.com',
  userName: '@haddy',
  phoneNumber: '234567899900',
  profileImg: '',
  backgroundImg: '',
  auth: {},
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setFirstName(state, action) {
      state.firstName = action.payload;
    },
    setLastName(state, action) {
      state.lastName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setUserName(state, action) {
      state.userName = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setProfileImg(state, action) {
      state.profileImg = action.payload;
    },
    setBackgroundImg(state, action) {
      state.backgroundImg = action.payload;
    },
    setAuth(state, action) {
      state.auth = action.payload;
    },
  },
});

export const {
  setFirstName,
  setLastName,
  setEmail,
  setUserName,
  setPhoneNumber,
  setProfileImg,
  setBackgroundImg,
  setAuth,
} = userReducer.actions;

export default userReducer.reducer;
