import React from 'react';
import { useTranslation } from 'react-i18next';

const ZodiacCard = ({ sign, period, icon, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="zodiac-card" onClick={() => onClick(sign)}>
      <img src={icon} alt={t(`zodiac.${sign}`)} />
      <h3>{t(`zodiac.${sign}`)}</h3>
      <p>{period}</p>
    </div>
  );
};

export default ZodiacCard;