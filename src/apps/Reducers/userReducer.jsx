import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: {
    firstName: '',
    lastName: '',
  },
  email: '',
  setMobileNo: '',
  password: '',
};

const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    setFirstName(state, action) {
      state.name.firstName = action.payload;
    },
    setLastName(state, action) {
      state.name.lastName = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    setMobileNo(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
  },
});

export const { setFirstName, setLastName, setEmail, setMobileNo, setPassword } =
  userReducer.actions;

export default userReducer.reducer;
