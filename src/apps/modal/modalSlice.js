import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isOpenTwo: false,
    isOpenThree: false,
    isOpenFour: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        openModal: (state , action) =>{
            state.isOpen = true ;
        },
        closeModal: (state , action) =>{
            state.isOpen = false ;
        },
        openModalTwo: (state , action) =>{
            state.isOpenTwo = true ;
        },
        closeModalTwo: (state , action) =>{
            state.isOpenTwo = false ;
        },
        openModalThree: (state , action) =>{
            state.isOpenThree = true ;
        },
        closeModalThree: (state , action) =>{
            state.isOpenThree = false ;
        },
        openModalFour: (state , action) =>{
            state.isOpenFour = true ;
        },
        closeModalFour: (state , action) =>{
            state.isOpenFour = false ;
        },
    }
})
export const { openModal , closeModal,openModalTwo , closeModalTwo, openModalThree, closeModalThree, openModalFour, closeModalFour} = modalSlice.actions ;
export default modalSlice.reducer;