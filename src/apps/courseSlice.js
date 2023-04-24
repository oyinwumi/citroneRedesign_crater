import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import api from '../api/axios'
// import axios from "axios";

const url = '/api/citrone/user/courses'
const initialState ={
  courses: [],
  isLoading: false
}

 export const getCourses = createAsyncThunk('courses/getCourses', 
   async () => {
    try {
       const response = await api.get(url, {
        headers:{

        }
       })
       console.log( 'Response',response.data)
       return response.data
    } catch (error) {

    }
   }
 )

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers:{
        setCourse : (state ) =>{
            state.courses = [];
        }

    },
    extraReducers: {
        [getCourses.pending]: (state) =>{
            state.isLoading = true;
        },
        [getCourses.fulfilled]: (state ,action) =>{
            state.isLoading = false;
            state.getCourses = action.payload;
        },
        [getCourses.rejected]: (state) =>{
            state.isLoading =false
        }
    }
})

export const { setCourse} = courseSlice.actions;
export default courseSlice.reducer;