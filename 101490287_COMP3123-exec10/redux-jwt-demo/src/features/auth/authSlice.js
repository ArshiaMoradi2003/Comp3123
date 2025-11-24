// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { token, user } = action.payload;
            state.isLoggedIn = true;
            state.token = token;
            state.user = user;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.user = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
