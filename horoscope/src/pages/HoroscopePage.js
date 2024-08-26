import React, { useState, useEffect } from 'react';
import HoroscopeDetail from '../components/HoroscopeDetail';
import { fetchHoroscope } from '../services/horoscopeApi';

const HoroscopePage = ({ sign, onBack }) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchHoroscope(sign).then((data) => setDescription(data.description));
  }, [sign]);

  return <HoroscopeDetail description={description} onBack={onBack} />;
};

export default HoroscopePage;