import React from 'react';
import mindeaseLogo from '../assets/mindease.png';
import agrisync from '../assets/agrisync.png';
import logilink from '../assets/logilink.png';
import flexnative from '../assets/Flexnative.png';
import { Link } from 'react-router-dom';
import ScrollFloat from './ScrollFloat';

const Portfolio = () => {
  return (
    <div id="portfolio" className="md:mb-[15rem] mb-[6rem] px-[50px] max-w-[1800px] flex justify-center">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-[30px] text-[#252525]">
            <ScrollFloat animationDuration={1} ease="back.inOut(2)" scrollStart="center bottom+=50%" scrollEnd="bottom bottom-=40%" stagger={0.03}>
              Portfolio
            </ScrollFloat>
          </h1>
          <p className="text-[#494949] text-[15px] md:mb-[5rem] mb-[3rem] text-center max-w-[530px]">I'm proud of the projects I've worked on, and I'm very open to those of you who want to see my projects, I mostly make website projects</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Card 1 */}
          <div>
            <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] relative bg-[#ffffff] w-[300px] h-[300px] rounded-[50px] overflow-hidden group">
              <Link to="/MindEase">
                <img src={mindeaseLogo} alt="mindeaseLogo" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125" />
              </Link>
            </div>
            <p className="text-[#252525]  text-xs mt-4 lg:text-left text-center">Mobile App . Web App</p>
            <h3 className="text-[#252525]  text-xl font-semibold lg:text-left text-center">MindEase</h3>
          </div>

          {/* Card 2 */}
          <div>
            <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] relative bg-[#ffffff] w-[300px] h-[300px] rounded-[50px] overflow-hidden group">
              <Link to="/LogiLink">
                <img src={logilink} alt="Logilink" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125" />
              </Link>
            </div>
            <p className="text-[#252525]  text-xs mt-4 lg:text-left text-center">UI/UX Design</p>
            <h3 className="text-[#252525]  text-xl font-semibold lg:text-left text-center">LogiLink</h3>
          </div>

          {/* Card 3 */}
          <div>
            <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] relative bg-[#ffffff] w-[300px] h-[300px] rounded-[50px] overflow-hidden group">
              <Link to="/AgriSync">
                <img src={agrisync} alt="agrisync" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125" />
              </Link>
            </div>
            <p className="text-[#252525]  text-xs mt-4 lg:text-left text-center">UI/UX Design</p>
            <h3 className="text-[#252525]  text-xl font-semibold lg:text-left text-center">AgriSync</h3>
          </div>

          {/* Card 4 */}
          <div>
            <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] relative bg-[#ffffff] w-[300px] h-[300px] rounded-[50px] overflow-hidden group">
              <Link to="/FlexNative">
                <img src={flexnative} alt="flexnative" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125" />
              </Link>
            </div>
            <p className="text-[#252525]  text-xs mt-4 lg:text-left text-center">Web App</p>
            <h3 className="text-[#252525]  text-xl font-semibold lg:text-left text-center">FlexNative</h3>
          </div>

          {/* Card 5 */}
          <div>
            <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] bg-[#ffffff] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#252525] text-[20px] font-semibold">Coming soon</h1>
              </div>
            </div>
            <p className="text-[#252525]  text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-[#252525]  text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>

          {/* Card 6 */}
          <div>
            <div className="drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] bg-[#ffffff] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#252525] text-[20px] font-semibold">Cooming soon</h1>
              </div>
            </div>
            <p className="text-[#252525]  text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-[#252525]  text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
