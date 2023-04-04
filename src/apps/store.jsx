import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import modalReducer from './modal/modalSlice'

const store = configureStore({
 reducer: {
    userReducer,
     modal: modalReducer,
  },
});


export default store;
