import Nav from '../main/Nav';
import Detail from './Detail';
import Statistics from './Statistics';
import WpmBox from './WpmBox';

const ResultBox = () => {
    return (
        <div className="w-6/12 h-screen relative">
            <Nav />
            <div className="flex justify-center ">
                <div className="w-5/6 flex text-4xl text-center mt-40 h-64 bg-slate-300 rounded-md shadow-xl">
                    <div className="flex flex-col w-2/3">
                        <WpmBox wpm={120} />
                        <Statistics />
                        <Detail />
                    </div>
                    <div className="w-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;
