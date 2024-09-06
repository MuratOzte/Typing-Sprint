import { SiTicktick } from 'react-icons/si';
import { IoAlertCircle } from 'react-icons/io5';
import { CounterProps } from '@/types/types';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Counter: React.FC<CounterProps> = ({ trueCount, falseCount }) => {
    const [trueEffect, setTrueEffect] = useState(false);
    const [falseEffect, setFalseEffect] = useState(false);

    const run = useSelector((state: RootState) => state.run);

    useEffect(() => {
        if (trueCount > 0) {
            setTrueEffect(true);
            setTimeout(() => {
                setTrueEffect(false);
            }, 200);
        }
    }, [run.trueCount]);

    useEffect(() => {
        if (falseCount > 0) {
            setFalseEffect(true);
            setTimeout(() => {
                setFalseEffect(false);
            }, 200);
        }
    }, [run.falseCount]);

    return (
        <div className=" py-2 px-3 bg-slate-400 rounded-md flex gap-5">
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: trueEffect ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center gap-1"
            >
                <SiTicktick className="text-green-500" size={24} />
                <span className="text-lg">{trueCount}</span>
            </motion.div>
            <div className="bg-gray-400 w-[1px]" />
            <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: falseEffect ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex justify-center items-center gap-1"
            >
                <IoAlertCircle className="text-red-500" size={24} />
                <span className="text-lg">{falseCount}</span>
            </motion.div>
        </div>
    );
};

export default Counter;
