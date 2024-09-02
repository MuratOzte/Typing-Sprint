import uiSlice from '@/store/slices/uiSlice';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login, register } from '@/libs/auth';
import Loading from '../common/Loading';

import Alerts from '../common/Alert';

import { motion, AnimatePresence } from 'framer-motion';
import ModalHeader from './ModalHeader';

const LoginModal = () => {
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

    return (
        <AnimatePresence>
            {ui.isLoginModalOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    onClick={handleBackgroundClick}
                >
                    <div className="bg-slate-300 rounded-lg p-6 max-w-lg w-full">
                        <ModalHeader
                            closeModal={closeModal}
                            isRegistering={isRegistering}
                        />

                        <form>
                            {isRegistering && (
                                <div className="relative my-8">
                                    <input
                                        type="text"
                                        id="name"
                                        value={inputValues.name}
                                        onChange={handleInputChange}
                                        className="h-10 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`absolute left-3 text-gray-700 transition-all duration-200 ease-in-out ${
                                            isLabelActive('name') ||
                                            inputValues.name
                                                ? '-translate-y-5 text-sm'
                                                : 'translate-y-2.5'
                                        }`}
                                    >
                                        Name
                                    </label>
                                </div>
                            )}
                            <div className="relative my-8">
                                <input
                                    type="text"
                                    id="username"
                                    value={inputValues.username}
                                    onChange={handleInputChange}
                                    className="h-10 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="username"
                                    className={`absolute left-3 text-gray-700 transition-all duration-200 ease-in-out ${
                                        isLabelActive('username') ||
                                        inputValues.username
                                            ? '-translate-y-5 text-sm'
                                            : 'translate-y-2.5'
                                    }`}
                                >
                                    Username
                                </label>
                            </div>
                            <div className="relative mb-4">
                                <input
                                    type="password"
                                    id="password"
                                    value={inputValues.password}
                                    onChange={handleInputChange}
                                    className="h-10 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-500"
                                />
                                <label
                                    htmlFor="password"
                                    className={`absolute left-3 text-gray-700 transition-all duration-200 ease-in-out ${
                                        isLabelActive('password') ||
                                        inputValues.password
                                            ? '-translate-y-5 text-sm'
                                            : 'translate-y-2.5'
                                    }`}
                                >
                                    Password
                                </label>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={submitHandler}
                                >
                                    {isLoading ? (
                                        <Loading />
                                    ) : isRegistering ? (
                                        'Register'
                                    ) : (
                                        'Login'
                                    )}
                                </button>
                                <a
                                    href="#"
                                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="text-blue-500 hover:text-blue-800"
                                    onClick={() =>
                                        setIsRegistering(!isRegistering)
                                    }
                                >
                                    {isRegistering
                                        ? 'Already have an account? Login'
                                        : "Don't have an account? Register"}
                                </button>
                            </div>
                        </form>
                        {errorMessage && <Alerts message={errorMessage} />}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoginModal;
