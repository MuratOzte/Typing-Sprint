import { FaTrophy } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const leaderBoard = [
    {
        name: 'Murat',
        wps: 62,
    },
    {
        name: 'asurat',
        wps: 50,
    },
    {
        name: 'Kurat',
        wps: 40,
    },
    {
        name: 'Turat',
        wps: 30,
    },
    {
        name: 'Lurat',
        wps: 20,
    },
    {
        name: 'Hurat',
        wps: 10,
    },
    {
        name: 'Durat',
        wps: 5,
    },
    {
        name: 'Zurat',
        wps: 3,
    },
    {
        name: 'Yurat',
        wps: 2,
    },
    {
        name: 'Xurat',
        wps: 1,
    },
];

const LeaderBoard = () => {
    const ui = useSelector((state: RootState) => state.ui);

    return (
        <div className="w-full mx-auto h-screen bg-slate-900 flex items-center flex-col">
            <h2
                className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-slate-600 mt-4 p-4 px-6 rounded-md shadow-2xl max-w-64 pl-4"
                style={{ marginBottom: ui.language == 'en' ? '16px' : 0 }}
            >
                <FaTrophy
                    className="text-yellow-500 mr-2 w-16"
                    size={24}
                />
                {ui.language === 'tr' ? 'Liderlik Tablosu' : 'Leaderboard'}
            </h2>
            <ol className="list-decimal list-inside p-4 w-full">
                {leaderBoard.map((leader, index) => (
                    <li
                        key={index}
                        className={`p-3 rounded-lg mb-2 transition-colors duration-300 bg-slate-400 pl-4`}
                    >
                        <span className="font-semibold">
                            {leader.name} - {leader.wps}{' '}
                        </span>

                        <span className="text-gray-800 text-sm">
                            {ui.language === 'tr'
                                ? 'Dakika Başina Kelime'
                                : 'Words per Minute'}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default LeaderBoard;
