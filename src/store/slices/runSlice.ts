import { createSlice } from '@reduxjs/toolkit';

export interface run {
    isFinished: boolean;
    trueCount: number;
    falseCount: number;
    wpm: number;
}

const initialState = {
    isFinished: false,
    trueCount: 0,
    falseCount: 0,
    wpm: 120,
};

const runSlice = createSlice({
    name: 'run',
    initialState,
    reducers: {
        setIsFinished(state, action) {
            state.isFinished = action.payload;
        },
        setTrueCount(state, action) {
            state.trueCount = action.payload;
        },
        setFalseCount(state, action) {
            state.falseCount = action.payload;
        },
        setWpm(state, action) {
            state.wpm = action.payload;
        },
    },
});

export default runSlice;
