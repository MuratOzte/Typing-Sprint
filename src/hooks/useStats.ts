// src/hooks/useStats.ts
import { useState, useEffect } from 'react';
import { getStats } from '@/libs/stats';
import { Stats } from '@/types/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useStats = () => {
    const [stats, setStats] = useState<Stats | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isAuth, setIsAuth] = useState<boolean>(false);

    const run = useSelector((state: RootState) => state.run);
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        if (user.id) {
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    }, [user.id]);
    //!BUG 
    useEffect(() => {
        console.log('run.isFinished:', run.isFinished);
        if (user.id) {
            const fetchStats = async () => {
                try {
                    setIsLoading(true);
                    console.log('user.id:', user.id);
                    const data = await getStats(user.id);
                    console.log('data:', data, 'stats:', run.isFinished);
                    setIsAuth(true);
                    setIsLoading(false);
                    setStats(data.stats);
                } catch (error) {
                    setIsLoading(false);
                    console.error(error);
                    setIsAuth(false);
                }
            };

            fetchStats();
        }
    }, [user.id, run.isFinished, run.trueCount, run.falseCount, run.wpm]);

    return { stats, isAuth, isLoading };
};
