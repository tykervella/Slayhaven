import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import symbol from '../../components/images/colleges/qd-symbol.png'
import building from '../../components/images/colleges/qd-building.png'
import map from '../../components/images/colleges/qd-map.jpg'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Quandrix() {
  return (
    <Container >
      <Row className="infoBox1" >
        <Row className="row-center">
          <h2>College of Quandrix</h2>
          <img
            src={symbol}
            className="college-symbol"
            alt="Quandrix College Symbol"
          />
        </Row>
        <p>
          Quandrix is the <b><u>College of Numeromancy</u></b>—a term that encompasses the study of patterns, fractals, and symmetries to wield power over the fundamental mathematics of nature. Quandrix mages can summon creatures made of fractals or turn abstract theories into towering, spiraling patterns. They love to expand and multiply; they can increase their knowledge or size by bending numbers. They dwell in the overlap between the theoretical and the natural—from the fabric of their robes to the nature of their spells, they make use of repeated elements, clever symmetries, and surprising geometry to express the complex truths they study.
        </p>
        <Row>
          <h2>Studies and Philosphies</h2>
          <p>
            The studies undertaken within Quandrix College include mathematics, physics, logic, statistics, metaphysics, and various fields of theoretical magic. Students from the other colleges occasionally delve into Quandrix courses to bolster the theoretical underpinnings of their studies, and Quandrix’s studies of nature and Witherbloom’s explorations of practical biology have some significant overlap.
          </p>
          <Col md={6} className="float-container">
            <img
              src={building}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Quandrix College Building"
            />
          </Col>
          <Col md={6} className="float-container">
            <p>
              Quandrix’s two deans carry the titles <b><u>Dean of Substance</u></b> and <b><u>Dean of Theory</u></b>, reflecting the philosophical division within the college. Is mathematics a natural force that exists in the universe independent of the constructs of intelligent minds, or is it a theoretical framework created by those who study it? Is the work of the scholar to discover what is or to define what could be?
            </p>
            <p>
              The <b><u>perspective of substance</u></b> emphasizes physical reality. In this view, math is embodied in the natural forces of the multiverse, waiting to be discovered by those with the intellectual fortitude to delve into those secrets. Quandrix mages who embrace this view use magic to bring numerical concepts to life, creating or altering physical reality out of mathematical possibility.
            </p>
          </Col>

          <p>
            The <b><u>perspective of theory</u></b> focuses on the abstract realms of conjecture and possibility. Its scholars view math as a lens through which a mind can understand the cosmos, not something that exists independently in the world. Mages who embrace this perspective use their spells to weave illusions and manipulate the fabric of magic itself.
          </p>
        </Row>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Quandrix Campus</h2>
        <p>
          The Quandrix campus is situated in a coastal area to the northeast of the central campus, surrounded by lush woodland and abundant rivers and streams.
        </p>
        <Row className="row-center">
          <img
            src={map}
            className="map-img"
            alt="Quandrix Campus Map"
          />
        </Row>
        <h4>Torus Hall</h4>
        <p>
          The central hall of Quandrix campus lies at the end of a geometric series of walkways, terminating at ascending ramps to the towering building. Inside, Torus Hall’s architecture is mapped to an ever-changing three-dimensional grid, which slowly evolves. Some Quandrix faculty members insist that mage-students shouldn’t linger too long inside the hall, lest its geometry eventually turn itself inside out while students are still within it.
        </p>
        <h4>The Arithmodrome</h4>
        <p>
          The Quandrix campus is alive with dynamic sculptures made of water behaving in odd ways: cube-shaped fountains, arching aqueducts that flow through the air, towers of solid-seeming water. One water structure holds a secret: a mysterious inner expanse called the Arithmodrome. From the outside, the Arithmodrome looks like a large cube of water, ten feet on each side. The inside is an apparently boundless theory-space that suspends the rules of reality. Mages use this space to explore theoretical numerical possibilities.
        </p>
        <h4>The Cultivarium </h4>
        <p>
          The Cultivarium is an eye-popping, sun-drenched garden of spiraling, cyclical plants and fractalized animals. Quandrix faculty members have repeatedly taught growth spells in this part of campus, and over the centuries, the area has come to intensify any growth magic cast within it.
        </p>
      </Row>
    </Container>
  );
}
