import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
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
}) => {
    return (
        <div className="flex flex-col gap-10 justify-center items-center bg-slate-300 h-screen w-6/12 relative">
            <Nav />
            <AnimatePresence>
                {isModalOpen && (
                    <TimerModal
                        setTime={setTime}
                        modalToggleHandler={modalToggleHandler}
                    />
                )}
            </AnimatePresence>
            <Timer
                isModalOpen={isModalOpen}
                time={time}
                isTyped={isTyped}
                modalToggleHandler={modalToggleHandler}
            />
            <WordBox setCurrentWord={setCurrentWord} typedWord={typedWord} />
            <Input
                trueCount={trueCount}
                falseCount={falseCount}
                setTypedWord={setTypedWord}
                setWord={setWord}
                color={inputColor}
            />
            <Counter trueCount={trueCount} falseCount={falseCount} />
        </div>
    );
};

export default MainSection;
