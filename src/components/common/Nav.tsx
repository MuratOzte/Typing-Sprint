import React, { useState } from 'react';

const Nav = () => {
    const [language, setLanguage] = useState('tr');

    const toggleLanguage = (lang: 'tr' | 'en') => {
        setLanguage(lang);
    };

    return (
        <div className="w-full bg-gray-100 h-20 flex items-center justify-between px-4">
            <div className="flex gap-5">
                <button onClick={() => toggleLanguage('tr')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
                        alt="turkey-flag"
                        className={`w-16 border-2 border-gray-300 ${
                            language === 'tr' ? '' : 'grayscale'
                        }`}
                    />
                </button>
                <button onClick={() => toggleLanguage('en')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
                        alt="uk-flag"
                        className={`w-16 h-16 ${
                            language === 'en' ? '' : 'grayscale'
                        }`}
                    />
                </button>
            </div>
            <button className="text-white uppercase bg-gray-600 px-4 py-2 rounded-lg shadow-md hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105">
                {language === 'tr' ? 'Giriş Yap' : 'Login'}
            </button>
        </div>
    );
};

export default Nav;
