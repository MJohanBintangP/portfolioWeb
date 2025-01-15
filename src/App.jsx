import React from 'react';
import '@fontsource/poppins';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Certificate from './components/Certificate';
import Skill from './components/Skill';
import Footer from './components/Footer';

export default function app() {
  return (
    <div className="font-poppins">
      <Navbar />
      <Header />
      <Tools />
      <Portfolio />
      <Service />
      <Certificate />
      <Skill />
      <Footer />
    </div>
  );
}
