import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Bhedum from '../../../components/images/characters/students/03-009.bhedum.png'
import Greta from '../../../components/images/characters/students/03-013.greta.png'
import Javenesh from '../../../components/images/characters/students/03-014.javenesh.png'
import Rosie from '../../../components/images/characters/students/03-020.rosie.png'


// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Lorehold() {
  return (
    <Container >
      <Row className="infoBox1">
      <h2>Lorehold Student Representative</h2>

        <Row>
          <Col md={6} className="float-container">
            <img
              src="#"
              className="student-portait"
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
      <br />
      <Row className="infoBox2">
        <h2>Other Lorehold Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Bhedum}
              className="student-portait"
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
              src={Greta}
              className="student-portait"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Javenesh}
              className="student-portait"
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
              src={Rosie}
              className="student-portait"
              alt=""
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
