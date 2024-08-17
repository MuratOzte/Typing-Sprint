import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const WpmBox = () => {
    const run = useSelector((state: RootState) => state.run);
    const ui = useSelector((state: RootState) => state.ui);

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
