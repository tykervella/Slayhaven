import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <div>
      {/* <div style={{ backgroundColor: "#ffffff", height: "30px" }}></div> */}
      <Navbar
        variant="dark"
        expand="lg"
        className="text-white mb-4 py-3 mt-100"
        id="custom-navbar"
        style={{ background: "linear-gradient(to right, var(--darkest), var(--light)" }}
      >
  

        <Container id="dropdown-titles" >
          <Nav as={Link} to="/" style={{textDecoration: "none", marginRight: "5%"}}>
            <h1 style={{color: "var(--light)", textShadow: "10px 5px 2px var(--darkest)"}}>SlayHaven</h1>
          </Nav>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown 
                title="About"
                id="nav-dropdown-about-us"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/information">
                  General Information
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/campuslife">
                  Life at StrixHaven
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/faculty">
                  Faculty
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Colleges"
                id="nav-dropdown-colleges"
                className="nav-dropdown"
                style={{margin: "0 3.5%"}}
              >
                <NavDropdown.Item as={Link} to="/central">
                  Central Campus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/lorehold">
                  Lorehold
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/prismari">
                  Prismari
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/quandrix">
                  Quandrix
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/silverquill">
                  Silverquill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/witherbloom">
                  Witherbloom
                </NavDropdown.Item>
              
              </NavDropdown>

              <NavDropdown 
                title="Faculty"
                id="nav-dropdown-faculty"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/npcs/faculty/lorehold">
                  Lorehold
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/prismari">
                  Prismari
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/quandrix">
                  Quandrix
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/silverquill">
                  Silverquill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/faculty/witherbloom">
                  Witherbloom
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown 
                title="Students"
                id="nav-dropdown-students"
                className="nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/npcs/students/lorehold">
                  Lorehold
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/prismari">
                  Prismari
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/quandrix">
                  Quandrix
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/silverquill">
                  Silverquill
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs/students/witherbloom">
                  Witherbloom
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Resources"
                id="nav-dropdown-resources"
                className="nav-dropdown"
                style={{margin: "0 3.5%"}}
              >
                <NavDropdown.Item as={Link} to="/creation">
                  Character Creation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/archetypes">
                  Archetypes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/rules">
                  Rule Changes
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Campaign"
                id="nav-dropdown-campaign"
                className="nav-dropdown"
                style={{margin: "0 3.5%"}}
              >
                <NavDropdown.Item as={Link} to="/pcs">
                  Our Characters
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/sessions">
                  Session Notes
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">
                  
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
