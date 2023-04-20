import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

// 게시글 내용
export const posting = createSlice({
    name : 'posting',
    initialState,
    reducers : {
        setPosting(state, action){
            state.data = action.payload;
        }
    }
})

export const { setPosting } = posting.actions;
export default posting;