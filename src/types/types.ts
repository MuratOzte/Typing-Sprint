export interface WordboxProps {
    setCurrentWord: (word: string) => void;
    typedWord: string;
}

export interface InputProps {
    setTypedWord: (word: string) => void;
    setWord: (word: string) => void;
    color: string;
}

export interface CounterProps {
    trueCount: number;
    falseCount: number;
}
