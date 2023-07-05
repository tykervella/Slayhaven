import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import symbol from '../../components/images/colleges/sq-symbol.png'
import building from '../../components/images/colleges/sq-building.png'
import map from '../../components/images/colleges/sq-map.jpg'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Silverquill() {
  return (
    <Container >
      <Row className="infoBox2" >
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <h2>College of Silverquill</h2>
          <img
            src={symbol}
            className="college-symbol"
            alt="Silverquill College Symbol"
          />
        </Row>
        <p>
          Silverquill is the <b><u>College of Eloquence</u></b>, and its mages—stylish, intimidating, and driven—are masters of the magic of words. They create spells from spoken-word battle poetry or magical manifestations of the written word, scribing patterns of runic ink in the air. These mages make for natural leaders, fiercely competitive, with a piercing wit and a never-second-place attitude.        </p>
        <Row>
          <h2>Studies and Philosphies</h2>
          <p>
            The curriculum of Silverquill College revolves around words, encompassing literature (including fiction, essays, drama, and poetry), languages, linguistics, oratory, rhetoric, and dramatic performance. Students from other colleges often take Silverquill courses to improve their communication skills, learning to speak and write more effectively about their primary field of study. Silverquill and Prismari see overlap in the area of performing arts, with Silverquill emphasizing verbal performance and Prismari focusing more on dance and other forms of movement.
          </p>
          <Col md={6} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={building}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Silverquill College Building"
            />
          </Col>
          <Col md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p>
              The two deans of Silverquill are called the <b><u>Dean of Radiance</u></b> and the <b><u>Dean of Shadow</u></b>, highlighting the college’s use of metaphor in describing its philosophical differences. The metaphor of radiance and shadow takes concrete form in Silverquill magic, as students learn to manifest brilliant light or inky darkness with their spells. The fundamental argument among Silverquill’s scholars centers on the purpose of communication. Is it to help others or further a personal agenda? Does literature selflessly better society or selfishly advance one’s own goals?            </p>
            <p>
              The college’s <b><u>perspective of radiance</u></b> envisions language as sunlight emanating from the speaker or writer to illuminate others and make the world a brighter place. Mages who embrace this view use their language skills—and their magic—to uplift and empower others, to shine light on the evils of society, and to inspire the best in those around them.
            </p>
          </Col>
          <p>
            The college’s <b><u>perspective of shadow</u></b> focuses on the power of language to stab, to expose stinging truths, and to obfuscate secrets. The magic of shadow mages often manifests as bolts or blades of darkness or blotches of flowing ink, and its effects range from a sting of shame to an assault on the target’s life energy.
          </p>
        </Row>
      </Row>
      <br />
      <Row className="infoBox1">
        <h2>Silverquill Campus</h2>
        <p>
          The Silverquill campus—shown on map 1.5—is located due north of the central Strixhaven campus and looks much like an extension of it. Silverquill is the most urban of the five colleges, with a campus that features buildings of stately elegance.
        </p>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={map}
            className="map-img"
            alt="Silverquill Campus Map"
          />
        </Row>
        <h4>Grandloft Hall</h4>
        <p>
          The main Silverquill building is Grandloft Hall, a vast space with shafts of light streaking in from the enchanted windowpanes far above. Grandloft teems with balconies, loges, booths, daises, and other spaces where orators can perform their craft. Inklings, the college’s mascots, flit around the high ceiling, and enchanted spotlights automatically focus on any mage who uses powerful magic.
        </p>
        <h4>The Rose Stage</h4>
        <p>
          The Rose Stage is a rotating circular platform on the Silverquill campus. It has a backdrop of roses made of magical ink (tributes left by spectators of past performances), which creates excellent acoustics. Mage-students meet at the Rose Stage to practice performances, spar, or engage in honor duels. Faculty members often observe performances at the Rose Stage, coaching the students in their magical and rhetorical displays.
        </p>
        <h4>The Dramarium</h4>
        <p>
          The Dramarium is a facility where Silverquill students train in fitness, dance, martial arts, and other acts of physical performance. Students can avail themselves of the preparation space called the Gray Room (actually a chain of rooms), which has hair and makeup salons, voice rehearsal booths, mirrored rehearsal spaces, and spa facilities. The back of the Dramarium has a special sensory deprivation chamber for mage-students who want complete silence in which to meditate.
        </p>
      </Row>
    </Container>
  );
}
