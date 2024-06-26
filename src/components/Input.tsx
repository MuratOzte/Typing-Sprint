import { InputProps } from '@/types/types';
import { useState } from 'react';

const Input: React.FC<InputProps> = ({ setTypedWord }) => {
    const [value, setValue] = useState('');

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value.toLocaleLowerCase());
    };

    const inputSubmitHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === 'Space' || e.key === 'Enter') {
            setTypedWord(value.trim());
            setValue('');
        }
    };

    return (
        <input
            type="text"
            value={value}
            onChange={inputChangeHandler}
            onKeyDown={inputSubmitHandler}
            autoFocus
            autoComplete="off"
            className="px-5 py-3 rounded-lg focus:outline-none w-1/3 focus:ring-2 focus:ring-gray-400 shadow-lg"
        />
    );
};

export default Input;
