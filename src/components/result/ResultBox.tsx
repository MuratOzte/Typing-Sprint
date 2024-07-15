import Nav from '../main/Nav';
import Statistics from './Statistics';
import WpmBox from './WpmBox';

const ResultBox = () => {
    return (
        <div className="w-6/12 h-screen relative">
            <Nav />
            <div className="flex justify-center">
                <div className="flex text-4xl text-center mt-40 w-5/6 h-64 bg-slate-300 rounded-md shadow-xl">
                    <div className="flex w-full flex-col">
                        <WpmBox wpm={120} />
                        <Statistics />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;
