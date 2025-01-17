import React from 'react';
import mindeaseLogo from '../assets/mindease.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div className="mt-24 mb-10 px-[50px] max-w-[1800px] flex justify-center">
      <div className="w-full">
        <div className="flex justify-center">
          <h1 className="font-semibold text-[30px] text-white">Portfolio</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 justify-items-center">
          {/* Card 1 */}
          <div>
            <div className="relative bg-[#454545] w-[300px] h-[300px] rounded-[50px] overflow-hidden group">
              <Link to="/Mindease">
                <img src={mindeaseLogo} alt="mindeaseLogo" className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125" />
              </Link>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Cooking</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Mindease</h3>
          </div>

          {/* Card 2 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[20px] font-semibold">Coming soon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>

          {/* Card 3 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[20px] font-semibold">Cooming soon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>

          {/* Card 4 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[20px] font-semibold">Coming soon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>

          {/* Card 5 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[20px] font-semibold">Coming soon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>

          {/* Card 6 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[20px] font-semibold">Cooming soon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Coming soon</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
