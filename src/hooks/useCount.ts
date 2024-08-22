import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import uiSlice from '@/store/slices/uiSlice';

const useCount = (typedWord: string, currentWord: string) => {
    const dispatch = useDispatch();

    const [trueCount, setTrueCount] = useState(0);
    const [falseCount, setFalseCount] = useState(0);

    const run = useSelector((state: RootState) => state.run);
    const ui = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        if (ui.isRePlayButtonClicked) {
            setTrueCount(0);
            setFalseCount(0);
            dispatch(uiSlice.actions.setIsRePlayButtonClicked(false));
        }
    }, [ui.isRePlayButtonClicked]);

    useEffect(() => {
        if (typedWord === currentWord && typedWord !== '') {
            setTrueCount(trueCount + 1);
        } else if (typedWord !== currentWord && typedWord !== '') {
            setFalseCount(falseCount + 1);
        }
    }, [typedWord]);

    return { trueCount, falseCount };
};

export default useCount;
