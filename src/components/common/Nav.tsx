import React, { useState } from 'react';

const Nav = () => {
    const [language, setLanguage] = useState('tr'); // Default language is Turkish

    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === 'tr' ? 'en' : 'tr'));
    };

    return (
        <div className="w-full bg-gray-100 h-20 flex items-center justify-between px-4">
            <button onClick={toggleLanguage} className="text-black">
                {language === 'tr' ? 'Türkçe' : 'English'}
            </button>
            <div className="text-black">
                {language === 'tr' ? 'Merhaba' : 'Hello'}
            </div>
            <button className="text-black">
                {language === 'tr' ? 'Giriş Yap' : 'Login'}
            </button>
        </div>
    );
};

export default Nav;
