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

export interface TimerProps {
    time?: number;
    isTyped?: boolean;
    modalToggleHandler: () => void;
    isModalOpen: boolean;
}

export interface TimesProps {
    minutes: number;
    seconds: number;
    setSelectedSecond: (second: number) => void;
    isSelected: boolean;
}

export interface TimerModalProps {
    setTime: (time: number) => void;
    modalToggleHandler: () => void;
}

export interface TimePickerProps {
    setTime: (time: number) => void;
}

export interface MainSectionProps {
    isModalOpen: boolean;
    setTime: (time: number) => void;
    time: number;
    isTyped: boolean;
    modalToggleHandler: () => void;
    setCurrentWord: (word: string) => void;
    setTypedWord: (word: string) => void;
    setWord: (word: string) => void;
    typedWord: string;
    trueCount: number;
    falseCount: number;
    inputColor: string;
}

export interface useInputColorProps {
    typedWord: string;
    currentWord: string;
}

export interface ModalHeaderProps {
    isRegistering: boolean;
    closeModal: () => void;
}

export interface AlertProps {
    type: string;
    message: string;
    onClose: () => void;
}
