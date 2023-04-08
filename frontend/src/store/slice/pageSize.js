import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: 15
}

export const pageSize = createSlice({
    name : 'pageSize',
    initialState,
    reducers : {
        setPageSize(state, action){
            state.data = action.payload;
        }
    }
})

export const { setPageSize } = pageSize.actions;
export default pageSize;