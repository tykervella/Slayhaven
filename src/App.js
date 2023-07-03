import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/CustomNavbar'
import Home from './pages/Home';

// import about pages
import Information from './pages/about/Information'
import CampusLife from './pages/about/CampusLife'
import Faculty from './pages/about/Faculty'

// import locations pages
import Central from './pages/locations/Central';
import Lorehold from './pages/locations/Lorehold';
import Prismari from './pages/locations/Prismari';
import Quandrix from './pages/locations/Quandrix';
import Silverquill from './pages/locations/Silverquill';
import Witherbloom from './pages/locations/Witherbloom';

// import faculty pages 
import CentralFaculty from './pages/npcs/faculty/Central';
import LoreholdFaculty from './pages/npcs/faculty/Lorehold';
import PrismariFaculty from './pages/npcs/faculty/Prismari';
import QuandrixFaculty from './pages/npcs/faculty/Quandrix';
import SilverquillFaculty from './pages/npcs/faculty/Silverquill';
import WitherbloomFaculty from './pages/npcs/faculty/Witherbloom';

//import student pages 

//import resources pages 
import Archetypes from './pages/resources/Archetypes'
import Creation from './pages/resources/Creation'


import backgroundIMG from './components/images/backgroundimg.jpg'




function App() {
  return (
    <Router style={{ backgroundColor: "var(--darkest)" }}>
      <div className="flex-column justify-flex-start min-100-vh" style={{ backgroundImage: `url(${backgroundIMG})` }}>
        <Navbar />
        <div className="container" style={{ marginBottom: "2.5%", width: "82.5%" }}>
          <Routes>
            
                <>
                  <Route path="/slayhaven" element={<Home />} />

                  {/* about routes */}
                  <Route path="/slayhaven/information" element={<Information />} />
                  <Route path="/slayhaven/campuslife" element={<CampusLife />} />
                  <Route path="/slayhaven/faculty" element={<Faculty />} />

                  {/* location routes */}
                  <Route path="/slayhaven/central" element={<Central />} />
                  <Route path="/slayhaven/lorehold" element={<Lorehold />} />
                  <Route path="/slayhaven/prismari" element={<Prismari />} />
                  <Route path="/slayhaven/quandrix" element={<Quandrix />} />
                  <Route path="/slayhaven/silverquill" element={<Silverquill />} />
                  <Route path="/slayhaven/witherbloom" element={<Witherbloom />} />

                  {/* Faculty Routes  */}
                  <Route path="/slayhaven/npcs/faculty/central" element={<CentralFaculty />} />
                  <Route path="/slayhaven/npcs/faculty/lorehold" element={<LoreholdFaculty />} />
                  <Route path="/slayhaven/npcs/faculty/prismari" element={<PrismariFaculty />} />
                  <Route path="/slayhaven/npcs/faculty/quandrix" element={<QuandrixFaculty />} />
                  <Route path="/slayhaven/npcs/faculty/silverquill" element={<SilverquillFaculty />} />
                  <Route path="/slayhaven/npcs/faculty/witherbloom" element={<WitherbloomFaculty />} />

                  {/* Student Routes  */}
                  {/* Resources Routes  */}
                  <Route path="/slayhaven/archetypes" element={<Archetypes />} />
                  <Route path="/slayhaven/creation" element={<Creation />} />
                </>
             
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
