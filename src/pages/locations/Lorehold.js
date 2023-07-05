import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import symbol from '../../components/images/colleges/lh-symbol.png'
import building from '../../components/images/colleges/lh-building.png'
import map from '../../components/images/colleges/lh-map.jpg'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Lorehold() {
  return (
    <Container >
      <Row className="infoBox1" >
        <Row className="row-center">
          <h2>College of Lorehold</h2>
          <img
            src={symbol}
            className="college-symbol"
            alt="Lorehold College Symbol"
          />
        </Row>
        <p>
          Lorehold is the <b><u>College of Archaeomancy</u></b>—a term that describes the exploration of ancient things through magic. Its mages explore the past by poring over archaeological sites, calling forth magical energy from old tomes, and summoning the spirits of long-dead historical figures. Lorehold mages travel far and wide across the world, gathering relics of bygone ages and learning dead languages to unpack the secrets of history.
        </p>
        <Row>
          <h2>Studies and Philosphies</h2>
          <p>
            Lorehold College is devoted to the study of history, broadly understood to include the various aspects of culture, behavior, and social relationships that shape historical events. Its studies include various subdivisions of history (military history, social history, cultural history), archaeology, anthropology, psychology, sociology, religion, and economics. It overlaps with Prismari College in the field of art history, with some students splitting their studies between the two colleges. Lorehold mages use their magic to unearth secrets and share illumination.
          </p>
          <Col md={6} className="float-container">
            <img
              src={building}
              style={{ width: "100%", marginBottom: "2.5%" }}
              alt="Lorehold College Building"
            />
          </Col>
          <Col md={6} className="float-container">
            <p>
              Lorehold’s two deans carry the titles <b><u>Dean of Order</u></b> and <b><u>Dean of Chaos</u></b>, as order versus chaos encapsulates the fundamental conflict at the heart of Lorehold’s philosophy. This conflict revolves around the forces that underlie and drive history. Is the course of time driving toward a well-ordered ideal state or slowly devolving into chaos? Are deep patterns hidden in historical texts, or is time a series of coincidence and happenstance?
            </p>
            <p>
              The <b><u>perspective of order</u></b> emphasizes the structures that pull people together—law, religion, economics, education, social class, and so on—and how those structures drive historical events. Order focuses on systemic changes and the actions of people collectively.
            </p>
          </Col>
          <p>
            The <b><u>perspective of chaos</u></b>, by contrast, emphasizes individual actions, personal bonds of families and friends, and the disruptive force of lone, passionate people in history. Scholars of chaos gravitate toward reckless discovery and the spirit of adventure in their research of the past—the essence and emotion of history over precision or procedure.
          </p>
        </Row>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Lorehold Campus</h2>
        <p>
          The Lorehold campus is situated northwest of the central campus in a region of stark vertical relief. Rugged mesas and steep hills rise from a wide plain, and a great chasm holds the excavated ruins of an ancient settlement. Several star arches encircle rocky peaks and outcroppings, testifying to the powerful magical energy in the vicinity—energy once harnessed by the ancients who used to inhabit this area.        </p>
        <Row className="row-center">
          <img
            src={map}
            className="map-img"
            alt="Lorehold Campus Map"
          />
        </Row>
        <h4>Pillardrop</h4>
        <p>
          Part natural chasm, part archaeological excavation, and part new construction, Pillardrop is a series of buildings excavated out of cliffs on the Lorehold campus. Ruins and upgraded halls together are now used for research, classwork, and housing. Precarious bridges link one neighborhood of Pillardrop to another, often directly passing the enormous stone faces of old statues. Every Lorehold class has a story of some careless student making a misstep on one of these bridges or in some particularly crumbling section of the ruins, sometimes with disastrous consequences—and sometimes finding deliverance when a spirit statue appears from nowhere to catch the hapless student before they suffer serious harm.
        </p>
        <h4>Effigy Row</h4>
        <p>
          The heart of the Lorehold campus surrounds a soaring bridge that crosses the chasm of Pillardrop. The bridge and surrounding pathways are lined with monuments depicting historic figures, including past professors and prominent mage-students, as well as war heroes and heads of state from ages past.
        </p>
        <h4>Kollema Hall</h4>
        <p>
          Kollema Hall is a grand, multitiered gallery built into a large outcrop at the end of Effigy Row. Here, Lorehold mages gather for large lectures. At the center of the hall towers a magnificent statue of Kollema, a wise monastic who was one of the first Lorehold professors.
        </p>
      </Row>
    </Container>
  );
}
