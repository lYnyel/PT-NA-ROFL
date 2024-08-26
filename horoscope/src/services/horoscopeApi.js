import axios from 'axios';

export const fetchHoroscope = async (sign, language = 'original') => {
  const response = await axios.post('https://api.example.com/horoscope', {
    sign,
    language,
    period: 'today',
  });
  return response.data;
};