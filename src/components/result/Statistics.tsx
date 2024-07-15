import { SiTicktick } from 'react-icons/si';
import { IoAlertCircle } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';

const Statistics = () => {
    return (
        <div className="w-1/2">
            <div className="flex justify-between items-center gap-3 ml-8 mt-5 text-xl pl-5">
                <div className="flex gap-3">
                    <SiTicktick className="text-green-500" size={24} />
                    60
                </div>
                <div className="flex gap-3">
                    <IoAlertCircle className="text-red-500" size={28} />
                    60
                </div>
                <div className="flex gap-3">
                    <IoTimeOutline size={28} />
                    60
                </div>
            </div>
        </div>
    );
};

export default Statistics;
