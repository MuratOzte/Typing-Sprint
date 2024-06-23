'use client';
import Counter from '@/components/Counter';
import Input from '@/components/Input';
import WordBox from '@/components/WordBox';
import { useEffect, useState } from 'react';

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

    return (
        <div className="w-full flex">
            <div className="w-3/12 bg-red-500"></div>
            <div className="flex flex-col space-y-10 justify-center items-center bg-slate-300 h-screen w-6/12">
                <WordBox
                    setCurrentWord={setCurrentWord}
                    typedWord={typedWord}
                />
                <Input setTypedWord={setTypedWord} />
                <Counter trueCount={trueCount} falseCount={falseCount} />
            </div>
            <div className="w-3/12 bg-red-500"></div>
        </div>
    );
}
