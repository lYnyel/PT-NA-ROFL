// src/i18n/index.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Подключение react-i18next
  .init({
    resources: {
      en: {
        translation: {
          zodiac: {
            aries: 'Aries',
            taurus: 'Taurus',
            // остальные знаки
          },
          back: 'Back',
          // остальные переводы
        },
      },
      ru: {
        translation: {
          zodiac: {
            aries: 'Овен',
            taurus: 'Телец',
            // остальные знаки
          },
          back: 'Назад',
          // остальные переводы
        },
      },
    },
    lng: 'en', // Установите язык по умолчанию
    fallbackLng: 'en', // Язык по умолчанию, если текущий язык недоступен
    interpolation: {
      escapeValue: false, // React уже экранирует значения
    },
  });

export default i18n;
