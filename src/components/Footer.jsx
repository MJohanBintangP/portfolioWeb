import React from 'react';

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
      <hr className="border-[#252525]" />
      <div className="flex flex-col sm:flex-row items-center justify-between py-6">
        {/* Bagian Kiri (Copyright) */}
        <div className="text-[#252525] font-medium text-[15px] text-center sm:text-left mb-4 sm:mb-0">
          <h1>© 2025 mjohanbintangp.</h1>
          <h2>made by me.</h2>
        </div>
        {/* Bagian Kanan (Social Media) */}
        <div className="flex text-[#252525] items-center text-[13px] space-x-2 sm:space-x-4">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mjohanbintangp/" className="hover:text-[#d9d9d9] transition-colors duration-300">
            LinkedIn
          </a>
          <span>/</span>
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mjohanbintangp/" className="hover:text-[#d9d9d9] transition-colors duration-300">
            Instagram
          </a>
          <span>/</span>
          <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@code.habits" className="hover:text-[#d9d9d9] transition-colors duration-300">
            Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
