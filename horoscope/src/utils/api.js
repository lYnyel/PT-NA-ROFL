const API_URL = 'https://poker247tech.ru/get_horoscope/'; // Замените на ваш URL

export const fetchZodiacData = async (sign, language) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sign,
        language,
        period: 'today',
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching zodiac data:', error);
    return null;
  }
};
