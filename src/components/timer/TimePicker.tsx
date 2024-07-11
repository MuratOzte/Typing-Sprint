import { TimePickerProps, TimesProps } from '@/types/types';
import { useEffect, useState } from 'react';

const Times: React.FC<TimesProps> = ({
    minutes,
    seconds,
    setSelectedSecond,
    isSelected,
}) => {
    return (
        <div
            onClick={() => {
                setSelectedSecond(minutes * 60 + seconds);
            }}
            className={`w-24 h-12 rounded-lg flex gap-1 items-center justify-center text-2xl font-mono cursor-pointer hover:scale-105  transition-all duration-200 px-[5px] ${
                isSelected ? 'bg-blue-400' : 'bg-slate-100 scale-100'
            }`}
        >
            <h2>{minutes}</h2>
            <h2>:</h2>
            <h2>{seconds === 0 ? '00' : seconds}</h2>
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
    const defaultIndex = times.findIndex(
        (time) => time.minutes === 1 && time.seconds === 0
    );
    const [selectedSecond, setSelectedSecond] = useState(
        times[defaultIndex].minutes * 60 + times[defaultIndex].seconds
    );
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

    useEffect(() => {
        setTime(selectedSecond);
    }, [selectedSecond, setTime]);

    useEffect(() => {
        setSelectedIndex(
            times.findIndex(
                (time) => time.minutes * 60 + time.seconds === selectedSecond
            )
        );
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
                        isSelected={index === selectedIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimePicker;
