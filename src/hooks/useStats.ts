// src/hooks/useStats.ts
import { useState, useEffect } from 'react';
import { getStats } from '@/libs/stats';
import { Stats } from '@/types/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useDispatch } from 'react-redux';
import statsSlice from '@/store/slices/statsSlice';

export const useStats = () => {
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const run = useSelector((state: RootState) => state.run);
    const user = useSelector((state: RootState) => state.user);
    const ui = useSelector((state: RootState) => state.ui);
    const stats = useSelector((state: RootState) => state.stats);

    useEffect(() => {
        if (user.id) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [user.id]);
    //!BUG
    useEffect(() => {
        console.log('run.isFinished');
        if (user.id) {
            const fetchStats = async () => {
                try {
                    setIsLoading(true);
                    const data = await getStats(user.id);
                    setIsAuth(true);
                    setIsLoading(false);
                    dispatch(statsSlice.actions.setRun(data.stats));
                } catch (error) {
                    setIsLoading(false);
                    console.error(error);
                    setIsAuth(false);
                }
            };

            fetchStats();
        }
    }, [user.id, ui.isResultScreen]);

    return { stats, isAuth, isLoading };
};
