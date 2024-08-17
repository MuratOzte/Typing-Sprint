import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import uiSlice from '@/store/slices/uiSlice';
import runSlice from '@/store/slices/runSlice';

const Nav = () => {
    const dispatch = useDispatch();

    const ui = useSelector((state: RootState) => state.ui);
    const run = useSelector((state: RootState) => state.run);

    const toggleLanguage = (lang: 'tr' | 'en') => {
        dispatch(uiSlice.actions.setLanguage(lang));
    };

    const newGameHandler = () => {
        dispatch(runSlice.actions.setIsFinished(false));
    };

    return (
        <div className="w-full bg-gray-200 h-20 flex items-center justify-between px-4 mt-4 rounded-md shadow-lg">
            <div className="flex gap-5">
                <button onClick={() => toggleLanguage('en')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
                        alt="uk-flag"
                        className={`w-16 h-16 ${
                            ui.language === 'en' ? '' : 'grayscale'
                        }`}
                    />
                </button>
                <button onClick={() => toggleLanguage('tr')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
                        alt="turkey-flag"
                        className={`w-16 border-2 border-gray-300 ${
                            ui.language === 'tr' ? '' : 'grayscale'
                        }`}
                    />
                </button>
            </div>
            {run.isFinished && (
                <button
                    className="bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-700 transition-all ease duration-150 hover:scale-105"
                    onClick={newGameHandler}
                >
                    {ui.language === 'tr' ? 'Tekrar Oyna' : 'Play Again'}
                </button>
            )}
            <button className="text-white uppercase bg-gray-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                {ui.language === 'tr' ? 'Giriş Yap' : 'Login'}
            </button>
        </div>
    );
};

export default Nav;
