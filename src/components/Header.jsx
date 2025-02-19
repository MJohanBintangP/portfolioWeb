import React, { useState } from 'react';
import { List, X, LinkedinLogo, InstagramLogo, YoutubeLogo } from '@phosphor-icons/react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="profile" className="relative md:mb-[10rem]">
      {/* Navbar Container */}
      <div className="flex justify-between items-center h-[9rem] px-10 max-w-[1420px] mx-auto">
        {/* Logo */}
        <h1 className="text-[#4B4B4B] text-[20px] font-semibold">mjohanbintangp</h1>
        {/* Desktop Navigation */}
        <ul className="hidden lg:flex text-[#252525] items-center text-[13px]">
          <li className="p-4 hover:text-[#d9d9d9] transition-colors duration-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mjohanbintangp/">
              LinkedIn
            </a>
          </li>
          <li>/</li>
          <li className="p-4 hover:text-[#d9d9d9] transition-colors duration-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mjohanbintangp/">
              Instagram
            </a>
          </li>
          <li>/</li>
          <li className="p-4 hover:text-[#d9d9d9] transition-colors duration-300">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@code.habits">
              Youtube
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden cursor-pointer relative" onClick={toggleMenu}>
          <div className="relative w-6 h-6">
            <div className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-0 rotate-[135deg]' : 'opacity-100 rotate-0'}`}>
              <List size={25} weight="bold" color="#252525" />
            </div>
            <div className={`absolute top-0 left-0 transition-all duration-500 ease-in-out ${menuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-[135deg]'}`}>
              <X size={25} weight="bold" color="#252525" />
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="backdrop-blur-lg absolute top-[7.5rem] px-2 py-6 right-10 bg-[#ffffff]/20 rounded-[22px] z-50 transition-all duration-300">
          <ul className="text-[#252525] space-y-4 bg-transparent">
            {/* LinkedIn */}
            <li className="bg-transparent">
              <a className="bg-transparent flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#ffffff] transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mjohanbintangp/">
                <LinkedinLogo className="bg-transparent" size={20} weight="regular" />
                <h1 className="text-[13px] bg-transparent">LinkedIn</h1>
              </a>
            </li>

            {/* Instagram */}
            <li className="bg-transparent">
              <a className="bg-transparent flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#ffffff] transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mjohanbintangp/">
                <InstagramLogo className="bg-transparent" size={20} weight="regular" />
                <h1 className="text-[13px] bg-transparent">Instagram</h1>
              </a>
            </li>

            {/* YouTube */}
            <li className="bg-transparent">
              <a className="bg-transparent flex items-center gap-3 px-4 py-2 rounded-md hover:bg-[#ffffff] transition-colors duration-200" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@code.habits">
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

export default Header;
