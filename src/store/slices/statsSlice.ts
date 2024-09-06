import { createSlice } from '@reduxjs/toolkit';

export interface run {
    highestScore: number;
    id: string;
    totalFalseWords: number;
    totalRun: number;
    totalTrueWords: number;
    totalTypedWords: number;
    totalWPM: number;
    userId: string;
}

const initialState = {
    highestScore: null,
    id: null,
    totalFalseWords: null,
    totalRun: null,
    totalTrueWords: null,
    totalTypedWords: null,
    totalWPM: null,
    userId: null,
};

const statsSlice = createSlice({
    name: 'stats',
    initialState,
    reducers: {
        setRun(state, action) {
            state.highestScore = action.payload.highestScore;
            state.id = action.payload.id;
            state.totalFalseWords = action.payload.totalFalseWords;
            state.totalRun = action.payload.totalRun;
            state.totalTrueWords = action.payload.totalTrueWords;
            state.totalTypedWords = action.payload.totalTypedWords;
            state.totalWPM = action.payload.totalWPM;
            state.userId = action.payload.userId;
        },
    },
});

export default statsSlice;
