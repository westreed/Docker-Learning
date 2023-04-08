import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const postList = createSlice({
    name : 'postList',
    initialState,
    reducers : {
        setPostList(state, action){
            state.data = action.payload;
        }
    }
})

export const { setPostList } = postList.actions;
export default postList;