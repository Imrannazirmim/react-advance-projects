import { configureStore, } from "@reduxjs/toolkit";
import counterReducer from '../store/counter'
import authReducer from '../store/auth'



const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store;


