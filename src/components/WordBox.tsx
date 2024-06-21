import { Words } from '@/data/words';
import { WordboxProps } from '@/types/types';
import { useEffect, useState } from 'react';

const WordBox: React.FC<WordboxProps> = ({ setCurrentWord, typedWord }) => {
    const [words, setWords] = useState<string[]>([]);

    useEffect(() => {
        const temp = [];
        for (let i = 1; i <= 110; i++) {
            temp.push(Words[Math.floor(Math.random() * Words.length)]);
        }
        setWords([...words, ...temp]);
    }, []);

    useEffect(() => {
        if (typedWord === '' || words.length === 0) return;
        setCurrentWord(words[0]);
        setWords(words.slice(1));
    }, [typedWord]);

    useEffect(() => {
        setCurrentWord(words[0]);
    }, [words]);

    return (
        <>
            <div className="flex flex-row border-b-2 border-gray-500 justify-center flex-wrap">
                {words.length == 0 && <p>Loading...</p>}
                {words.map((word, index) => (
                    <div
                        className="mx-4 text-center"
                        key={index}
                        style={{
                            display: index < 5 ? 'block' : 'none',
                            backgroundColor: index == 0 ? 'red' : 'white',
                        }}
                    >
                        {word}
                    </div>
                ))}
            </div>
        </>
    );
};

export default WordBox;
