export const setLeaderboard = async (
    id: string | null,
    wpm: number,
    userName: string | null
) => {
    if (!id) {
        throw new Error('User ID is missing');
    }

    try {
        const response = await fetch(
            'http://localhost:3000/api/set-leaderboard',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id, wpm, userName }),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Setting leaderboard failed');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error during setting leaderboard:', err);
        throw err;
    }
};

export const getLeaderboard = async () => {
    try {
        const response = await fetch(
            'http://localhost:3000/api/get-leaderboard',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Getting leaderboard failed');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error during getting leaderboard:', err);
        throw err;
    }
};
