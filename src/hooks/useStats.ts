// src/hooks/useStats.ts
import { useState, useEffect } from 'react';
import { getStats } from '@/libs/stats';
import { Stats } from '@/types/types';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useStats = (userId: string | null) => {
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

    useEffect(() => {
        if (userId) {
            const fetchStats = async () => {
                try {
                    setIsLoading(true);
                    const data = await getStats(userId);
                    setStats(data.stats);
                    setIsAuth(true);
                    setIsLoading(false);
                } catch (error) {
                    setIsLoading(false);
                    console.error(error);
                    setIsAuth(false);
                }
            };

            fetchStats();
        }
    }, [userId, run.isFinished]);

    return { stats, isAuth, isLoading };
};
