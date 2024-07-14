import { useEffect, useState } from 'react';

const useInputColor = (word: string, currentWord: string) => {
    const [isTyped, setIsTyped] = useState(false);
    const [inputColor, setInputColor] = useState('');

    useEffect(() => {
        if (word.length > 0) setIsTyped(true);

        let color = '';
        for (let i = 0; i < word.length; i++) {
            if (word[i] !== currentWord[i]) {
                color = 'red';
                break;
            }
        }

        setInputColor(color);
    }, [word, currentWord]);

    useEffect(() => {
        setInputColor('');
    }, [currentWord]);

    return { isTyped, inputColor };
};

export default useInputColor;
