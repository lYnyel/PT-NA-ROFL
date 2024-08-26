// src/components/ZodiacBlock.js
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { PolyglotContext } from '../index';
import { fetchZodiacData } from '../utils/api';

const ZodiacBlock = ({ sign, onClick }) => {
  const { polyglot } = useContext(PolyglotContext);
  const [description, setDescription] = useState(null);

  const handleClick = async () => {
    onClick(sign.id); 
    const lang = polyglot.locale();
    const data = await fetchZodiacData(sign.id, lang === 'ru' ? 'original' : 'translated');
    setDescription(data?.description); 
  };

  return (
    <div className="zodiac-block" onClick={handleClick}>
      <div className="zodiac-icon">{sign.icon}</div>
      <div className="zodiac-name">{polyglot.t(`zodiac.${sign.id}`, sign.name)}</div>
      <div className="zodiac-period">{sign.period}</div>
      {description && <div className="zodiac-description">{description}</div>}
    </div>
  );
};

ZodiacBlock.propTypes = {
  sign: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ZodiacBlock;
