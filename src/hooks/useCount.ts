import { useEffect, useState } from 'react';

const useCount = (typedWord: string, currentWord: string) => {
    const [trueCount, setTrueCount] = useState(0);
    const [falseCount, setFalseCount] = useState(0);

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
