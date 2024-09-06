import Loading from '../common/Loading';

import Alerts from '../common/Alert';

import useLoginModalHandlers from '@/hooks/useLoginModalHandlers';
import { AnimatePresence, motion } from 'framer-motion';
import ModalHeader from './ModalHeader';
import { useEffect } from 'react';

const LoginModal = () => {
    const {
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
    } = useLoginModalHandlers();

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
                                        autoFocus
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
                                    className="bg-blue-500 w-36 h-12 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
