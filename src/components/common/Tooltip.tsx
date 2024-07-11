import { TooltipProps } from '@/types/types';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const setTrue = () => {
        setShowTooltip((prev) => true);
    };

    const setFalse = () => {
        setShowTooltip((prev) => false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={setFalse}
            onMouseLeave={setTrue}
        >
            <AnimatePresence mode="wait">
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="absolute bottom-[45px] left-[-30px] bg-slate-100 w-24 pl-4 p-[2px] text-sm rounded-xl font-sans py-2">
                            {text}
                        </div>
                        <div className="absolute -top-[28px] left-1 w-0 h-0 border-l-[8px] border-l-transparent border-t-[12px] border-t-slate-100 border-r-[8px] border-r-transparent"></div>
                    </motion.div>
                )}
            </AnimatePresence>

            {children}
        </div>
    );
};

export default Tooltip;
