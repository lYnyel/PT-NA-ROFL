import React from 'react';
import { useTranslation } from 'react-i18next';

const HoroscopeDetail = ({ description, onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="horoscope-detail">
      <button onClick={onBack}>{t('back')}</button>
      <p>{description}</p>
    </div>
  );
};

export default HoroscopeDetail;