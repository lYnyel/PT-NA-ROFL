import React, { useContext } from 'react';
import ZodiacPage from './pages/ZodiacPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import { PolyglotContext } from './index';

const App = () => {
  const { polyglot, setLanguage } = useContext(PolyglotContext);

  const handleZodiacClick = (id) => {
    alert(`Clicked on ${id}`); // Замените это на логику показа описания знака
  };

  return (
    <div>
      <h1>{polyglot.t('appTitle', 'Zodiac Signs')}</h1>
      <LanguageSwitcher setLanguage={setLanguage} />
      <ZodiacPage onZodiacClick={handleZodiacClick} />
    </div>
  );
};

export default App;