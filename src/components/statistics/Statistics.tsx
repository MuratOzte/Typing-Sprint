import { FaChartBar } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useStats } from '@/hooks/useStats';
import { FaLock } from 'react-icons/fa';

const Statistics = () => {
    const ui = useSelector((state: RootState) => state.ui);
    const user = useSelector((state: RootState) => state.user);

    const { stats, isAuth, isLoading } = useStats(user.id);

    return (
        <div className="w-full mx-auto bg-slate-900 flex items-center flex-col">
            {isAuth ? (
                <>
                    <h2 className="text-3xl font-bold text-center text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-2 p-4 px-6 rounded-md shadow-2xl">
                        <FaChartBar className="text-green-500 mr-2" />
                        {ui.language === 'tr' ? 'İstatistikler' : 'Statistics'}
                    </h2>
                    <ul className="p-4 w-full">
                        <li className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4">
                            <span className="font-semibold">
                                {ui.language === 'en'
                                    ? 'Total Typed Word'
                                    : 'Yazilan Toplam Kelime'}
                                : {stats ? stats.totalTypedWords : 'Loading...'}
                            </span>
                        </li>
                        <li className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4">
                            <span className="font-semibold">
                                {ui.language === 'en'
                                    ? 'Accuracy'
                                    : 'Doğruluk Oranı'}
                                : {stats ? stats.accuracy : 'Loading...'}
                            </span>
                        </li>
                        <li className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4">
                            <span className="font-semibold">
                                {ui.language === 'en'
                                    ? 'Highest Score'
                                    : 'En Yüksek Skor'}
                                : {stats ? stats.highestScore : 'Loading...'}
                            </span>
                        </li>
                        <li className="p-3 bg-slate-400 hover:bg-slate-500 text-gray-900 font-semibold rounded-lg mb-2 transition-colors duration-300 pl-4">
                            <span className="font-semibold">
                                {ui.language === 'en'
                                    ? 'Average Score'
                                    : 'Ortalama Skor'}
                                : {stats ? stats.averageScore : 'Loading...'}
                            </span>
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <h2 className="text-3xl font-bold text-center  text-gray-300 flex justify-center items-center w-fit bg-gray-700 my-2 p-4 px-6 rounded-md shadow-2xl">
                        <FaChartBar className="text-green-500 mr-2" />
                        {ui.language === 'tr' ? 'İstatistikler' : 'Statistics'}
                    </h2>
                    <div className="bg-gray-700 h-32 mt-12 flex justify-center items-center text-gray-300 flex-col gap-2 px-4 w-5/6 rounded-md">
                        <p className="text-center">
                            {ui.language === 'tr'
                                ? 'İstatistiklerinizi görmek için giriş yapmalısınız.'
                                : 'You must be logged in to see your statistics.'}
                        </p>
                        <FaLock className="text-gray-900 text-5xl" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Statistics;
