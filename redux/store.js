import { configureStore } from '@reduxjs/toolkit';
import cabSlice from './cabSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        data: cabSlice,
        user: userSlice,
    },
});