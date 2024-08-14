import { FaGamepad } from 'react-icons/fa'; // Font Awesome Gamepad ikonu için import

const Gamemodes = () => {
    return (
        <div className="w-full mx-auto  bg-slate-300 flex items-center flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-4 p-4 px-6 rounded-md shadow-2xl">
                <FaGamepad className="text-slate-300 mr-2" />
                Gamemodes
            </h2>
            <div className="flex flex-col space-y-3 w-full p-4">
                <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    Classic
                </button>
                <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    In your own words
                </button>
                <button className="p-3 bg-slate-500 text-gray-300 font-semibold rounded-lg cursor-not-allowed">
                    Multiplayer - Soon
                </button>
                <button className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg transition-colors duration-300">
                    Endless
                </button>
            </div>
        </div>
    );
};

export default Gamemodes;
