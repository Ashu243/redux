import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name: 'Counter',
    initialState: {
        value: 0
    },
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1
        },
        decrement: (state)=>{
            state.value = state.value - 1
        }
    }

})

export const {increment, decrement} = counterslice.actions
export const counterReducer =  counterslice.reducer