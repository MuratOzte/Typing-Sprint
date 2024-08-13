import { FaTrophy } from 'react-icons/fa'; // Font Awesome Trophy ikonu için import

const leaderBoard = [
    {
        name: 'Murat',
        wps: 62,
    },
    {
        name: 'Surat',
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
    return (
        <div className="w-full mx-auto h-screen bg-slate-300 flex items-center flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-4 p-4 px-6 rounded-md shadow-2xl">
                <FaTrophy className="text-yellow-500 mr-2" />
                Leaderboard
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
                            Words Per Second
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default LeaderBoard;
