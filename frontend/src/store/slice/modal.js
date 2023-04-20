import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: false,
    previous: false,
}

export const modal = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        setModal(state, action){
            state.data = action.payload;
        },
        setPreviousModal(state, action){
            state.previous = action.payload;
        }
    }
})

export const { setModal, setPreviousModal } = modal.actions;
export default modal;