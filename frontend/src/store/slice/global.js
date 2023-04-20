import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    masterEmail: "westreed@naver.com"
}

export const global = createSlice({
    name : 'global',
    initialState,
    reducers : {
    }
})

export default global;