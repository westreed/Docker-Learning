import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const writing = createSlice({
    name : 'writing',
    initialState,
    reducers : {
        setWriting(state, action){
            state.data = action.payload;
        }
    }
})

export const { setWriting } = writing.actions;
export default writing;