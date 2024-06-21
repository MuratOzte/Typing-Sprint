'use client';
import Input from '@/components/Input';
import WordBox from '@/components/WordBox';
import { Words } from '@/data/words';
import { useEffect, useReducer, useState } from 'react';

export default function Home() {
    const [currentWord, setCurrentWord] = useState<string>('');
    const [typedWord, setTypedWord] = useState('');
    const [trueCount, setTrueCount] = useState(0);
    const [falseCount, setFalseCount] = useState(0);

    useEffect(() => {
        console.log('Current Word', currentWord, 'typed word', typedWord);
        if (typedWord === currentWord && typedWord !== '') {
            setTrueCount(trueCount + 1);
        } else if (typedWord !== currentWord && typedWord !== '') {
            setFalseCount(falseCount + 1);
        }
    }, [typedWord]);

    useEffect(() => {
        console.log('True Count', trueCount, 'False Count', falseCount);
    }, [trueCount, falseCount]);

    return (
        <>
            <WordBox setCurrentWord={setCurrentWord} typedWord={typedWord} />
            <Input setTypedWord={setTypedWord} />
        </>
    );
}
