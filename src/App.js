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
import Relationships from './pages/npcs/students/Relationships';
import LoreholdStudents from './pages/npcs/students/Lorehold';
import PrismariStudents from './pages/npcs/students/Prismari';
import QuandrixStudents from './pages/npcs/students/Quandrix';
import SilverquillStudents from './pages/npcs/students/Silverquill';
import WitherbloomStudents from './pages/npcs/students/Witherbloom';

//import resources pages 
import Archetypes from './pages/resources/Archetypes'
import Creation from './pages/resources/Creation'
import Mechanics from './pages/resources/Mechanics'
import Memories from './pages/resources/Memory'


import backgroundIMG from './components/images/backgroundimg.jpg'




function App() {
  return (
    <Router style={{ backgroundColor: "var(--darkest)" }}>
      <div className="flex-column justify-flex-start min-100-vh" style={{ backgroundImage: `url(${backgroundIMG})` }}>
        <Navbar />
        <div className="container" style={{ marginBottom: "2.5%", width: "82.5%" }}>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            {/* about routes */}
            <Route
              path="/information"
              element={<Information />}
            />
            <Route
              path="/campuslife"
              element={<CampusLife />}
            />
            <Route
              path="/faculty"
              element={<Faculty />}
            />

            {/* location routes */}
            <Route
              path="/central"
              element={<Central />}
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

            {/* Faculty Routes  */}
            <Route
              path="/npcs/faculty/central"
              element={<CentralFaculty />}
            />
            <Route
              path="/npcs/faculty/lorehold"
              element={<LoreholdFaculty />}
            />
            <Route
              path="/npcs/faculty/prismari"
              element={<PrismariFaculty />}
            />
            <Route
              path="/npcs/faculty/quandrix"
              element={<QuandrixFaculty />}
            />
            <Route
              path="/npcs/faculty/silverquill"
              element={<SilverquillFaculty />}
            />
            <Route
              path="/npcs/faculty/witherbloom"
              element={<WitherbloomFaculty />}
            />

            {/* Student Routes  */}
            <Route
              path="/npcs/students/relationships"
              element={<Relationships />}
            />
            <Route
              path="/npcs/students/lorehold"
              element={<LoreholdStudents />}
            />
            <Route
              path="/npcs/students/prismari"
              element={<PrismariStudents />}
            />
            <Route
              path="/npcs/students/quandrix"
              element={<QuandrixStudents/>}
            />
            <Route
              path="/npcs/students/silverquill"
              element={<SilverquillStudents />}
            />
            <Route
              path="/npcs/students/witherbloom"
              element={<WitherbloomStudents />}
            />

            {/* Resources Routes  */}
            <Route
              path="/archetypes"
              element={<Archetypes />}
            />
            <Route
              path="/creation"
              element={<Creation />}
            />
            <Route
              path="/mechanics"
              element={<Mechanics />}
            />
            <Route
              path="/memories"
              element={<Memories />}
            />

          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
