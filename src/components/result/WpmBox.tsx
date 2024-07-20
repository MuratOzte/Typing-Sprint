import React from 'react';

interface WpmBoxProps {
    wpm: number;
}

const WpmBox: React.FC<WpmBoxProps> = ({ wpm }) => {
    return (
        <div className="w-2/3 flex flex-col bg-slate-600 h-1/3 items-center justify-center rounded-md mx-12 mt-[53px]">
            <span className="text-slate-200">{wpm}</span>{' '}
            <span className="text-sm text-slate-400">Words Per Minute</span>
        </div>
    );
};

export default WpmBox;
