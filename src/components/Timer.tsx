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

    return <div>{second}</div>;
};

export default Timer;
