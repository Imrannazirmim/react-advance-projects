import { createSlice } from "@reduxjs/toolkit"


const initialAuthState = { isAuthincation: false }



const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.isAuthincation = true
        },
        logout: (state) => {
            state.isAuthincation = false
        }
    }
})
export const authActions = authSlice.actions
export default authSlice.reducer;