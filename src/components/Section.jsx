import React, { useState } from 'react';
import { DownloadSimple, Check } from '@phosphor-icons/react';

const Section = () => {
  const [iconState, setIconState] = useState('default');

  const handleButtonClick = () => {
    setIconState('clicked');
    const link = document.createElement('a');
    link.href = '/MOCH JOHAN BINTANG PRATAMA CV 2025.pdf';
    link.download = 'CV JANUARI 2025 - MOCH.JOHAN BINTANG PRATAMA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setIconState('default');
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-[6.5rem]">
      {/* Kontainer Teks */}
      <div className="flex flex-col max-w-full md:max-w-[600px] h-full w-full text-left md:text-left">
        <h1 className="text-[20px] md:text-[25px] font-semibold mb-[2px] text-[#252525]">Junior Front-end Developer</h1>
        <p className="text-[12px] md:text-[15px] font-light text-[#252525] mb-[1.5rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae consequat odio. Vestibulum at dui nibh. In ac mauris eget eros pretium scelerisque. Sed gravida, orci mollis suscipit ultrices, metus massa ornare metus, sed
          venenatis ex ipsum id dolor. Integer nec erat iaculis, aliquet sem non, euismod justo.
        </p>
        <button
          onClick={handleButtonClick}
          className={`inline-flex items-center gap-2 py-3 px-5 rounded-[15px] border font-semibold text-[10px] md:text-[10px] ${
            iconState === 'clicked' ? 'bg-[#FFFFFF] text-[#252525] border-[#7A7A7A]' : 'bg-[#ffffff] text-[#252525] border-[#7A7A7A]'
          } transition-all duration-500 ease-in-out`}
          onMouseEnter={() => iconState === 'default' && setIconState('hover')}
          onMouseLeave={() => iconState === 'hover' && setIconState('default')}
          style={{ width: '120px', justifyContent: 'center', height: '40px', position: 'relative', zIndex: 10 }} // Tambahkan z-index dan position
        >
          {iconState === 'clicked' ? <Check size={16} weight="bold" className="bg-transparent" /> : iconState === 'hover' ? <DownloadSimple size={16} weight="bold" className="bg-transparent" /> : 'Download CV'}
        </button>
      </div>

      {/* Gambar dan kontainer div */}
      <div className="max-w-full md:max-w-[400px] w-full bg-[#454545] rounded-[50px] px-[2rem] relative mb-[2rem] mt-[6rem] image-container">
        <img src="/toji.png" alt="profileBranding" className="w-full h-auto object-contain bg-transparent -mt-[7rem] md:-mt-40" />
      </div>
    </div>
  );
};

export default Section;
