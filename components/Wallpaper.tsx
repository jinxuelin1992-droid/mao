import React, { useRef, useEffect, useState } from 'react';
import { Quote } from '../types';
import { DEFAULT_BG_COLOR, DEFAULT_TEXT_COLOR, CITATION_COLOR } from '../constants';

interface WallpaperProps {
  quote: Quote;
  backgroundImage: string | null;
  onImageReady?: (base64: string) => void;
}

const Wallpaper: React.FC<WallpaperProps> = ({ quote, backgroundImage, onImageReady }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: YYYY年MM月DD日 星期X HH:mm
      const datePart = now.toLocaleDateString('zh-CN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        weekday: 'long' 
      });
      const timePart = now.toLocaleTimeString('zh-CN', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit' 
      });
      setCurrentTime(`${datePart} ${timePart}`);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex flex-col items-center justify-center p-12 overflow-hidden"
      style={{
        backgroundColor: backgroundImage ? 'transparent' : DEFAULT_BG_COLOR,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        boxSizing: 'border-box'
      }}
    >
      {/* Overlay to ensure text readability on complex generated images */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}

      {/* Clock Display - Top Right, size matched to citation */}
      <div className="absolute top-8 right-8 z-20">
         <p 
           className="text-2xl md:text-3xl font-serif tracking-widest text-white/90 drop-shadow-lg"
           style={{ 
             fontSize: '1.5rem', // Match citation base size
             fontWeight: 500     // Match citation weight
           }}
         >
           {currentTime}
         </p>
      </div>

      <div className="relative z-10 w-full max-w-5xl space-y-12">
        {/* Quote Content 
            - Yellow text (from constants)
            - First line indent 2 chars (indent-8 approx 2em in tailwind)
            - Left aligned (to satisfy "last line do not center")
        */}
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold leading-relaxed tracking-wide drop-shadow-md text-left indent-[2em]"
          style={{ 
            color: DEFAULT_TEXT_COLOR, 
            textIndent: '2em',
            textAlign: 'left',
            lineHeight: '1.6',
            marginBottom: '3rem',
            fontSize: 'min(4vw, 3.5rem)' /* Responsive font size fallback */
          }}
        >
          {quote.content}
        </h1>

        {/* Citation and Date 
             - Original requirement: "use dash and book title marks"
        */}
        <div 
          className="flex flex-col items-end space-y-4 pr-4"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '1rem',
            paddingRight: '1rem'
          }}
        >
          <p
            className="text-2xl md:text-3xl font-medium tracking-wider"
            style={{ color: CITATION_COLOR, fontSize: '1.5rem', margin: 0 }}
          >
            —— {quote.source}
          </p>
          <p
            className="text-xl opacity-90"
            style={{ color: CITATION_COLOR, fontSize: '1.25rem', margin: 0, opacity: 0.9 }}
          >
            {quote.year}
          </p>
        </div>
      </div>

      {/* Decorative corners (Traditional Chinese aesthetic) */}
      <div style={{ position: 'absolute', top: '1rem', left: '1rem', width: '6rem', height: '6rem', borderTop: '4px solid #ffde00', borderLeft: '4px solid #ffde00', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', width: '6rem', height: '6rem', borderTop: '4px solid #ffde00', borderRight: '4px solid #ffde00', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', width: '6rem', height: '6rem', borderBottom: '4px solid #ffde00', borderLeft: '4px solid #ffde00', opacity: 0.5 }} />
      <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', width: '6rem', height: '6rem', borderBottom: '4px solid #ffde00', borderRight: '4px solid #ffde00', opacity: 0.5 }} />
    </div>
  );
};

export default Wallpaper;