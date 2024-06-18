import { Words } from '@/data/words';
import { useEffect, useState } from 'react';

const WordBox = () => {
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        const temp = [];
        for (let i = 1; i <= 10; i++) {
            temp.push(Words[Math.floor(Math.random() * Words.length)]);
        }
        setWords([...words, ...temp]);
    }, []);

    return (
        <div className="flex flex-row border-b-2 border-gray-500 justify-center">
            {words.map((word, index) => (
                <div className="mx-4 text-center" key={index}>
                    {word}
                </div>
            ))}
        </div>
    );
};

export default WordBox;
