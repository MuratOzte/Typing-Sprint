export interface WordboxProps {
    setCurrentWord: (word: string) => void;
    typedWord: string;
}

export interface InputProps {
    setTypedWord: (word: string) => void;
    setWord: (word: string) => void;
    color: string;
    trueCount: number;
    falseCount: number;
}

export interface CounterProps {
    trueCount: number;
    falseCount: number;
}

export interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

export interface TimerProps {
    time?: number;
    isTyped?: boolean;
    modalToggleHandler: () => void;
}
