import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    isOpenTwo: false,
    isOpenThree: false
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
            state.isOpenTwo = false ;
        },
    }
})
export const { openModal , closeModal,openModalTwo , closeModalTwo, openModalThree, closeModalThree} = modalSlice.actions ;
export default modalSlice.reducer;