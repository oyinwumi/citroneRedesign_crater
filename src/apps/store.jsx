import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import modalReducer from './modal/modalSlice'
import quizReducer from './quizSlice'

const store = configureStore({
  reducer: {
    userReducer,
     modal: modalReducer,
     quiz: quizReducer,
  },
});

export default store;
