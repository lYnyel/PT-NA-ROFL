// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HoroscopePage from './pages/HoroscopePage';

const App = () => {
  const [selectedSign, setSelectedSign] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home onZodiacClick={setSelectedSign} />} />
        <Route path="/horoscope" element={<HoroscopePage sign={selectedSign} onBack={() => setSelectedSign(null)} />} />
      </Routes>
    </Router>
  );
};

export default App;
