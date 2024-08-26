import React, { useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initPolyglot from './i18n';
import './styles/zodiac.css';

const PolyglotContext = createContext();

const Root = () => {
  const [language, setLanguage] = useState(navigator.language.split(/[-_]/)[0]);
  const polyglot = initPolyglot(language);

  return (
    <PolyglotContext.Provider value={{ polyglot, setLanguage }}>
      <App />
    </PolyglotContext.Provider>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Root />);

export { PolyglotContext };