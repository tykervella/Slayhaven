import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Nora from '../../../components/images/characters/students/03-018.nora-ann-wu.png'
import Quentillius from '../../../components/images/characters/students/03-019.quentillius.png'
import Zanther from '../../../components/images/characters/students/03-025.zanther.png'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Prismari() {
  return (
    <Container >
      <Row className="infoBox2">
      <h2>Prismari Student Representative</h2>

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
      <Row className="infoBox1">
        <h2>Other Prismari Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Nora}
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
              src={Quentillius}
              className="student-portait"
              alt=""
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Zanther}
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
    </Container>
  );
}