import React from 'react';
import '@fontsource/poppins';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Certificate from './components/Certificate';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Mindease from './pages/Mindease';
import Agrisync from './pages/Agrisync';
import Logilink from './pages/Logilink';

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
                <Portfolio />
                <Service />
                <Certificate />
                <Skill />
                <Footer />
              </>
            }
          />

          <Route path="/MindEase" element={<Mindease />} />
          <Route path="/AgriSync" element={<Agrisync />} />
          <Route path="/LogiLink" element={<Logilink />} />
        </Routes>
      </div>
    </Router>
  );
}
