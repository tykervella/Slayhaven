import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import symbol from '../../components/images/colleges/ps-symbol.png'
import building from '../../components/images/colleges/ps-building.png'
import map from '../../components/images/colleges/ps-map.jpg'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Prismari() {
  return (
    <Container >
      <Row className="infoBox2" >
        <Row className="row-center">
          <h2>College of Prismari</h2>
          <img
            src={symbol}
            className="college-symbol"
            alt="Prismari College Symbol"
          />
        </Row>
        <p>
          Prismari, the <b><u>College of Elemental Arts</u></b>, is devoted to the study and practice of art intertwined with magic. The mage-students of Prismari wield magic in spectacles of creativity: masterpieces of showy, over-the-top magic. They use elemental magic to express who they are and how they see the world, often combining different types of energy—fire, water, air, earth, lightning, heat, cold—in powerful expressions of conflict and harmony.
        </p>
        <Row>
          <h2>Studies and Philosphies</h2>
          <p>
            Prismari College is dedicated to the arts. Its scholars view art as the fundamental form of self-expression and magic as a tool, a medium, and an inspiration. Prismari studies focus on visual arts (including architecture, painting, and sculpture) and performing arts (such as dance, music, and theater). The curriculum overlaps with Lorehold in the field of art history and with Silverquill in the literary arts, and some students divide their time between Prismari and one of those other schools to pursue these interdisciplinary fields. Prismari mages use magic to weave the elements into their creations; they might juxtapose fire alongside paint, ceramics, or fabric, or they might choreograph elaborate works that unite a dancer’s movements with gusts and eddies of air.
          </p>
          <Col md={6} className="float-container">
            <img
              src={building}
              style={{ width: "100%" }}
              alt="Prismari College Building"
            />
          </Col>
          <Col md={6} className="float-container">
            <p>
              Prismari’s two deans carry the titles <b><u>Dean of Perfection</u></b> and <b><u>Dean of Expression</u></b>, and they often express the fundamental conflict of their philosophy as perfection versus expression—or, sometimes, as intellect versus emotion. What is the purpose of art? Is it to make people think things or make people feel things? Is it supposed to be carefully thought out or raw and spontaneous? Is mastery of art a matter of honing precise techniques to a point of perfection or of perfectly expressing a raw emotional state? Does art aspire to express universal truths or intensely personal ones?
            </p>
            <p>
              The <b><u>perspective of perfection</u></b> focuses on technique, analysis, theory, aesthetics, and universal principles. It embraces intellect over emotion, strives to be thought-provoking and reflective, and aspires to mastery. Its mages tend to use elemental forces of cold, water, and wind.
            </p>
          </Col>

          <p>
            The <b><u>perspective of expression</u></b> instead emphasizes the portrayal of personal emotional truths. Its mages value improvisation, innovation, and rule-breaking, and they often favor elemental magic using fire, lightning, and earth.
          </p>
        </Row>
      </Row>
      <br />
      <Row className="infoBox1">
        <h2>Prismari Campus</h2>
        <p>
          Southwest of the central campus, the Prismari campus is situated in a region of jagged rocks, rugged spires, and intense geothermal activity.
        </p>
        <Row className="row-center">
          <img
            src={map}
            className="map-img"
            alt="Prismari Campus Map"
          />
        </Row>
        <h4>Conjurot Hall</h4>
        <p>
          The center of the Prismari campus is Conjurot Hall, a towering structure with a glassed-in observation area at the top. Constantly changing strands of elemental energy encircle the structure. Artist-mages can see for miles from Conjurot’s main turret, and the view has inspired many artistic creations.
        </p>
        <h4>Opus Walk</h4>
        <p>
          Hundreds of Prismari creations are displayed along a path that winds through the central campus buildings, giving the path its name: Opus Walk. Some famous pieces of magical art have been displayed along Opus Walk for centuries, while other transient bursts of creativity last only a few moments.
        </p>
        <h4>Furygale </h4>
        <p>
          At the outskirts of the Prismari campus, the abandoned creations of thousands of past artist-mages have coalesced over the years into the notorious region of Furygale. Roped off by magical wards and warning signs, Furygale is several acres of ever-changing magical energy, gales of ice and wind and fire, and elementals gone rogue. While dangerous, it also provides a source of wild inspiration, and it remains a popular spot for students who want to duel without being interrupted by faculty.
        </p>
      </Row>
    </Container>
  );
}
