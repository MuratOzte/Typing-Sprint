import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/uiSlice';
import runSlice from './slices/runSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        run: runSlice.reducer,
        user: userSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
