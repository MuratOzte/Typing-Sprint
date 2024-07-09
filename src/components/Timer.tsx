import { useEffect, useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import Tooltip from './common/Tooltip';

const Timer = ({ time = 60, isTyped = false }) => {
    const [second, setSecond] = useState(time);

    useEffect(() => {
        if (second > 0 && isTyped) {
            const timerId = setInterval(() => {
                setSecond((prevSecond) => prevSecond - 1);
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [second, isTyped]);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="bg-slate-100 pl-5 pr-3 py-2 rounded-lg shadow-lg text-xl font-mono flex items-center gap-4">
            {formatTime(second)}
            <Tooltip text="Edit Timer">
                <MdOutlineEdit className="cursor-pointer hover:scale-110 transition-all duration-200" />
            </Tooltip>
        </div>
    );
};

export default Timer;
