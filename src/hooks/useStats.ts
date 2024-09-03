import { useState, useEffect } from 'react';
import { getStats } from '@/libs/stats';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useStats = (userId: string | null) => {
    const [stats, setStats] = useState(null);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if (!userId) {
            setIsAuth(false);
            return;
        }

        const fetchStats = async () => {
            try {
                const data = await getStats(userId);
                setStats(data.stats);
                setIsAuth(true);
            } catch (err: any) {
                console.log(err);
            }
        };

        fetchStats();
    }, [userId]);

    return { stats, isAuth };
};
