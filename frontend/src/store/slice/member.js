import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const member = createSlice({
    name : 'member',
    initialState,
    reducers : {
        setMember(state, action){
            state.data = action.payload;
        }
    }
})

export const { setMember } = member.actions;
export default member;