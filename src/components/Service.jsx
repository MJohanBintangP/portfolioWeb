import React from 'react';
import { DeviceMobileSpeaker, Desktop, CirclesThreePlus } from '@phosphor-icons/react';

const Service = () => {
  return (
    <div id="service" className="max-w-[1800px] mx-auto md:mb-[15rem] mb-[6rem] px-4 md:px-8">
      <div className="flex justify-center mb-[5rem]">
        <h1 className="max-w-[480px] text-[#252525] text-center font-medium text-[18px] md:text-[20px]">I can always fulfill the wishes of users to develop their applications, I am happy to see them happy</h1>
      </div>

      <div className="flex justify-center mb-[6rem]">
        <div className="relative w-full max-w-[1300px]">
          <hr className="border-[#252525] w-full absolute top-1/2 transform -translate-y-1/2" />
          <span className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-[#252525] px-4 py-2 md:px-8 md:py-2 text-white font-medium text-[13px] md:text-[15px] rounded-full z-10 -rotate-7">Services</span>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left text-white">
        <div>
          <DeviceMobileSpeaker size={35} weight="bold" className="mb-4 mx-auto md:mx-0 text-[#252525]" />
          <h2 className="font-medium text-[20px] md:text-[22px] text-[#252525] text-center md:text-left mb-4 md:mb-4">Mobile App Development</h2>
          <p className=" text-[15px] md:text-[17px] text-[#7F7F7F] text-center md:text-left">Create mobile applications that are easy to use, compatible, and visually appealing.</p>
        </div>

        <div>
          <Desktop size={35} weight="bold" className="mb-4 mx-auto md:mx-0 text-[#252525]" />
          <h2 className="font-medium text-[20px] md:text-[22px] text-[#252525] text-center md:text-left mb-4 md:mb-4">Web App Development</h2>
          <p className="text-[15px] md:text-[17px] text-[#7F7F7F] text-center md:text-left">Build web applications that combine form and function, and build them in a responsive way.</p>
        </div>

        <div>
          <CirclesThreePlus size={35} weight="bold" className="mb-4 mx-auto md:mx-0 text-[#252525]" />
          <h2 className="font-medium text-[20px] md:text-[22px] text-[#252525] text-center md:text-left mb-4 md:mb-4">Mobile App and Web App Design</h2>
          <p className="text-[15px] md:text-[17px] text-[#7F7F7F] text-center md:text-left">Create an attractive and prominent user interface that differentiates your product from others.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
