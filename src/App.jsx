import React from 'react';
import '@fontsource/poppins';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Tools from './components/Tools';
import Portfolio from './components/Portfolio';
import Service from './components/Service';
import Certificate from './components/Certificate';
import Skill from './components/Skill';
import Footer from './components/Footer';
import Mindease from './pages/Mindease';

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
                <Tools />
                <Portfolio />
                <Service />
                <Certificate />
                <Skill />
                <Footer />
              </>
            }
          />

          <Route path="/mindease" element={<Mindease />} />
        </Routes>
      </div>
    </Router>
  );
}
