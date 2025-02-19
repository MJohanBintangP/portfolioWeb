import React, { useState, useEffect } from 'react';
import { User, BagSimple, Certificate, Desktop, EnvelopeSimple, Code } from '@phosphor-icons/react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const sections = ['profile', 'portfolio', 'service', 'certificate', 'skill', 'contact'];

    const handleScrollEvent = () => {
      let currentSection = null;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            currentSection = id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    handleScrollEvent();
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, [activeSection]);

  return (
    <nav className="z-[9999] mb-[2rem] fixed bottom-0 left-0 right-0 mx-auto bg-[#DEDEDE]/20 backdrop-blur-lg p-2 rounded-full w-[90%] max-w-[350px]">
      <ul className="flex justify-center gap-8 items-center px-2 py-2 bg-transparent">
        {[
          { id: 'profile', Icon: User },
          { id: 'portfolio', Icon: BagSimple },
          { id: 'service', Icon: Desktop },
          { id: 'certificate', Icon: Certificate },
          { id: 'skill', Icon: Code },
          { id: 'contact', Icon: EnvelopeSimple },
        ].map(({ id, Icon }) => (
          <li key={id} className="bg-transparent relative flex items-center">
            {activeSection === id && <div className=" absolute -top-4 left-1/2 transform -translate-x-1/2 w-5 h-0.5 bg-[#5830FF] rounded-b-full"></div>}
            <button onClick={() => handleScroll(id)} className={`bg-transparent transition-colors duration-300 ${activeSection === id ? 'text-[#5830FF]' : 'text-[#CFCFCF]'} hover:text-[#5830FF]`}>
              <Icon className="bg-transparent" size={20} weight="bold" />
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
