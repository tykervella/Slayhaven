import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Aurora from '../../../components/images/characters/students/03-008.aurora.png'
import Melwythorne from '../../../components/images/characters/students/03-016.melwythorne.png'
import Urzmaktok from '../../../components/images/characters/students/03-024.urzmaktok.png'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Witherbloomx() {
  return (
    <Container >
      <Row className="infoBox2"> 
        <h2>Witherbloom Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Aurora} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3></h3>
            <h6></h6>
            <p>
            </p>
            <p>
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3></h3>
            <h6></h6>
            <p>
            </p>
            <p>
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img 
              src={Melwythorne} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Urzmaktok} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3></h3>
            <h6></h6>
            <p>
            </p>
            <p>
            </p>
          </Col>
        </Row>
      
      </Row>
    </Container>
  );
}