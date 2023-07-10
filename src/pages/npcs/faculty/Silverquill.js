import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import dean1 from '../../../components/images/characters/faculty/sq-dean1.png'
import dean2 from '../../../components/images/characters/faculty/sq-dean2.jpg'
import Breena from '../../../components/images/characters/faculty/sq-breena.jpg'
import Nils from '../../../components/images/characters/faculty/sq-Nils.png'
import Blackstone from '../../../components/images/characters/faculty/sq-Blackstone.png'
import Fain from '../../../components/images/characters/faculty/sq-Fain.png'



// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Silverquill() {
  return (
    <Container >
      <Row className="infoBox1" >
        <h2>Silverquill's Deans of Magic</h2>
        <Col md={6} className="float-container-dean">
          <img
            src={dean1}
            style={{ height: "300px", width: "90%" }}
            alt="Shaile Talonrook, Dean of Radiance"
          />
          <h3>Shaile Talonrook, Dean of Radiance</h3>
          <h6>
            Lawful Good, owlin, Silverquill professor of radiance, she/her 
          </h6>
          <p>
            Dean Shaile Talonrook is a perennially optimistic orator. A master of literature, she often quotes obscure passages from famous texts. Her soul-filling advice and educated references have been known to make people literally glow.
          </p>
          <p>
            Shaile believes that all people have the potential for good and wishes to teach her students how to make the world a better place. She and Dean Lu often clash over Silverquill’s curriculum, but the balance found between them is far more eloquent than even their words can describe.
          </p>
        </Col>
        <Col md={6} className="float-container-dean">
          <img
            src={dean2}
            style={{ height: "300px", width: "100%" }}
            alt="Embrose Lu, Dean of Shadow"
          />
          <h3>Embrose Lu, Dean of Shadow</h3>
          <h6>
            Lawful Neutral, human, Silverquill professor of shadow, he/him
          </h6>
          <p>
            Dean Embrose Lu  is a master poet whose ink magic is merciless. Scant with praise and quick with a cutting remark, Dean Lu has seen many mage-students scrub out of Strixhaven and has nothing good to say about those who can’t hack it.
          </p>
          <p>
            A cynic, Embrose believes that most people are in it for themselves. He demands his students learn how to use language-based magic to “get what they deserve.” While he often argues with Dean Talonrook, he holds a deep (if begrudging) respect for the owlin.
          </p>
        </Col>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Professors and Instructors</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Breena}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Breena, the Demagogue"
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Breena, the Demagogue</h3>
            <h6>Neutral Good, owlin, Silverquill professor of shadow, she/her</h6>
            <p>
              Breena has a talent for getting her way. If she wants you to do something, you won’t just do it—you’ll be sure it was your idea all along. Her students and colleagues alike hang on her every word, and in front of a crowd, she’s a powerhouse of charisma, enhancing her speeches with elegant swirls of ink magic. Though she’s an elite mage who can easily hold her own in a fight, Breena prefers to defeat her foes with words alone.
            </p>
            <p>
              An Oriq agent once trapped and attempted to recruit her, threatening her students’ lives if she didn’t comply. Within an hour, she convinced him to free her, abandon his wicked ways, and seek wisdom from the archaics.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-left-order float-container">
            <h3>Nils, Discipline Enforcer</h3>
            <h6>Lawful Neutral, human, Silverquill professor of radiance, they/them</h6>
            <p>
              Nils is an optimist, as they believe in every student’s potential for greatness. However, this outlook also means they're constantly disappointed by their suboptimal choices, and they are well known for their strictness and abrupt scoldings.
            </p>

          </Col>
          <Col md={6} className="float-right-order float-container">
            <img
              src={Nils}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Nils, Discipline Enforcer"

            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">

            <img
              src={Fain}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Fain, the Broker"

            />
          </Col>
          <Col md={6} className="float-container">

            <h3>Fain, the Broker</h3>
            <h6>Neutral, human, Silverquill professor of shadow, he/him</h6>
            <p>
              Lost an important textbook? Craving some rare delicacy from home? Need something inconveniently forbidden? Enter Fain. He has an extensive network of connections on and off campus, and he can procure just about anything—so long as you can afford his price.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-left-order float-container">
            <h3> Brenneth Blackstone, Scriptology Star </h3>
            <h6>Neutral Good, dhampir, Silver­quill professor of shadow, Agender (he/she/they)</h6>
            <p>
              Brenneth Blackstone is a rising star in the study of magical writing and symbols. With a dynamic lecturing style, this dhampir—a partial vampire—attracts students from across Strixhaven purely for her lessons’ value as performance art.
            </p>
          </Col>
          <Col md={6} className="float-right-order float-container">
            <img
              src={Blackstone}
              style={{ width: "62%", paddingBottom: "2.5%" }}
              alt="Brenneth Blackstone, Scriptology Star"
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
