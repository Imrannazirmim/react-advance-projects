import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "../app/feature/counter/counterSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})