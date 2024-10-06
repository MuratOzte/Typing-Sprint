export const login = async (email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Login failed');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error during login:', err);
        throw err;
    }
};

export const register = async (name: string, email: string, password: string) => {
    try {
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || 'Registration failed');
        }

        const data = await response.json();
        login(email, password);
        return data;
    } catch (err) {
        console.error('Error during registration:', err);
        throw err;
    }
};

