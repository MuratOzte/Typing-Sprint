export const getStats = async (id: string | null) => {
    if (!id) {
        throw new Error('User ID is missing');
    }
    console.log('id:', id);
    try {
        const response = await fetch('http://localhost:3000/api/get-stats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Getting stats failed');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error during getting stats:', err);
        throw err;
    }
};

export const setStats = async (
    id: string | null,
    trueWord: number,
    falseWord: number,
    totalTypedWords: number,
    score: number
) => {
    if (!id) {
        throw new Error('User ID is missing');
    }
    console.log('id:', id);
    try {
        const response = await fetch('http://localhost:3000/api/set-stats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                trueWord,
                falseWord,
                totalTypedWords,
                score,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Setting stats failed');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error during setting stats:', err);
        throw err;
    }
};
