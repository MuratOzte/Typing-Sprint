import { SiTicktick } from 'react-icons/si';
import { IoAlertCircle } from 'react-icons/io5';
import { CounterProps } from '@/types/types';

const Counter: React.FC<CounterProps> = ({ trueCount, falseCount }) => {
    return (
        <div className=" py-2 px-3 bg-slate-200 rounded-md flex gap-5">
            <div className="flex justify-center items-center gap-1">
                <SiTicktick className="text-green-500" size={24} />
                <span className="text-lg">{trueCount}</span>
            </div>
            <div className="bg-gray-400 w-[1px]" />
            <div className="flex justify-center items-center gap-1">
                <IoAlertCircle className="text-red-500" size={24} />
                <span className="text-lg">{falseCount}</span>
            </div>
        </div>
    );
};

export default Counter;
