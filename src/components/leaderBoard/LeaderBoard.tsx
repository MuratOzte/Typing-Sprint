import { FaTrophy } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { getLeaderboard } from '@/libs/leaderboard';
import Loading from '../common/Loading';

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
    const run = useSelector((state: RootState) => state.run);
    const [Leaderboard, setLeaderboard] = useState<
        { userName: string; wpm: number }[]
    >([]);

    useEffect(() => {
        const fetcher = async () => {
            const response = await getLeaderboard();
            console.log('aa', response);
            setLeaderboard(response.leaderboard);
        };
        fetcher();
    }, [run.isFinished]);

    return (
        <div className="w-full mx-auto h-screen bg-gray-100 flex items-center flex-col">
            <h2
                className="text-3xl font-bold text-center text-gray-200 flex justify-center items-center w-fit bg-gray-700 mt-4 p-4 px-6 rounded-md shadow-2xl max-w-64 pl-4"
                style={{ marginBottom: ui.language == 'en' ? '16px' : 0 }}
            >
                <FaTrophy className="text-yellow-500 mr-2 w-16" size={24} />
                {ui.language === 'tr' ? 'Liderlik Tablosu' : 'Leaderboard'}
            </h2>
            <div className="flex justify-center items-center">
                {!Leaderboard && <Loading />}
            </div>
            {Leaderboard && (
                <ol className="list-decimal list-inside p-4 w-full">
                    {Leaderboard.map((leader, index) => (
                        <li
                            key={index}
                            className={`p-3 rounded-lg mb-2 transition-colors duration-300 bg-slate-400 pl-4`}
                        >
                            <span className="font-semibold">
                                {leader.userName} - {leader.wpm}{' '}
                            </span>

                            <span className="text-gray-800 text-sm">
                                {ui.language === 'tr'
                                    ? 'Dakika Başina Kelime'
                                    : 'Words per Minute'}
                            </span>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
};

export default LeaderBoard;
