import { TimePickerProps, TimesProps } from '@/types/types';
import { useEffect, useState } from 'react';

const Times: React.FC<TimesProps> = ({
    minutes,
    seconds,
    setSelectedSecond,
}) => {
    return (
        <div
            onClick={() => {
                setSelectedSecond(minutes * 60 + seconds);
            }}
            className="w-24 h-12 rounded-lg bg-slate-100 flex gap-1 items-center justify-center text-2xl font-mono cursor-pointer hover:scale-105 hover:bg-slate-50 transition-all duration-200"
        >
            <h2>{minutes}</h2>
            <h2>:</h2>
            <h2>{seconds == 0 ? '00' : seconds}</h2>
        </div>
    );
};

const times = [
    {
        minutes: 0,
        seconds: 20,
    },
    {
        minutes: 0,
        seconds: 30,
    },
    {
        minutes: 1,
        seconds: 0,
    },
    {
        minutes: 1,
        seconds: 30,
    },
    {
        minutes: 2,
        seconds: 0,
    },
];

const TimePicker: React.FC<TimePickerProps> = ({ setTime }) => {
    const [selectedSecond, setSelectedSecond] = useState(60);

    useEffect(() => {
        setTime(selectedSecond);
    }, [selectedSecond]);

    return (
        <div>
            <h1 className="text-2xl text-center text-slate-800 my-5">
                Select Time
            </h1>
            <div className="flex gap-5 mx-5 items-center justify-center h-full">
                {times.map((time, index) => (
                    <Times
                        setSelectedSecond={setSelectedSecond}
                        minutes={time.minutes}
                        seconds={time.seconds}
                        key={'time' + index}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimePicker;
