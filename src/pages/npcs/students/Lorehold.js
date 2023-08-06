import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Bhedum from '../../../components/images/characters/students/03-009.bhedum.png'
import Greta from '../../../components/images/characters/students/03-013.greta.png'
import Javenesh from '../../../components/images/characters/students/03-014.javenesh.png'
import Rosie from '../../../components/images/characters/students/03-020.rosie.png'


// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Lorehold() {
  return (
    <Container >
      {/* <Row className="infoBox1">
      <h2>Lorehold Student Representative</h2>

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
        <h2>Other Lorehold Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Bhedum}
              className="student-portait"
              alt=""
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Bhedum “Rampart” Sooviij</h3>
            <h6>Lawful Neutral, Loxodon, Wizard (order of scribes), First Year, they/them </h6>
            <p>
              Since their name is difficult to pronounce without a trunk, Bhedum has taken to referring to themself as “Rampart,” the closest translation of their name in Common. They are often found poring over ancient texts detailing battles, seeking to better understand the tactical decisions that result in victory and defeat. Rampart is happy to discuss their knowledge with fellow members of the Dragonsguard Historical Society, often doing so late into the night.
            </p>
            <p>
              Rampart’s opponents at the Dragonchess Club find themselves outmatched time and again by the loxodon’s technique, though Rampart is a gracious winner. They attend all their classes clad in gilded, centuries-old plate armor, with an immense and similarly decorated sword strapped to their back. Rampart explains that doing so better simulates the battlefield conditions they study.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Dragonchess Club, Dragonsguard Historical Society
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Rampart’s commanding presence rubs off, and when you’re trying to avoid campus security, your fellow students always help you lie low.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Library books you need inexplicably go missing at key times, especially those about history. As a result, you can’t pull all-nighters.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Greta Gorunn</h3>
            <h6>Chaotic Good, Dwarf, Fighter, First Year, she/her </h6>
            <p>
              Greta is often heard long before she is seen, as her raucous laughter echoes through the university’s halls. Enjoying a reputation as a golden-hearted troublemaker, Greta hates studying and grumbles about it at length. This has led to numerous warnings from the librarians for unnecessarily loud behavior, much to Greta’s amusement.
            </p>
            <p>
              A fervent member of the Strixhaven Iron-Lifters Society, she has already started to break long-held records in both powerlifting and weightlifting. When not training or competing (or occasionally studying), Greta spends her time in Bow’s End Tavern carousing. As beer isn’t free, she helps out at Strixhaven Stadium, setting up and putting away heavy equipment. Most people would begrudge the hard labor, but Greta happily does it, reasoning that she is being paid to work out.
            </p>
            <p>
              Greta makes a point to write regularly to her older brother, Grog, whom she misses terribly.
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img
              src={Greta}
              className="student-portait"
              alt=""
            />
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Strixhaven Iron-Lifters Society
          </p>
          <p>
            <b><u>Job</u></b>: Strixhaven Stadium equipment assistant
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Whenever you need anything heavy moved, members of the Iron-Lifters Society show up to help you.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Heavy things show up in inconvenient places, such as in front of your dorm door.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Javenesh}
              className="student-portait"
              alt=""
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Javenesh Stoutclaw</h3>
            <h6>Neutral Good, Owlin, cleric (order), Second Year, he/him</h6>
            <p>
              Javenesh is an imposing and powerfully built owlin who looks permanently scruffy despite his best efforts. Contributing to his dishevelment are tufts of juvenile plumage that refuse to smooth down, a handful of scars whose origin he’s not sure of, and at least one hole in whatever clothing he’s wearing.
            </p>
            <p>
              Contrary to what people initially assume, Javenesh is a friendly sort. To make ends meet, he works at Bow’s End Tavern, managing servers and keeping the peace, relying on his rough appearance to dissuade those intent on making trouble. When not attending classes, Javenesh is an intimidating presence at the Intramural Silkball Club, where few people want to see him barreling toward them. He wishes more people would take the effort to get to know him, rather than be put off by his size and rough exterior.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Intramural Silkball Club
          </p>
          <p>
            <b><u>Job</u></b>: Bow’s End Tavern assistant manager
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Javenesh’s reputation as a tough guy follows you. If peers would be aggressive toward you, they quickly back down.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: The servers at Bow’s End Tavern know you are no friend to Javenesh. At the slightest sign of trouble, they blame you and ask you to leave.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Rosimyffenbip “Rosie” Wuzfeddlims</h3>
            <h6>Chaotic Good, Gnome, Sorcerer (divine soul), First Year, she/her</h6>
            <p>
              Excitable and impish, Rosimyffenbip is proud of her name; she insists you can call her “Rosie” only if you are her friend. Or a teacher. Or a student. Or any other member of the university staff. Rosie speaks quickly and with so much energy that it often takes a moment to recover from a conversation with her. She moves far faster than one would expect; it’s unclear whether this is due to magic, a gnomish technological contraption, or just the laws of physics bending to Rosie’s force of personality.
            </p>
            <p>
              Rosie referees silkball and takes fair play very seriously. Woe betide any participant who feels the wrath of her whistle. Rosie is also an enthusiastic participant in Strixhaven’s Live-Action Roleplaying Guild. She insists on roleplaying only “monsters” and delights in chasing down participants to “eat” them. Many a participant has heard giggling approaching them at high speed before their character’s death.
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img
              src={Rosie}
              className="student-portait"
              alt=""
            />
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Live-Action Roleplaying Guild
          </p>
          <p>
            <b><u>Job</u></b>: Intramural Fields referee
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Rosie’s energy is contagious. Whenever you travel any significant distance, you can reach your destination in half the normal time.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Whenever you participate in sports on campus (except for big events, such as the Battle of Strixhaven), fouls are constantly called on you.
          </p>
        </div>
      </Row>
    </Container>
  );
}
