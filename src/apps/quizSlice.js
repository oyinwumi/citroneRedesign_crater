import { createSlice } from "@reduxjs/toolkit";
import questions from "../components/dashboard/pages/quiz/quiz";

const initialState = {
    score: 0,
    answer: questions
}

const quizSlice = createSlice({
    name :'quiz',
    initialState,
    reducers:{
      setAnswer:(state, action)=>{
        state.answer = action.payload
      },
      setScore: (state, action) =>{
     let score = questions.map((question)=>{
      return question.answerOptions.map((answer)=>{
       score = answer.isCorrect
        if(score === true){
          state.score = + 1
         console.log(score);
        }
      })
  
     })
      }
    }

})

export const {setScore , setAnswer } = quizSlice.actions;
export default quizSlice.reducer;