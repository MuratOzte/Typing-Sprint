import { IoTrophy } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa';

const Details = () => {
    return (
        <div className="w-10/12 flex justify-center flex-col gap-5">
            <div className="flex items-center px-8 py-2 gap-3 bg-slate-600 rounded-md mt-16 ">
                <IoTrophy className="text-9xl text-yellow-500" size={48} />
                <p className="text-base text-slate-200 flex flex-col">
                    <span>You Beat</span>
                    <span className="text-slate-200 font-bold">%60</span>
                    <span>of the world</span>
                </p>
            </div>
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
                    <FaLink size={24} className="text-slate-500" />
                </button>
            </div>
        </div>
    );
};

export default Details;
