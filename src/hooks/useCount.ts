import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const useCount = (typedWord: string, currentWord: string) => {
    const [trueCount, setTrueCount] = useState(0);
    const [falseCount, setFalseCount] = useState(0);

    const run = useSelector((state: RootState) => state.run);

    useEffect(() => {
        if (run.isFinished) {
            setTrueCount(0);
            setFalseCount(0);
        }
    }, [run.isFinished]);

    useEffect(() => {
        if (typedWord === currentWord && typedWord !== '') {
            setTrueCount(trueCount + 1);
        } else if (typedWord !== currentWord && typedWord !== '') {
            setFalseCount(falseCount + 1);
        }
    }, [typedWord]);

    return { trueCount, falseCount };
};

export default useCount;
