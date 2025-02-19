import React from 'react';
import '@fontsource/poppins';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Section from './components/Section';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Certificate from './components/Certificate';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mindease from './pages/Mindease';
import Agrisync from './pages/Agrisync';
import Logilink from './pages/Logilink';
import Coursera from './pages/Coursera';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <div className="font-poppins">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Header />
                <Section />
                <Portfolio />
                <Service />
                <Certificate />
                <Skill />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/MindEase" element={<Mindease />} />
          <Route path="/AgriSync" element={<Agrisync />} />
          <Route path="/LogiLink" element={<Logilink />} />
          <Route path="/Coursera.io" element={<Coursera />} />
        </Routes>
      </div>
    </Router>
  );
}
