import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: 'hadizaabdulazeez@gmail.com',
  userName: '@haddy',
  phoneNumber: '234567899900',
  profileImg: '',
  backgroundImg: '',
  // auth: {},
  // auth: {
  //   firstName,
  //   lastName,
  //   email,
  //   // phoneNumber,
  //   userName,
  //   role,
  //   accessToken,
  // },
  isAccount: true,
  isSecurity: false,
  isAll: false,
  isUnread: true,
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
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
    // setAuth(state, action) {
    //   state.auth = action.payload;
    // },
    setIsAccount(state, action) {
      state.isAccount = action.payload;
    },
    setIsSecurity(state, action) {
      state.isSecurity = action.payload;
    },
    setIsAll(state, action) {
      state.isAll = action.payload;
    },
    setIsUnread(state, action) {
      state.isUnread = action.payload;
    },
  },
});

export const {
  setEmail,
  setUserName,
  setPhoneNumber,
  setProfileImg,
  setBackgroundImg,
  setAuth,
  setIsAccount,
  setIsSecurity,
  setIsAll,
  setIsUnread,
} = userReducer.actions;

export default userReducer.reducer;
