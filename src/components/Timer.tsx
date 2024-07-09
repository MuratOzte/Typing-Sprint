import { useEffect, useState } from 'react';

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

    const formatTime = (totalSeconds:number) => {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return <div>{formatTime(second)}</div>;
};

export default Timer;
