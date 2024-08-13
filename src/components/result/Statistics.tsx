import { SiTicktick } from 'react-icons/si';
import { IoAlertCircle } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';

const Statistics = () => {
    return (
        <div className="w-fit mt-6 bg-slate-600 mx-8 pr-6 py-4 rounded-md">
            <div className="flex items-center gap-4 text-xl pl-5">
                <div className="flex gap-2 text-gray-300">
                    <SiTicktick className="text-green-500" size={24} />
                    60
                </div>
                <div className="flex gap-2 text-gray-300">
                    <IoAlertCircle className="text-red-500" size={28} />
                    60
                </div>
                <div className="flex gap-2 text-gray-300">
                    <IoTimeOutline size={28} className='text-gray-300' />
                    60
                </div>
            </div>
        </div>
    );
};

export default Statistics;
