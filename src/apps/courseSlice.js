import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import api from '../api/axios'


const url = '/api/citrone/user/courses'
const initialState ={
  courses: [],
  isLoading: false
}

 export const getCourses = createAsyncThunk('courses/getCourses', 
   async () => {
    try {
       const response = await api.get(url ,{ headers:{
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }})
       console.log( 'Response3',response.data.message)
       return response.data.message
    } catch (error) {

    }
   }
 )

const courseSlice = createSlice({
    name: 'course',
    initialState,
    inputValue: '',
    reducers:{ 
      setCourses(state, action) {
        state.courses = action.payload;
      },
      setInputValue(state, action) {
        state.inputValue = action.payload;
      },
     },

    extraReducers: builder => {
        builder
          .addCase('courses/getCourses/pending', state => {
            console.log('course');
            state.isLoading  = true;
          });
          builder.addCase('courses/getCourses/fulfilled', (state , action) =>{
            state.isLoading = false;
            state.courses = action.payload
           
          
          });
          builder.addCase('courses/getCourses/rejected',  state =>{
            state.isLoading = false;
        
          })
      },
})

export const { setCourse, setInputValue} = courseSlice.actions;
export default courseSlice.reducer;