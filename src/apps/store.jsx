import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import modalReducer from './modal/modalSlice'
import quizReducer from './quizSlice';
import courseReducer from './courseSlice';
import moduleReducer from './moduleSlice'

const store = configureStore({
  reducer: {
    userReducer,
     modal: modalReducer,
     quiz: quizReducer,
     course: courseReducer,
     module: moduleReducer,
  },
  
});

export default store;
