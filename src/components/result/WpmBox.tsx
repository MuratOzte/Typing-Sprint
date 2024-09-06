import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import runSlice from '@/store/slices/runSlice';

const WpmBox = () => {
    const dispatch = useDispatch();

    const run = useSelector((state: RootState) => state.run);
    const ui = useSelector((state: RootState) => state.ui);

    useEffect(() => {
        dispatch(runSlice.actions.setRunID());
    }, [run.isFinished]);

    return (
        <div className="w-2/3 flex flex-col bg-slate-600 h-1/3 items-center justify-center rounded-md mx-12 mt-[53px]">
            <span className="text-slate-200">{run.wpm}</span>{' '}
            <span className="text-sm text-slate-400">
                {ui.language == 'en'
                    ? 'Words Per Minute'
                    : 'Dakika Başina Kelime'}
            </span>
        </div>
    );
};

export default WpmBox;
