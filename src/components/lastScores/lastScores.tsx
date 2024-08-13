import { FaClock } from 'react-icons/fa'; // Font Awesome Clock ikonu için import

const lastScores = [
    { name: 'Murat', score: 95 },
    { name: 'Surat', score: 88 },
    { name: 'Kurat', score: 76 },
    { name: 'Turat', score: 64 },
];

const LastScores = () => {
    return (
        <div className="w-full mx-auto bg-slate-300 flex items-center flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-2 p-4 px-6 rounded-md shadow-2xl">
                <FaClock className="text-yellow-500 mr-2" />
                Last Scores
            </h2>
            <ul className="p-4 w-full">
                {lastScores.map((score, index) => (
                    <li
                        key={index}
                        className={`p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4`}
                    >
                        <span className="font-semibold">
                            {score.name} - {score.score} <span className='text-gray-700 text-xs' >Words Per Second</span>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LastScores;
