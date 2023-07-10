import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Nora from '../../../components/images/characters/students/03-018.nora-ann-wu.png'
import Quentillius from '../../../components/images/characters/students/03-019.quentillius.png'
import Zanther from '../../../components/images/characters/students/03-025.zanther.png'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Prismari() {
  return (
    <Container >
      {/* <Row className="infoBox2">
      <h2>Prismari Student Representative</h2>

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
      <Row className="infoBox1">
        <h2>Other Prismari Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Nora}
              className="student-portait"
              alt=""
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Nora Ann Wu</h3>
            <h6>Neutral Good, Human, Second Year, she/her </h6>
            <p>
              Rarely without a smile on her face, Nora is a kind person who is generous with her time and attention. This has led her to gain employment within the university’s dormitories, where she acts as a resident assistant. Nora offers confidential support to any student and is especially passionate about counseling other transgender students. She thoughtfully handles concerns ranging from students’ homesickness to matters that require her to act as an advocate for another student.
            </p>
            <p>
              Nora is a passionate member of the Distinguished Society of Fine Artists. As such, she spends hours on the potter’s wheel throwing clay. Despite her enthusiasm, her technical skill is lacking. Her tutors, in attempts to be encouraging, often describe Nora’s work as rustic or naive. Undeterred, Nora continues to produce terrible mug after terrible mug, which she gives as gifts to her friends.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Distinguished Society of Fine Artists
          </p>
          <p>
            <b><u>Job</u></b>: Dormitories resident assistant
          </p>
          <p>
            <b><u>Bond Boon</u></b>: The faculty’s respect for Nora extends to you. You can expect straightforward answers when you ask a faculty member for basic information.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Few faculty care to help you with basic requests.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Quentillius Antiphiun Melentor III</h3>
            <h6>Neutral, Human, First Year, he/him</h6>
            <p>
              Quentillius approaches all his endeavors with the utmost seriousness. He believes one should either do something correctly or not at all. Quentillius is a member of the university’s Playactors Drama Guild, where his dedication to what he calls “the craft” is absolute. He looks down on other actors who are slow to memorize lines or who miss cues. Backstage crew members fare better, as Quentillius regards them as crucial and often brings them and the director flowers or notes of thanks. While Quentillius is a powerful presence on stage—especially in romantic roles—critics have called his performances histrionic. To better perform his future roles in ancient plays, Quentillius has joined the Dead Languages Society. He plans to perform his roles in the plays’ original languages, regardless of whether the rest of the production is translated.
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img
              src={Quentillius}
              className="student-portait"
              alt=""
            />
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Dead Languages Society, Play­actors Drama Guild
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: You have adopted Quentillius’s authoritative voice, and in dire situations, your peers obey you when you issue commands.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: Whenever you perform as part of a production, a small crowd shows up and boos you specifically.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Zanther}
              className="student-portait"
              alt=""
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Zanther Bowen</h3>
            <h6>Chaotic Good, Fire Genasi, First Year, he/him</h6>
            <p>
              One of the most popular students on campus, Zanther is a member of the Mage Tower Cheer Squad, and his exceptional athleticism has earned him the position as the squad’s primary flyer. As such, Zanther is launched into the air in elaborate cheering routines, much to the crowd’s delight.
            </p>
            <p>
              Zanther has also joined the Intramural Gymnastics Club. Here he completes at rhythmic gymnastics in both ribbon as well as hoop. To further test himself and impress the judges, Zanther conducts his routines to a vast array of different musical styles and arrangements. When traveling around campus between classes, he shouts random affirmations of school spirit to everyone at large. Despite his peppy nature, Zanther is genuinely encouraging and in no way acts superior. If anything, he seems somewhat oblivious to his own popularity at Strixhaven.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Intramural Gymnastics Club, Mage Tower Cheer Squad
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: You enjoy a high social rank as a result of your association with Zanther. Most of your peers fall all over themselves to do you favors.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: No one on campus invites you to parties or events, although your friends receive invitations.
          </p>
        </div>
      </Row>
    </Container>
  );
}