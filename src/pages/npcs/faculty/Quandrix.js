import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import dean1 from '../../../components/images/characters/faculty/qd-dean1.png'
import dean2 from '../../../components/images/characters/faculty/qd-dean2.png'
import AdrixAndNev from '../../../components/images/characters/faculty/qd-Adrix_and_Nev.png'
import Ruxa from '../../../components/images/characters/faculty/qd-Ruxa.png'
import Deekah from '../../../components/images/characters/faculty/qd-Deekah.png'



// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Quandrix() {
  return (
    <Container >
      <Row className="infoBox1" >
        <h2>Quandrix's Deans of Magic</h2>
        <Col md={6} className="float-container-dean">
          <img
            src={dean1}
            style={{ height: "300px", width: "90%", paddingBottom: "2.5%" }}
            alt="Kianne, Dean of Substance"
          />
          <h3>Kianne, Dean of Substance</h3>
          <h6>
            Neutral, elf, Quandrix professor of substance</h6>
          <p>
            Kianne believes in using mathematics to better understand nature. She places an emphasis on practical magic that improves daily life through applied calculations. She rolls her eyes at Dean Imbraham’s theories, dismissing them as evidence that her fellow dean lives in an imaginary world.
          </p>
          <p>
            Brilliant and eccentric, Dean Kianne  is one of the preeminent mana scholars of the world. She has visited and studied countless bizarre magical phenomena, from snarls to star arches to ancient shrines. She loves to share her wild theories with anyone who will listen.
          </p>
        </Col>
        <Col md={6} sclassName="float-container-dean">
          <img
            src={dean2}
            style={{ height: "300px", width: "100%", paddingBottom: "2.5%" }}
            alt="Imbraham, Dean of Theory"
          />
          <h3>Imbraham, Dean of Theory</h3>
          <h6>
            Neutral, owlin, Quandrix professor of theory
          </h6>
          <p>
            Dean Imbraham  is stern and shrewd, with a mind as piercing as his curved beak. He is known for the unnerving habit of fully rotating his head around to address his students, while still rapidly chalking up complex theorems and equations on a chalkboard. Imbraham loves numbers more than people or the out-of-doors; some say he hasn’t gone outside certain chambers of the Quandrix campus in years.
          </p>
          <p>
            Imbraham wants nothing more than to crack the mysteries of the world through dauntingly complex theories. He offers his students standing bounties on any of his unsolved equations.
          </p>
        </Col>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Professors and Instructors</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={AdrixAndNev}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Adrix and Nev, Twincasters"
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Adrix and Nev, Twincasters</h3>
            <h6>Adrix: Neutral Good, triton, Quandrix professor of substance</h6>
            <h6>Nev: Neutral Good, triton, Quandrix professor of theory</h6>
            <p>
              The twins Adrix and Nev grew up literally swimming in magic, in an ocean region near a powerful magical snarl. At an early age, they began to see patterns in the tides and currents that eluded even the most esteemed scholars of their society. Once, they saved a hundred lives by predicting the sudden arrival of a tsunami, despite the deceptively calm seas—washing away any doubts in their prowess.
            </p>
            <p>
              Adrix and Nev now teach as a duo, blending mastery of both of Quandrix’s philosophical perspectives. They constantly debate the merits of various esoteric mathematical principles, but if one of their students is in danger, they leap into action in perfect harmony.
            </p>

          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-left-order float-container">
            <h3>Ruxa, Patient Professor</h3>
            <h6>Neutral Good, awakened brown bear, Quandrix professor of substance</h6>
            <p>
              Ruxa looks like a bipedal brown bear and knows that wild new theories, though exciting, are worthless without a deep understanding of the basics. He teaches students of all levels, and even his most experienced pupils benefit from a much deeper understanding of the fundamental building blocks of the world.
            </p>
          </Col>
          <Col md={6} className="float-right-order float-container">
            <img
              src={Ruxa}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Ruxa, Patient Professor"

            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Deekah}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Deekah, Fractal Theorist"
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Deekah, Fractal Theorist</h3>
            <h6>Lawful Neutral, human, Quandrix professor of theory</h6>
            <p>
              Deekah sees the world as an endless sequence of interconnected equations, which to her is the most beautiful thing imaginable. She explores new theorems by giving them physical form, and her exquisite geometric creations are thrilling sights on campus.            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
