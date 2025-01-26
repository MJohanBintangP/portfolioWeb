import React, { useState } from 'react';
import { DownloadSimple, Check } from '@phosphor-icons/react';

const Header = () => {
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
    <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-[6.5rem] bg-[#252525]">
      {/* Kontainer Teks */}
      <div className="flex flex-col max-w-full md:max-w-[500px] h-full w-full text-left md:text-left">
        <h1 className="text-[24px] md:text-[30px] font-semibold mb-[2px] text-[#FFFFFF]">MOCH. JOHAN BINTANG PRATAMA</h1>
        <h4 className="text-[16px] md:text-[18px] font-[300] text-[#FFFFFF] mb-[1.5rem]">Creating web and mobile applications has become my daily life;</h4>
        <button
          onClick={handleButtonClick}
          className={`inline-flex items-center gap-2 py-3 px-5 rounded-[15px] border text-[10px] md:text-[10px] ${
            iconState === 'clicked' ? 'bg-[#FFFFFF] text-[#252525] border-[#7A7A7A]' : 'bg-[#252525] text-white border-[#7A7A7A]'
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

export default Header;
