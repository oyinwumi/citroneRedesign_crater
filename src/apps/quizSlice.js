import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    grade: 0,
    chosenOption: '',
}

const quizSlice = createSlice({
    name :'quiz',
    initialState,
    reducers:{
      setGrade:(state,action) =>{
        state.grade = action.payload
        
      },
      setChosenOption:(state,action) =>{
        state.chosenOption = action.payload
      },
    }

})

export const { setGrade, setChosenOption} = quizSlice.actions;
export default quizSlice.reducer;