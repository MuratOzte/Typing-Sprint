import { createSlice } from '@reduxjs/toolkit';

export interface ui {
    id: string | null;
    email: string | null;
    name: string | null;
    token: string | null;
}

const initialState = {
    id: null,
    name: null,
    email: null,
    token: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        resetUser: (state) => {
            state.id = null;
            state.name = null;
            state.email = null;
            state.token = null;
        },
    },
});

export default userSlice;
