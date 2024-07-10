import { motion } from 'framer-motion';

const TimerModal = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="z-50 w-1/2 h-20 bg-slate-700"
        ></motion.div>
    );
};

export default TimerModal;
