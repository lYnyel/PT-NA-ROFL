import Polyglot from 'node-polyglot';
import messages from './messages';

const initPolyglot = (locale) => {
  const polyglot = new Polyglot({
    locale,
    phrases: messages[locale] || messages.en, // fallback на английский
  });

  return polyglot;
};

export default initPolyglot;
