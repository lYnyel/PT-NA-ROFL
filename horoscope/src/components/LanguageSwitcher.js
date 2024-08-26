import React from 'react';

const LanguageSwitcher = ({ setLanguage }) => {
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
};

export default LanguageSwitcher;