import { FaGamepad } from 'react-icons/fa'; // Font Awesome Gamepad ikonu için import
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
const Gamemodes = () => {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <div className="w-full mx-auto  bg-slate-300 flex items-center flex-col mt-12">
            <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-4 p-4 px-6 rounded-md shadow-2xl">
                <FaGamepad className="text-slate-300 mr-2" />
                {ui.language === 'tr' ? 'Oyun Modları' : 'Gamemodes'}
            </h2>
            <div className="flex flex-col space-y-3 w-full p-4">
                <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    {ui.language === 'tr' ? 'Klasik' : 'Classic'}
                </button>
                {/* <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    {ui.language === 'tr' ? 'Zamana karşi' : 'Time Attack'}
                </button> */}
                <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    {ui.language === 'tr' ? 'Sonsuz' : 'Endless'}
                </button>
                <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    {ui.language === 'tr' ? 'Kendi Kelimelerinle' : 'With Your Own Words'}
                </button>
            </div>
        </div>
    );
};

export default Gamemodes;
