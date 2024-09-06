import { createSlice } from '@reduxjs/toolkit';

export interface run {
    isFinished: boolean;
    trueCount: number;
    falseCount: number;
    wpm: number;
    time: number;
    runID?: string;
}

const initialState = {
    isFinished: false,
    trueCount: 0,
    falseCount: 0,
    wpm: 0,
    time: 0,
    runID: '',
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
        setWpm(state) {
            let temp =
                state.time > 60 ? 1 / (state.time / 60) : 60 / state.time;

            state.wpm =
                state.trueCount + state.falseCount > 0
                    ? Math.floor(state.trueCount * temp)
                    : 0;
            state.runID = Math.random().toString(36).substr(2, 9);
        },
        setTime(state, action) {
            state.time = action.payload;
        },
        setRunID(state) {
            state.runID = Math.random().toString(36).substr(2, 9);
        },
        resetRun(state) {
            state.isFinished = false;
            state.trueCount = 0;
            state.falseCount = 0;
            state.wpm = 0;
            state.time = 0;
        },
    },
});

export default runSlice;
