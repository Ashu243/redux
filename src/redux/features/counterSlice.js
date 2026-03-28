import { createSlice } from "@reduxjs/toolkit";

const counterslice = createSlice({
    name: 'Counter',
    initialState: {
        value: 0,
        message: 'hey'
    },
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1
        },
        decrement: (state)=>{
            state.value = state.value - 1
        },
        increment_5: (state)=>{
            state.value += 5
        },
        incrementByAmount: (state, actions)=>{
            state.value += actions.payload
        }
    }

})

export const {increment, decrement, increment_5, incrementByAmount} = counterslice.actions
export const counterReducer =  counterslice.reducer