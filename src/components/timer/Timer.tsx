import { useCallback, useEffect, useState } from 'react';
import { MdOutlineEdit } from 'react-icons/md';
import Tooltip from '../common/Tooltip';
import { TimerProps } from '@/types/types';

const Timer = ({
    time = 60,
    isTyped = false,
    modalToggleHandler,
}: TimerProps) => {
    const [second, setSecond] = useState(time);
    const [fixedSecond, setFixedSecond] = useState('1:00');

    useEffect(() => {
        setSecond(time);
    }, [time]);

    useEffect(() => {
        setFixedSecond(formatTime(second));
    }, [second]);

    useEffect(() => {
        if (second > 0 && isTyped) {
            const timerId = setInterval(() => {
                setSecond((prevSecond) => prevSecond - 1);
            }, 1000);

            return () => clearInterval(timerId);
        }
    }, [isTyped, second]);

    const formatTime = (totalSeconds: number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="bg-slate-100 pl-5 pr-3 py-2 rounded-lg shadow-lg text-xl font-mono flex items-center gap-4">
            {fixedSecond}
            <div
                onClick={() => {
                    if (!isTyped) {
                        modalToggleHandler();
                    }
                }}
            >
                <Tooltip text={isTyped ? 'Disabled' : 'Select Time'}>
                    <MdOutlineEdit
                        className="cursor-pointer hover:scale-110 transition-all duration-200"
                        color={isTyped ? 'gray' : ''}
                    />
                </Tooltip>
            </div>
        </div>
    );
};

export default Timer;
