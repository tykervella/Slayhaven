import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar'
import Home from './pages/Home';
import CenterCampus from './pages/locations/Center-Campus';
import Lorehold from './pages/locations/Lorehold';
import Prismari from './pages/locations/Prismari';
import Quandrix from './pages/locations/Quandrix';
import Silverquill from './pages/locations/Silverquill';
import Witherbloom from './pages/locations/Witherbloom';




function App() {
  return (
    <Router style={{backgroundColor: "var(--darkest)"}}>
        <div className="flex-column justify-flex-start min-100-vh" style={{backgroundColor: "var(--light)"}}>
          <Navbar />
          <div className="container" style={{marginBottom:"2.5%"}}>
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/center-campus" 
                element={<CenterCampus />} 
              />
              <Route 
                path="/lorehold" 
                element={<Lorehold />} 
              />
              <Route 
                path="/prismari" 
                element={<Prismari />} 
              />
              <Route 
                path="/quandrix" 
                element={<Quandrix />} 
              />
              <Route 
                path="/silverquill" 
                element={<Silverquill />} 
              />
              <Route 
                path="/witherbloom" 
                element={<Witherbloom />} 
              />
             
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
  );
}

export default App;
