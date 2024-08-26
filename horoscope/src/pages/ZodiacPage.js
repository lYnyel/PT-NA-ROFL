// src/pages/ZodiacPage.js
import React from 'react';
import ZodiacBlock from '../components/ZodiacBlock';
import { zodiacSigns } from '../data/zodiacSigns';

const ZodiacPage = ({ onZodiacClick }) => (
  <div className="zodiac-page">
    {zodiacSigns.map(sign => (
      <ZodiacBlock key={sign.id} sign={sign} onClick={onZodiacClick} />
    ))}
  </div>
);

export default ZodiacPage;
