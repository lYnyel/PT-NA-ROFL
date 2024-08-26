import React, { useContext } from 'react';
import { PolyglotContext } from '../index';

const Home = ({ onZodiacClick }) => {
  const { polyglot } = useContext(PolyglotContext);

  return (
    <div>
      <h1>{polyglot.t('zodiac.aries')}</h1>
      <button onClick={() => onZodiacClick('aries')}>Select Aries</button>
      {}
    </div>
  );
};

export default Home;
