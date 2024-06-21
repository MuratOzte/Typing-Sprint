import { InputProps } from '@/types/types';
import { useState } from 'react';

const Input: React.FC<InputProps> = ({ setTypedWord }) => {
    const [value, setValue] = useState('');

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
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
            className="bg-gray-500 p-3 rounded-md"
            onKeyDown={inputSubmitHandler}
        />
    );
};

export default Input;
