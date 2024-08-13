'use client';
import MainSection from '@/components/main/MainSection';
import ResultBox from '@/components/result/ResultBox';
import LeaderBoard from '@/components/leaderBoard/LeaderBoard';

import useCount from '@/hooks/useCount';
import useInputColor from '@/hooks/useInputColor';
import { useState } from 'react';
import Gamemodes from '@/components/gamemodes/Gamemodes';
import LastScores from '@/components/lastScores/lastScores';

export default function Home() {
    ('');
    const [word, setWord] = useState('');
    const [currentWord, setCurrentWord] = useState<string>('');
    const [typedWord, setTypedWord] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [time, setTime] = useState(60);
    const [isFinished, setIsFinished] = useState(false);

    const { trueCount, falseCount } = useCount(typedWord, currentWord);
    const { isTyped, inputColor } = useInputColor(word, currentWord);

    const modalToggleHandler = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className="w-full flex">
            <div className="w-3/12 bg-slate-300">
                <LeaderBoard />
            </div>
            {isFinished ? (
                <ResultBox />
            ) : (
                <MainSection
                    setIsFinished={setIsFinished}
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
            )}
            <div className="w-3/12 bg-slate-300">
                <Gamemodes />
                <LastScores />
            </div>
        </div>
    );
}
