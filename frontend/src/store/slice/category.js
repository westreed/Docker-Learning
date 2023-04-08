import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const category = createSlice({
    name : 'category',
    initialState,
    reducers : {
        setCategory(state, action){
            state.data = action.payload;
        }
    }
})

export const { setCategory } = category.actions;
export default category;