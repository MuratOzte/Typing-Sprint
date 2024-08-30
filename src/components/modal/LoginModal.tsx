import uiSlice from '@/store/slices/uiSlice';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '@/libs/auth';

const LoginModal = () => {
    const dispatch = useDispatch();
    const ui = useSelector((state: RootState) => state.ui);

    const [inputValues, setInputValues] = useState({
        username: '',
        password: '',
    });

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

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        login(inputValues.username, inputValues.password);
    };

    return (
        <>
            {ui.isLoginModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    onClick={handleBackgroundClick}
                >
                    <div className="bg-slate-300 rounded-lg p-6 max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold text-slate-700">
                                Login / Register
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-600 hover:text-gray-900"
                            >
                                &#x2715; {/* Close icon */}
                            </button>
                        </div>
                        <form>
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
                            <div className="flex items-center justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={submitHandler}
                                >
                                    Login
                                </button>
                                <a
                                    href="#"
                                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginModal;
