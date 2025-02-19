import React from 'react';
import Arrow from '../assets/arrow.png';

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center mb-[10rem] text-center">
      <h1 className="mb-[2rem] font-bold text-[20px]">Email (ComingSoon)</h1>
      <p className="mb-[2rem] text-[18px]">or</p>
      <p className="text-[18px]">You can contact in my social media</p>
      <img src={Arrow} alt="arrow" />
    </div>
  );
};

export default Contact;
