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
        style={{ backgroundColor: "var(--dark)", color: "#ffffff" }}
      >
  

        <Container id="dropdown-titles" style={{fontFamily:"var(--red-hat-mono)"}}>
          <Nav as={Link} to="/" style={{textDecoration: "none", marginRight: "5%"}}>
            <h1 style={{ color: "var(--light)", fontFamily: "var(--press-start)"}}>SlayHaven</h1>
          </Nav>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown 
                title="About"
                id="basic-nav-dropdown nav-dropdown-about-us"
                className="nav-dropdown"
                style={{margin: "0 3.5%"}}
              >
                <NavDropdown.Item as={Link} to="/information">
                  General Information
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/npcs">
                  Important NPCs
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown
                title="Locations"
                id="basic-nav-dropdown nav-dropdown-classrooms"
                className="nav-dropdown"
                style={{margin: "0 3.5%"}}
              >
                <NavDropdown.Item as={Link} to="/center-campus">
                  Center Campus
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
                title="Resources"
                id="basic-nav-dropdown nav-dropdown-resources"
                className="nav-dropdown"
                style={{margin: "0 3.5%"}}
              >
                {/* <div className="dropdown-items-container"> */}
                <NavDropdown.Item as={Link} to="#">
                  Menus
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">
                  Days Closed
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#">
                  FAQs
                </NavDropdown.Item>
                {/* </div> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
