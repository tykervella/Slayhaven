import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import dean1 from '../../../components/images/characters/faculty/wb-dean1.png'
import dean2 from '../../../components/images/characters/faculty/wb-dean2.png'
import Willowdusk from '../../../components/images/characters/faculty/wb-Willowdusk.png'
import Tivash from '../../../components/images/characters/faculty/wb-Tivash.png'
import Veralda from '../../../components/images/characters/faculty/wb-Lang.png'



// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Witherbloom() {
  return (
    <Container >
      <Row className="infoBox1" >
        <h2>Witherbloom's Deans of Magic</h2>
        <Col md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2.5%" }}>
          <img
            src={dean1}
            style={{ height: "300px", width: "90%" }}
            alt="Lisette, Dean of the Root"
          />
          <h3>Lisette, Dean of the Root</h3>
          <h6>
            Neutral Good, human, Witherbloom professor of growth, she/her
          </h6>
          <p>
            Dean Lissette is a world-class healer and herbalist; it’s even said she once cured the Lorehold founder dragon of a secret illness. Lisette’s classes lean more toward demonstration and hands-on experience than lectures. When Lisette speaks, her words are soft and full of colorful metaphors.
          </p>
          <p>
            Lisette believes in preserving nature and life, and she instills in her students a respect for all living things. While Dean Valentin’s exploitation of living creatures disgusts her, she also knows she can use the results of his cruelty to help future lives.
          </p>
        </Col>
        <Col md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 2.5%" }}>
          <img
            src={dean2}
            style={{ height: "300px", width: "90%" }}
            alt="Valentin, Dean of the Vein"
          />
          <h3> Valentin, Dean of the Vein </h3>
          <h6>
            Neutral, vampire, Witherbloom professor of shadow, he/they
          </h6>
          <p>
            Dean Valentin is ancient and drinks the blood of living creatures throughout the bayou. Valentin is a kind of sangromancer—he receives visions from the blood he consumes, which they use to learn things about a creature or place. They have no qualms about exploiting the bayou’s creatures for personal gain.
          </p>
          <p>
            Valentin’s classes focus on dissection and decay. He and Dean Lisette often clash over his cavalier treatment of animals, but that hasn’t stopped her from using his discoveries for her research.
          </p>
        </Col>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Professors and Instructors</h2>
        <Row>
          <Col md={6} className="float-container">

            <img
              src={Willowdusk}
              style={{ width: "100%" }}
              alt="Willowdusk, Essence Seer"
            />
          </Col>
          <Col md={6} className="float-container">

            <h3>Willowdusk, Essence Seer</h3>
            <h6>Neutral Good, treant, professor of root, she/her</h6>
            <p>
              No one knows how old Willowdusk really is. This professor of growth claims to be older than Strixhaven itself, and although many suspect that she exaggerates, no one else who has lived long enough to refute her cares to do so. Many years ago, a group of rebellious students got lost in Detention Bog and took shelter in what turned out to be Willowdusk’s roots. She protected them from a pack of hungry groffs and shepherded them back to Widdershins Hall, offering a lecture on proper herb-gathering practices during the journey.
            </p>
            <p>
              Her lessons proved so effective that she was asked to stay as a professor. She loves passing on her knowledge of medicinal herbs, pest mascot cultivation, and dissection techniques to generations of new students, and she almost always has a pot of tea brewing.
            </p>

          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-left-order float-container">
            <h3>Tivash, Gloom Summoner</h3>
            <h6>Neutral, human, Witherbloom professor of decay, he/him</h6>
            <p>
              It’s tough to study the secrets of life and death without getting your hands dirty—which is the first thing Tivash teaches Witherbloom students. Some call the forces he manipulates evil, but he asserts that power is only as good or evil as how you use it.
            </p>
          </Col>
          <Col md={6} className="float-right-order float-container">
            <img
              src={Tivash}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Tivash, Gloom Summoner"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">

            <img
              src={Veralda}
              style={{ width: "62%", paddingBottom: "2.5%" }}
              alt="Verelda Lang, Arcano-Biologist"
            />
          </Col>
          <Col md={6} className="float-container">

            <h3>Verelda Lang, Arcano-Biologist</h3>
            <h6>Chaotic  Neutral, dryad, Witherbloom professor of root, she/her</h6>
            <p>
              Verelda Lang  is a respected Witherbloom professor of growth who teaches introductory courses in magical physiologies, helping students in every college learn about the many unusual creatures they’re likely to encounter, whatever the students’ field of study. Her research extends to the vital functions of fractal creatures and other artificial life-forms, leading her to teach courses at Quandrix College as well.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
