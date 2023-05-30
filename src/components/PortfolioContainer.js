import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// sets the default state to About to render #about page upon loading portfolio 
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // function that returns a different main body based on the currentPage that is selected in NavTabs
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);


  // sets up HTML document for entire portfolio. Returns a header/footer and then the main is determined from the handlePageChange function
  return (
    <div>
      <header>
        <h1 className="headerTitle">TYLER KERVELLA</h1>
        <nav>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
      </header>
      
      <div>
        {renderPage()}
      </div>

      <footer> 

      </footer>
    </div>
  );
}
