import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uiSlice from '@/store/slices/uiSlice';
import userSlice from '@/store/slices/userSlice';
import { RootState } from '@/store/store';
import { login, register } from '@/libs/auth';

const useLoginModalHandlers = () => {
    const dispatch = useDispatch();
    const ui = useSelector((state: RootState) => state.ui);

    const [isLoading, setIsLoading] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [inputValues, setInputValues] = useState({
        name: '',
        username: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState<string | null>('');

    const closeModal = () => {
        dispatch(uiSlice.actions.setIsLoginModalOpen(false));
    };

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.id]: e.target.value,
        });
    };

    const isLabelActive = (input: string) => {
        return inputValues[input as keyof typeof inputValues] !== '';
    };

    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        const { name, username, password } = inputValues;

        if (isRegistering && (!name || !username || !password)) {
            setErrorMessage('Please fill in all the fields to register.');
            return;
        } else if (!isRegistering && (!username || !password)) {
            setErrorMessage('Please fill in all the fields to log in.');
            return;
        }

        setIsLoading(true);

        try {
            if (isRegistering) {
                const response = await register(name, username, password);
                setIsLoading(false);
                console.log(response);
            } else {
                const response = await login(username, password);
                setIsLoading(false);
                console.log(response);
                localStorage.setItem('token', response.data.token);
                dispatch(userSlice.actions.setUser(response.data))

                dispatch(uiSlice.actions.setIsLoginModalOpen(false));
            }
            setErrorMessage(null);
        } catch (error) {
            console.error(
                isRegistering ? 'Registration error:' : 'Login error:',
                error
            );
            setIsLoading(false);
            setErrorMessage(
                isRegistering ? 'Registration failed.' : 'Login failed.'
            );
        }
    };

    return {
        ui,
        isLoading,
        isRegistering,
        inputValues,
        errorMessage,
        handleBackgroundClick,
        handleInputChange,
        isLabelActive,
        submitHandler,
        closeModal,
        setIsRegistering,
    };
};

export default useLoginModalHandlers;
