'use client';
import Input from '@/components/Input';
import WordBox from '@/components/WordBox';
import { useEffect, useState } from 'react';

export default function Home() {
    const [currentWord, setCurrentWord] = useState<string>('');
    const [typedWord, setTypedWord] = useState('');

    useEffect(() => {
        console.log('Current Word', currentWord, 'typed word', typedWord);
    }, [currentWord, typedWord]);

    return (
        <>
            <WordBox setCurrentWord={setCurrentWord} />
            <Input setTypedWord={setTypedWord}/>
        </>
    );
}
