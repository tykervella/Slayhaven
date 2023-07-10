import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Grayson from '../../../components/images/characters/students/03-012.grayson.png'
import Mina from '../../../components/images/characters/students/03-017.mina-lee.png'
import Rubina from '../../../components/images/characters/students/03-021.rubina.png'
import Shuvadri from '../../../components/images/characters/students/03-022.shuvadri.png'



export default function Silverquill() {
  return (
    <Container >
      {/* <Row className="infoBox2">
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
      <br />*/}
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
            <h3>Grayson Wildemere</h3>
            <h6>Neutral, Human, First Year, he/him</h6>
            <p>
              Grayson comes from an old, moneyed, and influential family. To him, studying at Strixhaven is a means to an end. Learning business acumen is just as important to Grayson as his classes, so he has joined the Future Entrepreneurs of Strixhaven. Grayson makes a point to know as much about everyone as possible, gathering information until he finds the best circumstance to use it. Having learned to pick locks, he often accesses places where he’s unauthorized, searching for secrets.
            </p>
            <p>
              Grayson has become a writer for the Strixhaven Star, where he’s responsible for the gossip column. His writing style is biting, and he uses this platform to expose bullies and mock ignorance. Many of his peers are leery of him, but some have witnessed him paying for poorer students’ books and other supplies—a fact he tries to keep secret.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Future Entrepreneurs of Strixhaven, Strixhaven Star
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Whenever you want to buy something on campus, a few words from Grayson get you deals. There’s a 25 percent chance your purchase costs half as much.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Gossip columns proclaim exaggerated versions of your worst traits.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Mina Lee</h3>
            <h6>Lawful Good, Humanm Second Year, they/them</h6>
            <p>
              Mina’s greatest love is the use of language; they adores how subtle differences in intonation and vocabulary can shape one’s perception of reality. Their fascination with language extends to spells and verbal components. After graduation, they plans to conduct research on the variance of language in spells and how one might tweak verbal components that the greater magical community considers immutable.
            </p>
            <p>
              Mina’s love of language and nuance has led them to join the Strixhaven Star as an investigative journalist. Here, they reveal truth, correct misconceptions, and combat injustice. They have also taken a job as a server at Firejolt Café, which not only provides some cash but also puts them in a position to overhear snippets of conversation that might provide leads for their journalistic investigations.
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
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Strixhaven Star
          </p>
          <p>
            <b><u>Job</u></b>: Firejolt Café server
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Mina loves sharing their vast repository of knowledge with you. If you seek obscure information that’s not secret, Mina researches it and reports their findings within a week.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Firejolt Café never has the ingredients in stock for the beverages you initially order, even if it’s a common drink.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Rubina} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Rubina Larkingdale</h3>
            <h6>Lawful Neutral, Human, First Year, she/her</h6>
            <p>
              When Rubina walks into a room, people take notice. A measured performer with gravitas beyond her years, Rubina is a valued member of the Playactors Drama Guild who can handle weightier roles that more melodramatic actors can’t. This has caused friction within the guild as members vie for parts. Rubina’s stage presence extends to delivering presentations in class. When she orates, one can almost imagine a hardened general marshaling her bloodied and exhausted troops for a final push against a far superior foe.
            </p>
            <p>
              Rubina is part of the Strixhaven Show Band Association and has moved from playing to conducting. No previous student conductor has demanded and received such unwavering respect as Rubina. With merely a look and a raised eyebrow, she can quiet even the most raucous orchestra sections.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Playactors Drama Guild, Strixhaven Show Band Association
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Rubina’s gravitas has rubbed off, and you can easily command an entire room’s attention. They hear your words favorably if you wish.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Whenever any band performs in public, its members stop and shake their heads in disapproval when they see you.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Shuvadri Glintmantle</h3>
            <h6>Lawful Good, Owlin, First Year, she/they </h6>
            <p>
              Her peers are often surprised when they learn Shuvadri is interested in joining Silverquill College, since its members sometimes earn a reputation as abrasive. Shuvadri, on the other hand, exhibits an air of absolute serenity. Anything that might frustrate or delight another student, whether it’s a poor test score or success at a competition, elicits little outward response from Shuvadri. A deep thinker, Shuvadri is rarely surprised by such an outcome, and they enjoys being a centering presence for their peers.
            </p>
              Also a member of the Student-Mages of Faith, Shuvadri is happy to talk about their appreciation of deities who are devoted to service and community. Many of her peers think she is destined to hold high rank in a temple.
            <p>
              Shuvadri works on the campus grounds to erase graffiti, wearing a content smile on her face.
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
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Student-Mages of Faith
          </p>
          <p>
            <b><u>Job</u></b>: Campus Grounds graffiti eraser
          </p>
          <p>
            <b><u>Bond Boon</u></b>: If you quickly need the help of your peers, they drop everything to assist you as a favor to Shuvadri.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Graffiti making rude allusions to you keeps appearing on campus, and it takes days to get cleaned.
          </p>
        </div>
      </Row>
    </Container>
  );
}