import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    language: string;
    isLoggedIn: boolean;
    isRePlayButtonClicked: boolean;
    isLoginModalOpen: boolean;
    isResultScreen: boolean;
}

const initialState = {
    language: 'en',
    isLoggedIn: false,
    isRePlayButtonClicked: false,
    isLoginModalOpen: false,
    isResultScreen: false,
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
        setIsLoginModalOpen(state, action) {
            state.isLoginModalOpen = action.payload;
        },
        setIsResultScreen(state, action) {
            state.isResultScreen = action.payload;
        },
    },
});

export default uiSlice;
