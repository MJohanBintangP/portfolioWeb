import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';

const Mindease = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent p-4">
      <button className="absolute top-5 left-5 flex items-center text-white bg-[#252525] px-4 py-2 rounded-lg transition" onClick={() => navigate('/')}>
        <ArrowLeft size={20} weight="bold" className="bg-transparent mr-2" />
        Back
      </button>

      <h1 className="text-2xl md:text-4xl text-[#252525] font-bold text-center">Halaman project ini sedang dimasak oleh author !!</h1>
      <p className="text-lg md:text-[25px] text-[#252525] text-center mt-2">-mjohanbintangp</p>
    </div>
  );
};

export default Mindease;
