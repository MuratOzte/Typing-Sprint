import { Words } from '@/data/words';
import { useEffect, useState } from 'react';

const WordBox = () => {
    const [words, setWords] = useState<string[]>([]);
    const [currentWord, setCurrentWord] = useState<string>('');

    useEffect(() => {
        const temp = [];
        for (let i = 1; i <= 110; i++) {
            temp.push(Words[Math.floor(Math.random() * Words.length)]);
        }
        setWords([...words, ...temp]);
    }, []);

    useEffect(() => {
        console.log(currentWord);
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
            <button
                onClick={() => {
                    const newWords = [...words];
                    newWords.shift();
                    setWords(newWords);
                }}
            >
                Deneme
            </button>
        </>
    );
};

export default WordBox;
