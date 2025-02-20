import React, { useState } from 'react';
import Arrow from '../assets/arrow.png';

const Contact = () => {
  const email = 'm.johanbintang.pratama@gmail.com';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center mb-[11rem] text-center relative px-4 md:px-0">
      <h1 className="mb-[2rem] text-[20px]">Contact me with my email</h1>
      <div className="mb-[2rem] flex items-center justify-between bg-gray-200 rounded-full p-2 w-full max-w-md">
        <span className="bg-transparent text-gray-600 md:text-sm text-xs pl-4 break-all">{email}</span>
        <button onClick={copyToClipboard} className="bg-white font-semibold text-black text-[12px] px-6 py-2 md:py-4 rounded-full shadow-md hover:bg-gray-100 transition">
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <p className="mb-[3rem] text-[18px]">or</p>
      <div className="relative w-full flex flex-col items-center">
        <p className="text-[18px]">You can contact in my social media</p>
        <img src={Arrow} alt="arrow" className="w-32 md:w-48 h-auto bg-transparent absolute right-52 md:right-[26rem] mt-[3rem]" />
      </div>
    </div>
  );
};

export default Contact;
