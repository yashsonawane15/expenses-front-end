import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false,
    authToken: ""
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        },

        logout: (state) => {
            state.loggedIn = false;
        }
    } 
})

export const actions = authSlice.actions;

export default authSlice.reducer;