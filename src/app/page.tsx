'use client';
import MainSection from '@/components/main/MainSection';
import ResultBox from '@/components/result/ResultBox';
import LeaderBoard from '@/components/leaderBoard/LeaderBoard';

import useCount from '@/hooks/useCount';
import useInputColor from '@/hooks/useInputColor';
import { useEffect, useState } from 'react';
import Gamemodes from '@/components/gamemodes/Gamemodes';
import Statistics from '@/components/statistics/Statistics';

import runSlice from '@/store/slices/runSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import LoginModal from '@/components/modal/LoginModal';
import userSlice from '@/store/slices/userSlice';
import uiSlice from '@/store/slices/uiSlice';
import SmallScreen from '@/components/Error/SmallScreen';

export default function Home() {
    const dispatch = useDispatch();
    const run = useSelector((state: RootState) => state.run);
    const ui = useSelector((state: RootState) => state.ui);

    const [word, setWord] = useState('');
    const [currentWord, setCurrentWord] = useState<string>('');
    const [typedWord, setTypedWord] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [time, setTime] = useState(60);

    useCount(typedWord, currentWord);
    const { isTyped, inputColor } = useInputColor(word, currentWord);

    const modalToggleHandler = () => {
        setIsModalOpen((prev) => !prev);
    };

    useEffect(() => {
        if (!run.isFinished) {
            dispatch(runSlice.actions.setIsFinished(true));
            dispatch(uiSlice.actions.setIsResultScreen(false));
            setCurrentWord('');
            setTypedWord('');
            setWord('');
        }
    }, [run.isFinished]);

    return (
        <>
            {/* Small screen view */}
            <div className="block lg:hidden">
                <SmallScreen />
            </div>

            {/* Large screen view */}
            <div className="hidden lg:flex w-full">
                <LoginModal />
                <div className="w-3/12">
                    <LeaderBoard />
                </div>
                {ui.isResultScreen ? (
                    <ResultBox />
                ) : (
                    <MainSection
                        falseCount={run.falseCount}
                        inputColor={inputColor}
                        isModalOpen={isModalOpen}
                        isTyped={isTyped}
                        modalToggleHandler={modalToggleHandler}
                        setCurrentWord={setCurrentWord}
                        setTime={setTime}
                        time={time}
                        trueCount={run.trueCount}
                        typedWord={typedWord}
                        setTypedWord={setTypedWord}
                        setWord={setWord}
                    />
                )}
                <div className="w-3/12 bg-gray-100">
                    <Gamemodes />
                    <Statistics />
                </div>
            </div>
        </>
    );
}
