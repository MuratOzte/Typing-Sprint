import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './slices/uiSlice';
import runSlice from './slices/runSlice';

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        run: runSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
