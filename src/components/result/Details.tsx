import { IoTrophy } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Details = () => {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <div className="w-10/12 flex justify-center flex-col gap-5">
            <div className="flex items-center px-8 py-2 gap-8 bg-slate-600 rounded-md mt-14">
                <IoTrophy className="text-9xl text-yellow-500" size={48} />
                <p className="text-base text-slate-200 flex flex-col">
                    <span>{ui.language == 'en' ? 'You Beat' : 'Dünyanin'}</span>
                    <span className="text-slate-200 font-bold">%60</span>
                    <span>
                        {ui.language == 'en' ? 'of the world' : 'Geçtin'}
                    </span>
                </p>
            </div>
            <div className="bg-slate-600 py-2 pb-3 rounded-md">
                <p className="text-lg mb-2 text-slate-200">
                    {ui.language == 'en' ? 'Share With' : 'Paylaş'}
                </p>
                <div className="flex justify-evenly">
                    <button className="hover:scale-110 transition-all duration-200">
                        <FaWhatsapp size={24} className="text-green-500" />
                    </button>
                    <button className="hover:scale-110 transition-all duration-200">
                        <FaInstagram size={24} className="text-red-500" />
                    </button>
                    <button className="hover:scale-110 transition-all duration-200">
                        <FaFacebook size={24} className="text-blue-500" />
                    </button>
                    <button className="hover:scale-110 transition-all duration-200">
                        <FaLink size={24} className="text-slate-400" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
