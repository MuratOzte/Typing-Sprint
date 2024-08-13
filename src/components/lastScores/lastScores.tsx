import { FaChartBar } from 'react-icons/fa'; // Font Awesome Chart Bar icon for statistics

const statistics = [
    { label: 'Total Words Typed', value: 1200 },
    { label: 'Accuracy Rate', value: '95%' },
    { label: 'Highest WPS', value: 120 }, // Örnek: En Yüksek WPS
    { label: 'Average WPS', value: 85 }, // Örnek: Ortalama WPS
];

const Statistics = () => {
    return (
        <div className="w-full mx-auto bg-slate-300 flex items-center flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-2 p-4 px-6 rounded-md shadow-2xl">
                <FaChartBar className="text-green-500 mr-2" />
                Statistics
            </h2>
            <ul className="p-4 w-full">
                {statistics.map((stat, index) => (
                    <li
                        key={index}
                        className={`p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4`}
                    >
                        <span className="font-semibold">
                            {stat.label}: {stat.value}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Statistics;
