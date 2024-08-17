import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    language: string;
    isLoggedIn: boolean;
}

const initialState = {
    language: 'en',
    isLoggedIn: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setLanguage(state, action) {
            state.language = action.payload;
        },
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        },
    },
});

export default uiSlice;
