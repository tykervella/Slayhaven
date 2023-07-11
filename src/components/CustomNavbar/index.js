import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div style={{ position: "sticky", top: 0, zIndex: 1 }}>
      <Navbar
        variant="dark"
        expand="lg"
        className="text-white mb-4 py-3 mt-100"
        id="custom-navbar"
        style={{
          background: "linear-gradient(to right, var(--darkest), var(--medium)",
          borderBottom: "3px solid var(--darkest)",
        }}
        expanded={isNavOpen}
      >
        <Container id="dropdown-titles">
          <Nav as={Link} to="/" style={{ textDecoration: "none", marginRight: "5%" }}>
            <h1 style={{ color: "var(--light)", textShadow: "10px 5px 2px var(--darkest)" }}>SlayHaven</h1>
          </Nav>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setIsNavOpen(!isNavOpen)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown
                title="About"
                id="nav-dropdown-about-us"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/information" onClick={handleNavClose}>
                  About Strixhaven
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faculty" onClick={handleNavClose}>
                  Faculty
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campuslife" onClick={handleNavClose}>
                  Life at Strixhaven
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Colleges"
                id="nav-dropdown-colleges"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/central" onClick={handleNavClose}>
                  Central Campus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/lorehold" onClick={handleNavClose}>
                  Lorehold
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/prismari" onClick={handleNavClose}>
                  Prismari
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quandrix" onClick={handleNavClose}>
                  Quandrix
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/silverquill" onClick={handleNavClose}>
                  Silverquill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/witherbloom" onClick={handleNavClose}>
                  Witherbloom
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown 
                title="Faculty" 
                id="nav-dropdown-faculty" 
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/npcs/faculty/lorehold" onClick={handleNavClose}>
                  Lorehold
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/prismari" onClick={handleNavClose}>
                  Prismari
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/quandrix" onClick={handleNavClose}>
                  Quandrix
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/silverquill" onClick={handleNavClose}>
                  Silverquill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/witherbloom" onClick={handleNavClose}>
                  Witherbloom
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown 
                title="Students" 
                id="nav-dropdown-students" 
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/npcs/students/lorehold" onClick={handleNavClose}>
                  Lorehold
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/prismari" onClick={handleNavClose}>
                  Prismari
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/quandrix" onClick={handleNavClose}>
                  Quandrix
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/silverquill" onClick={handleNavClose}>
                  Silverquill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/witherbloom" onClick={handleNavClose}>
                  Witherbloom
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/relationships" onClick={handleNavClose}>
                  NPC Relationships
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Resources"
                id="nav-dropdown-resources"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/archetypes" onClick={handleNavClose}>
                  Archetypes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/creation" onClick={handleNavClose}>
                  Character Creation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/mechanics" onClick={handleNavClose}>
                  Student Life Mechanics
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/memories" onClick={handleNavClose}>
                  Memory Tracking Sheet 
                </NavDropdown.Item>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
