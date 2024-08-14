import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    isAboutSectionOpened: boolean;
    isNavClicked: boolean;
}

const initialState = {
    isAboutSectionOpened: false,
    isNavClicked: false,
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleAboutSection: (state, action) => {
            state.isAboutSectionOpened = action.payload;
        },
        toggleNav: (state, action) => {
            state.isNavClicked = action.payload;
        },
    },
});

export default uiSlice;