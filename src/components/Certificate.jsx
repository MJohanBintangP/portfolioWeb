import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certificate = () => {
  useEffect(() => {
    console.log('AOS initialized');
    AOS.init({
      duration: 1200,
      offset: 200,
      easing: 'ease-in-out',
      once: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <div className="mx-auto max-w-[1280px] mb-[6rem] px-4">
      <div
        className="flex flex-col lg:flex-row items-center text-white rounded-[20px] lg:rounded-[70px] h-auto lg:h-[700px] px-6 lg:px-[8rem] py-8"
        style={{
          background: 'linear-gradient(0deg, #252525 20%, #0C0C0C 100%)',
        }}
      >
        <div className="bg-transparent flex-1 mb-6 lg:mb-0 text-center lg:text-left">
          <h2 className="bg-transparent text-xl lg:text-2xl font-semibold mb-2">Course certificates</h2>
          <p className="bg-transparent text-gray-400 mb-4 text-sm lg:text-base">Click on a certificate to verify credential</p>
          <a href="https://bit.ly/courseCertificates" target="_blank" rel="noopener noreferrer" className="text-[12px] lg:text-sm bg-transparent text-white hover:underline transition font-medium">
            See all my certificates
          </a>
        </div>

        <div className="bg-transparent flex-1 flex justify-center relative mt-6 lg:mt-0" style={{ maxWidth: '1400px' }}>
          <img src="/certificate/dicoding-Flutter.png" alt="Certificate 1" data-aos="fade-up" data-aos-delay="0" className="bg-transparent w-full max-w-md lg:max-w-2xl rounded-[10px] transform -rotate-[1.55deg]" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
