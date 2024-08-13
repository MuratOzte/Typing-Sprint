import { AnimatePresence } from 'framer-motion';
import Nav from '../common/Nav';
import TimerModal from '../timer/TimerModal';
import Timer from '../timer/Timer';
import WordBox from './WordBox';
import Input from './Input';
import Counter from './Counter';
import { MainSectionProps } from '@/types/types';

const MainSection: React.FC<MainSectionProps> = ({
    falseCount,
    inputColor,
    isModalOpen,
    isTyped,
    modalToggleHandler,
    setCurrentWord,
    setTime,
    time,
    trueCount,
    typedWord,
    setTypedWord,
    setWord,
    setIsFinished
}) => {
    return (
        <div className='w-6/12 h-screen overflow-hidden' >
            <Nav />
            <div className="flex flex-col gap-10 pt-24 items-center bg-slate-300 h-screen w-full relative">
                <AnimatePresence>
                    {isModalOpen && (
                        <TimerModal
                            setTime={setTime}
                            modalToggleHandler={modalToggleHandler}
                        />
                    )}
                </AnimatePresence>
                <Timer
                    setIsFinished={setIsFinished}
                    isModalOpen={isModalOpen}
                    time={time}
                    isTyped={isTyped}
                    modalToggleHandler={modalToggleHandler}
                />
                <WordBox
                    setCurrentWord={setCurrentWord}
                    typedWord={typedWord}
                />
                <Input
                    trueCount={trueCount}
                    falseCount={falseCount}
                    setTypedWord={setTypedWord}
                    setWord={setWord}
                    color={inputColor}
                />
                <Counter trueCount={trueCount} falseCount={falseCount} />
            </div>
        </div>
    );
};

export default MainSection;
