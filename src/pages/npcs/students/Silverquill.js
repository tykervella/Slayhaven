import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Grayson from '../../../components/images/characters/students/03-012.grayson.png'
import Mina from '../../../components/images/characters/students/03-017.mina-lee.png'
import Rubina from '../../../components/images/characters/students/03-021.rubina.png'
import Shuvadri from '../../../components/images/characters/students/03-022.shuvadri.png'



export default function Silverquill() {
  return (
    <Container >
      <Row className="infoBox2">
      <h2>Silverquill Student Representative</h2>

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
        <h2>Silverquill Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Grayson} 
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
              src={Mina} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Rubina} 
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
              src={Shuvadri} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}