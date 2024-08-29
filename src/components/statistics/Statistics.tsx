import { FaChartBar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Statistics = () => {
    const ui = useSelector((state: RootState) => state.ui);

    const statistics = [1200, '85%', 95, 70];

    return (
        <div className="w-full mx-auto bg-slate-900 flex items-center flex-col">
            <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-2 p-4 px-6 rounded-md shadow-2xl">
                <FaChartBar className="text-green-500 mr-2" />
                {ui.language === 'tr' ? 'İstatistikler' : 'Statistics'}
            </h2>
            <ul className="p-4 w-full">
                <li
                    className={`p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4`}
                >
                    <span className="font-semibold">
                        {ui.language == 'en'
                            ? 'Total Typed Word'
                            : 'Yazilan Toplam Kelime'}
                        : {statistics[0]}
                    </span>
                </li>
                <li
                    className={`p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4`}
                >
                    <span className="font-semibold">
                        {ui.language == 'en' ? 'Accuracy' : 'Doğruluk Oranı'}:{' '}
                        {statistics[1]}
                    </span>
                </li>
                <li
                    className={`p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4`}
                >
                    <span className="font-semibold">
                        {ui.language == 'en'
                            ? 'Highest Score'
                            : 'En Yüksek Skor'}
                        : {statistics[2]}
                    </span>
                </li>
                <li
                    className={`p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4`}
                >
                    <span className="font-semibold">
                        {ui.language == 'en'
                            ? 'Average Score'
                            : 'Ortalama Skor'}
                        : {statistics[3]}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Statistics;
