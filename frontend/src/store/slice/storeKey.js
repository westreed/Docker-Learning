import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rsaKey: null
}

export const storeKey = createSlice({
    name : 'storeKey',
    initialState,
    reducers : {
        setRSAPublicKey(state, action){
            state.rsaKey = action.payload;
        }
    }
})

export const { setRSAPublicKey } = storeKey.actions;
export default storeKey;