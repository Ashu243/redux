const { configureStore } = require("@reduxjs/toolkit");
import { counterReducer } from "./features/counterSlice";


export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})