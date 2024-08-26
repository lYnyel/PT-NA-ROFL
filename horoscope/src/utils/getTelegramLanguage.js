export const getTelegramLanguage = () => {
    const telegramLanguage = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
    return telegramLanguage === 'ru' ? 'ru' : 'en';
  };