// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        counter: counterReducer,
    },
});

export default store;
