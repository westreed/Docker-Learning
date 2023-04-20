import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: true
}

export const widgets = createSlice({
    name : 'widgets',
    initialState,
    reducers : {
        setWidgets(state, action){
            state.data = action.payload;
        }
    }
})

export const { setWidgets } = widgets.actions;
export default widgets;