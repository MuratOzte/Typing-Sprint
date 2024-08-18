import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    language: string;
    isLoggedIn: boolean;
    isRePlayButtonClicked: boolean;
}

const initialState = {
    language: 'en',
    isLoggedIn: false,
    isRePlayButtonClicked: false,
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
        setIsRePlayButtonClicked(state, action) {
            state.isRePlayButtonClicked = action.payload;
        },
    },
});

export default uiSlice;
