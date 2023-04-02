import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    pickup: '',
    destination: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action) => {
            const { email, pickup, destination } = action.payload;
            state.email = email;
            state.pickup = pickup;
            state.destination = destination;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions;

export default userSlice.reducer;