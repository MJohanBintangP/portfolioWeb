import React, { useState } from 'react';
import { DownloadSimple, Check } from '@phosphor-icons/react';
import Johan from '../assets/fotoJohan.png';

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
    <div className="md:mb-[5rem] mb-[0rem] max-w-[1550px] mx-auto flex flex-col justify-between md:flex-row items-center px-10 md:px-[6.5rem]">
      {/* Kontainer Teks */}
      <div className="flex flex-col max-w-full md:max-w-[600px] text-left md:text-left">
        <h1 className="text-[20px] md:text-[25px] font-semibold mb-[2px] text-[#252525]">Junior Frontend Developer</h1>
        <p className="text-[12px] md:text-[15px] font-light text-[#252525] mb-[1.5rem]">
          I am an active student at Telkom University Surabaya from Informatics. Having expertise in programming especially Front-end using reactJS and Tailwind CSS. I have high enthusiasm, a sense of responsibility to work professionally
          and fast adaptability, I also have expertise in UI/UX using figma and mobile development using flutter.
        </p>
        <button
          onClick={handleButtonClick}
          className={`inline-flex items-center gap-2 py-3 px-5 rounded-[15px] border font-semibold text-[10px] md:text-[10px] ${
            iconState === 'clicked' ? 'bg-[#FFFFFF] text-[#252525] border-[#7A7A7A]' : 'bg-[#ffffff] text-[#252525] border-[#7A7A7A]'
          } transition-all duration-500 ease-in-out`}
          onMouseEnter={() => iconState === 'default' && setIconState('hover')}
          onMouseLeave={() => iconState === 'hover' && setIconState('default')}
          style={{ width: '120px', justifyContent: 'center', height: '40px', position: 'relative', zIndex: 10 }}
        >
          {iconState === 'clicked' ? <Check size={16} weight="bold" className="bg-transparent" /> : iconState === 'hover' ? <DownloadSimple size={16} weight="bold" className="bg-transparent" /> : 'Download CV'}
        </button>
      </div>

      <div className="relative flex flex-col items-center md:items-start mt-10 md:mt-0">
        {/* Status */}
        <div className=" bg-transparent absolute top-2 left-0 md:left-10 translate-x-[50%] md:translate-x-36 -translate-y-1/2 flex items-center space-x-2 z-10">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="bg-transparent text-sm font-medium text-black">Open to internship</span>
        </div>

        {/* Card */}
        <div className="mb-[5rem] -rotate-2 relative flex flex-col items-center w-[220px] p-4 bg-[#F5F5F5] rounded-[35px] md:mr-[8rem]">
          {/* Foto Profil */}
          <div className="w-[185px] h-[220px] mb-[1.2rem] rounded-[25px] overflow-hidden">
            <img src={Johan} alt="Profile" className="w-full h-full object-cover" />
          </div>

          {/* Lokasi */}
          <div className="px-12 py-2 mb-1.5 rounded-full bg-[#E8E8E8]">
            <span className="bg-transparent flex justify-center items-center font-medium text-[8px] text-[#808080]">Surabaya, East Java</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
