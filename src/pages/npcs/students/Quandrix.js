import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Cadoras from '../../../components/images/characters/students/03-010.cadoras.png'
import Drazhomir from '../../../components/images/characters/students/03-011.drazhomir.png'
import Larine from '../../../components/images/characters/students/03-015.larine.png'
import Tilana from '../../../components/images/characters/students/03-023.tilana.png'


export default function Quandrix() {
  return (
    <Container >
      <Row className="infoBox2"> 
        <h2>Quandrix Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Cadoras} 
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
          <Col md={6} className="float-container float-left-text">
            <h3></h3>
            <h6></h6>
            <p>
            </p>
            <p>
            </p>
          </Col>
          <Col md={6} className="float-container float-right-img">
            <img 
              src={Drazhomir} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Larine} 
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
          <Col md={6} className="float-container float-left-text">
            <h3></h3>
            <h6></h6>
            <p>
            </p>
            <p>
            </p>
          </Col>
          <Col md={6} className="float-container float-right-img">
            <img 
              src={Tilana} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}