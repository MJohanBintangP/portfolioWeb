import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

const Agrisync = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent p-4">
      <button className="absolute top-5 left-5 flex items-center text-white bg-[#4C4C4C] px-4 py-2 rounded-lg hover:bg-[#858585] transition" onClick={() => navigate('/')}>
        <ArrowLeft size={20} weight="bold" className="bg-transparent mr-2" />
        Back
      </button>

      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Halaman project ini sedang dimasak oleh author !!</h1>
      <p className="text-lg md:text-[25px] text-white text-center mt-2">-mjohanbintangp</p>
    </div>
  );
};

export default Agrisync;
