import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import api from '../api/axios'



const initialState ={
  module: [],
  isLoading: false
}

 export const getModule = createAsyncThunk('module/getModule', 
   async (level) => {
    const url = `api/citrone/user/${level}/course`;

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

const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers:{ 
      setModule(state, action) {
        state.courses = action.payload;
      },
    
     },

    extraReducers: builder => {
        builder
          .addCase('module/getModule/pending', state => {
            // console.log('module');
            state.isLoading  = true;
          });
          builder.addCase('module/getModule/fulfilled', (state , action) =>{
            state.isLoading = false;
            state.module = action.payload
           
          
          });
          builder.addCase('module/getModule/rejected',  state =>{
            state.isLoading = false;
        
          })
      },
})

export const { setModule} = moduleSlice.actions;
export default moduleSlice.reducer;