'use client';
import Counter from '@/components/main/Counter';
import Input from '@/components/main/Input';
import Nav from '@/components/main/Nav';
import Timer from '@/components/timer/Timer';
import TimerModal from '@/components/timer/TimerModal';
import WordBox from '@/components/main/WordBox';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import MainSection from '@/components/main/MainSection';

export default function Home() {
    const [word, setWord] = useState('');
    const [inputColor, setInputColor] = useState('');
    const [currentWord, setCurrentWord] = useState<string>('');
    const [typedWord, setTypedWord] = useState('');
    const [trueCount, setTrueCount] = useState(0);
    const [falseCount, setFalseCount] = useState(0);
    const [isTyped, setIsTyped] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [time, setTime] = useState(60);

    useEffect(() => {
        if (typedWord === currentWord && typedWord !== '') {
            setTrueCount(trueCount + 1);
        } else if (typedWord !== currentWord && typedWord !== '') {
            setFalseCount(falseCount + 1);
        }
    }, [typedWord]);

    useEffect(() => {
        if (word.length > 0) setIsTyped(true);
        let color = '';
        for (let i = 0; i < word.length; i++) {
            if (word.length < 1) return;
            if (word[i] !== currentWord[i]) {
                color = 'red';
            }
        }
        setInputColor(color);
    }, [word, currentWord]);

    useEffect(() => {
        setInputColor('');
    }, [currentWord]);

    const modalToggleHandler = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className="w-full flex">
            <div className="w-3/12 bg-red-500"></div>
            <MainSection
                falseCount={falseCount}
                inputColor={inputColor}
                isModalOpen={isModalOpen}
                isTyped={isTyped}
                modalToggleHandler={modalToggleHandler}
                setCurrentWord={setCurrentWord}
                setTime={setTime}
                time={time}
                trueCount={trueCount}
                typedWord={typedWord}
                setTypedWord={setTypedWord}
                setWord={setWord}
            />
            <div className="w-3/12 bg-red-500"></div>
        </div>
    );
}
