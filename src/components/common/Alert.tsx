import { AlertProps } from '@/types/types';
import { useState } from 'react';

import React from 'react';

const Alert: React.FC<AlertProps> = ({ type, message, onClose }) => {
    const alertStyles: {
        [key: string]: {
            textColor: string;
            bgColor: string;
            icon: JSX.Element;
        };
    } = {
        info: {
            textColor: 'text-blue-800',
            bgColor: 'bg-blue-50',
            icon: (
                <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
            ),
        },
        danger: {
            textColor: 'text-red-800',
            bgColor: 'bg-red-50',
            icon: (
                <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
            ),
        },
        success: {
            textColor: 'text-green-800',
            bgColor: 'bg-green-50',
            icon: (
                <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
            ),
        },
        warning: {
            textColor: 'text-yellow-800',
            bgColor: 'bg-yellow-50',
            icon: (
                <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
            ),
        },
    };

    const currentStyle = alertStyles[type] || alertStyles.info;

    return (
        <div
            className={`flex items-center p-4 mb-4 text-sm ${currentStyle.textColor} rounded-lg ${currentStyle.bgColor}`}
            role="alert"
        >
            {currentStyle.icon}
            <div>
                <span className="font-medium">{message}</span>
            </div>
            <button
                onClick={onClose}
                className="ml-auto text-lg font-bold leading-none"
            >
                &times;
            </button>
        </div>
    );
};

const Alerts: React.FC<any> = ({ message }) => {
    const [showAlert, setShowAlert] = useState(true);

    return (
        <div className="mt-5">
            {showAlert && (
                <Alert
                    type="danger"
                    message={message}
                    onClose={() => setShowAlert(false)}
                />
            )}
        </div>
    );
};

export default Alerts;
