import React, { useState, useEffect } from 'react';
import { QUOTES } from './constants';
import { Quote } from './types';
import Wallpaper from './components/Wallpaper';

const App: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(QUOTES[0]);

  // Initialize: Pick quote based on Day of Year
  useEffect(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const day = Math.floor(diff / oneDay);
    
    // Use modulo to cycle through available quotes if < 366
    const quoteIndex = day % QUOTES.length;
    setCurrentQuote(QUOTES[quoteIndex]);
  }, []);

  return (
    <div 
      className="h-screen w-screen overflow-hidden" 
      style={{ width: '100vw', height: '100vh', overflow: 'hidden', margin: 0, padding: 0 }}
    >
      <Wallpaper quote={currentQuote} backgroundImage={null} />
    </div>
  );
};

export default App;