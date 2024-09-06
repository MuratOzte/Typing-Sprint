import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import uiSlice from '@/store/slices/uiSlice';
import runSlice from '@/store/slices/runSlice';

const useCount = (typedWord: string, currentWord: string) => {
    const dispatch = useDispatch();


    const run = useSelector((state: RootState) => state.run);
    const ui = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        if (ui.isRePlayButtonClicked) {
            dispatch(uiSlice.actions.setIsRePlayButtonClicked(false));
        }
    }, [ui.isRePlayButtonClicked]);

    useEffect(() => {
        if (typedWord === currentWord && typedWord !== '') {
            dispatch(runSlice.actions.setTrueCount(run.trueCount + 1));
        } else if (typedWord !== currentWord && typedWord !== '') {
            dispatch(runSlice.actions.setFalseCount(run.falseCount + 1));
        }
        dispatch(runSlice.actions.setWpm());
    }, [typedWord]);

    return;
};

export default useCount;
