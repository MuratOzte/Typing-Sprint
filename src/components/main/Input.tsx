import { InputProps } from '@/types/types';
import { useEffect, useState } from 'react';

const Input: React.FC<InputProps> = ({
    setTypedWord,
    setWord,
    color,
    trueCount,
    falseCount,
}) => {
    const [value, setValue] = useState('');
    const [isTrueEffect, setIsTrueEffect] = useState(false);
    const [isFalseEffect, setIsFalseEffect] = useState(false);

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value.toLocaleLowerCase());
        setWord(event.currentTarget.value.toLocaleLowerCase().trim());
    };

    const inputSubmitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Space' || e.key === 'Enter') {
            setTypedWord(value.trim());
            setValue('');
        }
    };

    useEffect(() => {
        if (trueCount > 0) {
            setIsTrueEffect(true);
            setTimeout(() => {
                setIsTrueEffect(false);
            }, 300);
        }
    }, [trueCount]);

    useEffect(() => {
        if (falseCount > 0) {
            setIsFalseEffect(true);
            setTimeout(() => {
                setIsFalseEffect(false);
            }, 300);
        }
    }, [falseCount]);

    return (
        <input
            type="text"
            value={value}
            onChange={inputChangeHandler}
            onKeyDown={inputSubmitHandler}
            autoFocus
            autoComplete="off"
            style={{ backgroundColor: color, border: 'border 2 solid #d1d5db' }}
            className={`bg-slate-400  my-2 px-5 py-3 rounded-lg focus:outline-none w-1/3 focus:ring-2 focus:ring-gray-400 transition-all duration-150 border-2 ${
                isTrueEffect ? 'border-green-500' : ''
            } ${isFalseEffect ? 'border-red-500' : ''}`}
        />
    );
};

export default Input;
