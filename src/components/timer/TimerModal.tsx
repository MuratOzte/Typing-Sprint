import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import TimePicker from './TimePicker';
import { TimerModalProps } from '@/types/types';

const TimerModal: React.FC<TimerModalProps> = ({
    setTime,
    modalToggleHandler,
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(event.target as Node)
            ) {
                modalToggleHandler();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalToggleHandler]);

    return (
        <motion.div
            ref={modalRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="z-50 w-9/12 h-40 bg-slate-400 absolute rounded-lg shadow-xl"
        >
            <TimePicker setTime={setTime} />
        </motion.div>
    );
};

export default TimerModal;
