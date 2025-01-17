import React from 'react';

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
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[25px] font-semibold">Cooking</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Mobile App . Web App</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">Mindease</h3>
          </div>

          {/* Card 2 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[25px] font-semibold">ComingSoon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming . Soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">ComingSoon</h3>
          </div>

          {/* Card 3 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[25px] font-semibold">CoomingSoon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming . Soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">ComingSoon</h3>
          </div>

          {/* Card 4 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[25px] font-semibold">ComingSoon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming . Soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">ComingSoon</h3>
          </div>

          {/* Card 5 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[25px] font-semibold">ComingSoon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming . Soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">ComingSoon</h3>
          </div>

          {/* Card 6 */}
          <div>
            <div className="bg-[#454545] w-[300px] h-[300px] p-5 rounded-[50px] flex justify-center items-center text-center">
              <div className="bg-transparent">
                <h1 className="bg-transparent text-[#D4D4D4] text-[25px] font-semibold">CoomingSoon</h1>
              </div>
            </div>
            <p className="text-white text-xs mt-4 lg:text-left text-center">Coming . Soon</p>
            <h3 className="text-white text-xl font-semibold lg:text-left text-center">ComingSoon</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
