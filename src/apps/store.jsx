import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import modalReducer from './modal/modalSlice';
import quizReducer from './quizSlice';
import courseReducer from './courseSlice';
import authReducer from './auth/authSlice';

const store = configureStore({
  reducer: {
    userReducer,
    modal: modalReducer,
    quiz: quizReducer,
    course: courseReducer,
    auth: authReducer,
  },
});

export default store;
