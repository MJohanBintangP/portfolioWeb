import React, { useEffect, useState, useRef } from 'react';
import linkedin from '../assets/linkedin.png';
import vscode from '../assets/code.png';
import instagram from '../assets/instagram.png';
import youtube from '../assets/youtube.png';
import figma from '../assets/figma.png';

const Tools = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`relative bg-[#1C1C1C] flex justify-center items-center h-[120px] ${isSmallScreen ? 'overflow-x-auto' : ''}`}>
      {' '}
      {/* Enable horizontal scrolling on small screens */}
      <div
        ref={containerRef}
        className={`flex gap-[10rem] justify-center items-center bg-transparent min-w-max`}
        onWheel={(e) => {
          if (isSmallScreen) {
            e.preventDefault();
            containerRef.current.scrollBy({
              left: e.deltaY > 0 ? 100 : -100,
              behavior: 'smooth',
            });
          }
        }}
      >
        {/* LinkedIn */}
        <img src={linkedin} alt="LinkedIn" className="h-7 opacity-30 bg-transparent" />

        {/* VS Code */}
        <img src={vscode} alt="VS Code" className="h-7 opacity-30 bg-transparent" />

        {/* Instagram */}
        <img src={instagram} alt="Instagram" className="h-9 opacity-30 bg-transparent" />

        {/* YouTube */}
        <img src={youtube} alt="YouTube" className="h-[70px] opacity-30 bg-transparent" />

        {/* Figma */}
        <img src={figma} alt="Figma" className="h-7 opacity-30 bg-transparent" />
      </div>
    </div>
  );
};

export default Tools;
