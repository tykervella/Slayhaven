import React from 'react';
// imports css and allows the App.css style I used to be referenced within all children documents 
import './css/App.css';

// using object destructuring assignment to pluck off our variables from the props object and assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav1 nav1-tabs">
      <li className="nav1-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so sets it to active
          className={currentPage === 'About' ? 'nav1-link active' : 'nav1-link'}
        >
          About
        </a>
      </li>

      <li className="nav1-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // Check to see if the currentPage is `Portfolio`, and if so we so sets it to active
          className={currentPage === 'Portfolio' ? 'nav1-link active' : 'nav1-link'}
        >
          Portfolio
        </a>
      </li>

      <li className="nav1-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Resume`, and if so so sets it to active
          className={currentPage === 'Resume' ? 'nav1-link active' : 'nav1-link'}
        >
          Resume
        </a>
      </li>

      {/* <li className="nav1-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so so sets it to active
          className={currentPage === 'Contact' ? 'nav1-link active' : 'nav1-link'}
        >
          Contact
        </a>
      </li> */}
    </ul>
  );
}

export default NavTabs;
