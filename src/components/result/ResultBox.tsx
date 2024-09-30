import Nav from '../common/Nav';
import Details from './Details';
import Statistics from './Statistics';
import WpmBox from './WpmBox';

import { setStats } from '@/libs/stats';
import { setLeaderboard } from '@/libs/leaderboard';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import runSlice from '@/store/slices/runSlice';
import statsSlice from '@/store/slices/statsSlice';

const ResultBox = () => {
    const run = useSelector((state: RootState) => state.run);
    const user = useSelector((state: RootState) => state.user);
    const ui = useSelector((state: RootState) => state.ui);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!run.isFinished || !user.id) return;

        const timeoutId = setTimeout(() => {
            dispatch(runSlice.actions.setIsFinished(true));

            const stats = async () => {
                const response = await setStats(
                    user.id,
                    run.trueCount,
                    run.falseCount,
                    run.trueCount + run.falseCount,
                    run.wpm
                );
                dispatch(statsSlice.actions.setRun(response.stats));
            };

            const leaderboard = async () => {
                const response = await setLeaderboard(
                    user.id,
                    run.wpm,
                    user.name
                );
                console.log('leaderboard:', response);
            };

            stats();
            leaderboard();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [user.id, ui.isResultScreen]);

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
