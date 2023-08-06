import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Cadoras from '../../../components/images/characters/students/03-010.cadoras.png'
import Drazhomir from '../../../components/images/characters/students/03-011.drazhomir.png'
import Larine from '../../../components/images/characters/students/03-015.larine.png'
import Tilana from '../../../components/images/characters/students/03-023.tilana.png'


export default function Quandrix() {
  return (
    <Container >
      {/* <Row className="infoBox1">
      <h2>Quandrix Student Representative</h2>

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
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: 
          </p>
          <p>
            <b><u>Job</u></b>: 
          </p>
          <p>
            <b><u>Bond Boon</u></b>: 
          </p>
          <p>
            <b><u>Bond Bane</u></b>: 
          </p>
        </div>
      </Row> 
      <br /> */}
      <Row className="infoBox2"> 
        <h2>Other Quandrix Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Cadoras} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Cadoras Damellawar</h3>
            <h6>Chaotic Good, Wood Elf, Druid (land-forest) First Year, he/him </h6>
            <p>
              Cadoras is a jolly soul, and anyone who spends time with them ends up chuckling at whatever nonsense they are currently sporting. They are a passionate member of the Live-Action Roleplaying Guild and love playing out all sorts of fantastical adventures. They always roleplay archers, entirely because they've recently spent a lot of money on a prop-bow and can’t afford anything else. They are also a member of the university’s Distinguished Society of Fine Artists, where they uses magic to sculpt beautiful statuary of complex fractal patterns. The fact that they are self-taught makes the quality of their work that much more impressive.
            </p>
            <p>
              Cadoras does have some strange eating habits; they sometimes eats an entire jar of pickled onions in a single sitting and then drink the vinegar.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Distinguished Society of Fine Artists, Live-Action Roleplaying Guild
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: The esteem for Cadoras in live-action roleplaying circles extends to you. Guild members will share any information you wish to know about Aberrations, Monstrosities, and Oozes.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: You are a pariah in the campus roleplaying scene. The worst monsters are named after you.
          </p>

        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Drazhomir Yarnask</h3>
            <h6>Neutral Good, Minotaur, Wizard (transmutation), Second Year, he/him</h6>
            <p>
              Drazhomir is so soft-spoken that many of his peers must ask him to speak up to be understood. He is over seven feet tall, yet he continuously stoops, as if trying to occupy as little space as possible. Several activities and clubs that involve feats of strength and size continuously try to recruit him—to no avail. Drazhomir prefers spending his time in the Biblioplex, where he works as a book clerk, assisting students in finding required texts and shelving returns. He moves silently through the stacks, and he has given more than one student a scare when they’ve turned around to suddenly find him there.
            </p>
            <p>
              Drazhomir’s greatest love is poetry. As a member of the university’s Dead Languages Society, he scours ancient literature for stirring poems written in old tongues, reading them to the rest of the group in a soft, resonant voice that comes directly from his soul.
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img 
              src={Drazhomir} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Dead Languages Society
          </p>
          <p>
            <b><u>Job</u></b>: Biblioplex book clerk
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Drazhomir writes you poetry, and the smile it puts on your face makes you likable to everyone on campus except the most stone-hearted.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Other students who work in the Biblioplex refuse to help you find any of the tomes you seek. Even the reference librarians are more cryptic.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Larine} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Larine Arneza</h3>
            <h6>Neutral Good, Human, Sorcerer (wild magic), First Year, she/they </h6>
            <p>
              Some think Larine is aloof to the point of being rude, but their friends say that nothing is further from the truth. They are a delightful presence, who doesn’t ignore social obligations so much as get distracted easily. Larine is a member of the Intramural Water-Dancing Club, where they perform underwater balletic movements effortlessly. Despite their swimming ability, his tendency to lose focus means learning group choreography takes them more time and effort. Larine has a natural affinity with animals, especially aquatic species, and they're working on a solo synchronized swimming routine that replaces the other students with a shoal of fish. Rehearsals aren’t going well. As an employee of the Strixhaven Performing Arts Society, Larine is a ticket taker, a job she’s recently switched to as a result of struggling to give correct change while working at the box office.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Intramural Water-Dancing Club
          </p>
          <p>
            <b><u>Job</u></b>: Strixhaven Performing Arts Society ticket taker
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Larine is an expert at creating stylized distractions. If you want to slip away unnoticed from anywhere on campus, Larine or her club members help you escape.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: You are offered the worst tickets to performances, if any at all.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Tilana Kapule</h3>
            <h6>Neutral Good, Human, Wizard (conjuration), First Year, she/her</h6>
            <p>
              Tilana’s poised demeanor and steady gaze are remarkable. An excellent judge of character, she doesn’t associate with those she deems mean-spirited. Her exacting judgment has led her to join the Dragonchess Club, and while she is still honing her skill at the game itself, she compensates by reading her opponent instead of the board. Many a foe has struggled to sit in silence as she gives them her full attention, probing for weaknesses, the pieces seemingly incidental.
            </p>
              Surprising to some, Tilana has also joined the Intramural Silkball Club. During matches, she focuses on trying to understand and preempt the opposing sides’ strategies. More than once she has suggested new plays mid-game that have caught the opposing team off guard. The faculty at Strixhaven are convinced that, if she wished, one day Tilana would make an excellent professor.
            <p>
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img 
              src={Tilana} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Dragonchess Club, Intramural Silkball Club
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Tilana loves helping analyze problems. When you go to her for advice, she suggests a helpful solution that you hadn’t considered.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: The faculty don’t trust you or help you much, for rumor has it that Tilana has found you wanting.
          </p>
        </div>
      </Row>
    </Container>
  );
}