import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cabs: [],
    shortestPath: [],
    totalTime: 0,
    arrivingTime: 0,
};

export const cabSlice = createSlice({
    name: 'cabs',
    initialState,
    reducers: {
        setCabData: (state, action) => {
            const { data } = action.payload;
            state.cabs = data.cabList;
            state.shortestPath = data.shortestPath;
            state.totalTime = data.totalTime;
            state.arrivingTime = data.arrivingTime;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCabData } = cabSlice.actions;

export default cabSlice.reducer;