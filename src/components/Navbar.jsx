import React, { useState } from 'react';
import { EnvelopeSimple, Clipboard, Check, List, X, LinkedinLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';

const Navbar = () => {
  const [iconState, setIconState] = useState('default');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleIconClick = () => {
    const email = 'm.johanbintang.pratama@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      setIconState('check');
      setTimeout(() => {
        setIconState('default');
      }, 1500);
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Navbar Container */}
      <div className="flex justify-between items-center h-[9rem] px-10 max-w-[1420px] mx-auto">
        {/* Email and Icon */}
        <div className="flex items-center gap-5 group cursor-pointer" onClick={handleIconClick}>
          <div className={`p-3 rounded-full border flex items-center justify-center transition duration-300 ${iconState === 'check' ? 'bg-white border-[#7A7A7A]' : 'border-[#7A7A7A]'}`}>
            {iconState === 'default' && (
              <>
                <EnvelopeSimple size={20} weight="bold" color="#D4D4D4" className="group-hover:hidden bg-transparent" />
                <Clipboard size={20} weight="bold" color="#D4D4D4" className="hidden group-hover:block bg-transparent" />
              </>
            )}
            {iconState === 'check' && <Check className="bg-transparent" size={20} weight="bold" color="#252525" />}
          </div>
          {/* Text email: Hidden on small screens */}
          <h4 className="hidden lg:block text-[#D4D4D4] text-[13px]">m.johanbintang.pratama@gmail.com</h4>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-[#D4D4D4] items-center text-[13px]">
          <li className="p-4 hover:text-white transition-colors duration-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mjohanbintangp/">
              LinkedIn
            </a>
          </li>
          <li>/</li>
          <li className="p-4 hover:text-white transition-colors duration-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mjohanbintangp/">
              Instagram
            </a>
          </li>
          <li>/</li>
          <li className="p-4 hover:text-white transition-colors duration-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@code.habits">
              Youtube
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer relative" onClick={toggleMenu}>
          <div className="relative w-6 h-6">
            <div className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-0 rotate-[135deg]' : 'opacity-100 rotate-0'}`}>
              <List size={25} weight="bold" color="#D4D4D4" />
            </div>
            <div className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[135deg]'}`}>
              <X size={25} weight="bold" color="#D4D4D4" />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-[7.5rem] px-2 py-6 right-10 bg-[#303030] rounded-[22px] z-50 transition-all duration-300">
          <ul className="text-[#ffffff] space-y-4 bg-transparent">
            {/* LinkedIn */}
            <li className="bg-transparent">
              <a className="bg-transparent flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#444444] transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mjohanbintangp/">
                <LinkedinLogo className="bg-transparent" size={20} weight="regular" />
                <h1 className="text-[13px] bg-transparent">LinkedIn</h1>
              </a>
            </li>

            {/* Instagram */}
            <li className="bg-transparent">
              <a className="bg-transparent flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#444444] transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mjohanbintangp/">
                <InstagramLogo className="bg-transparent" size={20} weight="regular" />
                <h1 className="text-[13px] bg-transparent">Instagram</h1>
              </a>
            </li>

            {/* YouTube */}
            <li className="bg-transparent">
              <a className="bg-transparent flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#444444] transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@code.habits">
                <YoutubeLogo className="bg-transparent" size={20} weight="regular" />
                <h1 className="text-[13px] bg-transparent">YouTube</h1>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
