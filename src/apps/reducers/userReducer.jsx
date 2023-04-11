import { createSlice } from '@reduxjs/toolkit';
// import { eye } from 'react-icons-kit/fa/eye';
// import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  mobileNo: '',
  password: '',
  // passwordType: 'password',
  // eyeIcon: eyeSlash,
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
    setMobileNo(state, action) {
      state.mobileNo = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setMobileNo, setPassword } =
  userReducer.actions;

export default userReducer.reducer;
