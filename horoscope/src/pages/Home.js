import React from 'react';
import ZodiacCard from '../components/ZodiacCard';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const zodiacSigns = [
  { sign: 'aries', period: 'Mar 21 - Apr 19', icon: '/path/to/aries.png' },
  { sign: 'taurus', period: 'Apr 20 - May 20', icon: '/path/to/taurus.png' },
  // остальные знаки
];

const Home = ({ onZodiacClick }) => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <LanguageSwitcher />
      <div className="zodiac-grid">
        {zodiacSigns.map(({ sign, period, icon }) => (
          <ZodiacCard
            key={sign}
            sign={sign}
            period={period}
            icon={icon}
            onClick={onZodiacClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;