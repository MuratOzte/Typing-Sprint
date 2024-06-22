import { SiTicktick } from 'react-icons/si';
import { IoAlertCircle } from 'react-icons/io5';
import { CounterProps } from '@/types/types';

const Counter: React.FC<CounterProps> = ({ trueCount, falseCount }) => {
    return (
        <div>
            <div className="flex justify-center items-center gap-1">
                <SiTicktick className="text-green-500" />
                <span>{trueCount}</span>
            </div>
            <div className="flex justify-center items-center gap-1">
                <IoAlertCircle className="text-red-500" />
                <span>{falseCount}</span>
            </div>
        </div>
    );
};

export default Counter;
