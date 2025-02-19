import React from 'react';
import ReactLogo from '../assets/reactLogo.png';
import TailwindLogo from '../assets/tailwindcssLogo.png';
import Flutter from '../assets/flutterLogo.png';
import Figma from '../assets/figmaLogo.png';

const Skill = () => {
  return (
    <div id="skill" className="max-w-[1300px] mx-auto text-white flex flex-col items-center justify-center px-4 sm:px-8 mb-[5rem]">
      <h1 className="text-[30px] text-[#252525] font-bold md:mb-[12rem] mb-[6rem]">Tech Skills</h1>
      <div className="flex flex-wrap justify-center gap-[12rem] w-full md:mb-[14rem] mb-[10rem]">
        {[
          { src: ReactLogo, alt: 'React Icon', link: 'https://reactjs.org/' },
          { src: TailwindLogo, alt: 'Tailwind Icon', link: 'https://tailwindcss.com/' },
          { src: Flutter, alt: 'Flutter Icon', link: 'https://flutter.dev/' },
          { src: Figma, alt: 'Figma Icon', link: 'https://www.figma.com/' },
        ].map(({ src, alt, link }, idx) => (
          <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center bg-transparent rounded-lg">
            <img src={src} alt={alt} className="object-contain w-full h-full opacity-25 hover:opacity-100 transition-opacity duration-300" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skill;
