import Nav from '../common/Nav';
import Details from './Details';
import Statistics from './Statistics';
import WpmBox from './WpmBox';

import { setStats } from '@/libs/stats';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import runSlice from '@/store/slices/runSlice';
import statsSlice from '@/store/slices/statsSlice';

const ResultBox = () => {
    const run = useSelector((state: RootState) => state.run);
    const user = useSelector((state: RootState) => state.user);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!run.isFinished || !user.id) return;

        console.log(run.runID, run.isFinished, user.id, 'ne tetikliyor');

        const timeoutId = setTimeout(() => {
            dispatch(runSlice.actions.setIsFinished(true));

            const stats = async () => {
                console.log('çalıştı', run.trueCount, run.falseCount, run.wpm);
                const response = await setStats(
                    user.id,
                    run.trueCount,
                    run.falseCount,
                    run.trueCount + run.falseCount,
                    run.wpm
                );
                dispatch(runSlice.actions.resetRun())
                console.log(response, 'response');
                dispatch(statsSlice.actions.setRun(response.stats));
            };

            stats();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [run.runID, run.isFinished, user.id]);

    return (
        <div className="w-6/12 h-screen relative bg-slate-900">
            <Nav />
            <div className="flex justify-center ">
                <div className="w-5/6 flex text-4xl text-center mt-40 h-72 bg-slate-700 rounded-md shadow-xl">
                    <div className="flex flex-col w-1/2">
                        <WpmBox />
                        <Statistics />
                    </div>
                    <div className="w-1/2">
                        <Details />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;
