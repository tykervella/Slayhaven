import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import dean1 from '../../../components/images/characters/faculty/ps-dean1.png'
import dean2 from '../../../components/images/characters/faculty/ps-dean2.png'
import Minexes from '../../../components/images/characters/faculty/ps-Minexes.png'
import Veyran from '../../../components/images/characters/faculty/ps-Veyran.png'
import Zaffai from '../../../components/images/characters/faculty/ps-Zaffai.png'


// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Prismari() {
  return (
    <Container >
      <Row className="infoBox1" >
        <h2>Prismari's Deans of Magic</h2>
        <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center" , padding: "0 2.5%"}}>
          <img 
            src={dean1} 
            style={{ height:"300px", width: "90%", paddingBottom:"2.5%"}} 
            alt="Uvilda Mistcoiler, Dean of Perfection" 
          />
          <h3>Uvilda Mistcoiler, Dean of Perfection</h3>
          <h6>
            Neutral Good, genasi, Prismari professor of perfection</h6>
          <p>
            Uvilda Mistcoiler is the current Dean of Perfection. A master of artistic technique, Uvilda trains with a range of elements whenever she isn’t focused on her teaching. She is known for giving students profoundly insightful feedback, which she tailors to each individual. After a review, she often offers a small piece of advice that alters the student’s point of view and work forever—for the better.
          </p>
          <p>
            Uvilda believes that good art comes from the head. To her, carefully measured strokes and deliberate object placement make the difference between fully realized art and a total mess. If Dean Nassari interrupts her careful work with bombastic expressions one more time, Uvilda is prepared to enroll in Quandrix to learn how to shrink Nassari.          
          </p>
        </Col>
        <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", padding: "0 2.5%"}}>
          <img 
            src={dean2} 
            style={{ height:"300px", width: "100%", paddingBottom:"2.5%"}} 
            alt="Nassari, Dean of Expression" 
          />
          <h3>Nassari, Dean of Expression</h3>
          <h6>
            Chaotic Good, genasi, Prismari professor of expression
          </h6>
          <p>
            Nassari  is the current Dean of Expression. Nazzari always want to see art that is bigger, more radical in concept, and more emotionally powerful. For their final project as a mage-student, Nassari famously “turned in” an earthquake, which almost destroyed three campus buildings. The piece received a standing ovation from the mage-student body—and a grumpy thumbs down from the campus construction golems.          </p>
          <p>
            Nassari believes that true expression comes from the heart. They encourage their students to treat the entire world as a canvas on which to spread emotion and excitement. Nassari takes little heed of Dean Mistcoiler’s quiet masterpieces and often feigns forgetfulness about Dean Mistcoiler’s very existence.
          </p>
        </Col>   
      </Row>
      <br />
      <Row className="infoBox2"> 
        <h2>Professors and Instructors</h2>
        <Row>
          <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img 
              src={Veyran} 
              style={{ width: "100%", paddingBottom:"2.5%"}} 
              alt="Veyran, Voice of Duality" 
            />
          </Col>
          <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h3>Veyran, Voice of Duality</h3>
            <h6>Chaotic Good, genasi, Prismari professor of perfection</h6>
            <p>
              In addition to being an accomplished elementalist, Veyran serves as a mentor to many Prismari pledgemages. She advocates enthusiastically for the importance of both passion and disciplined technique in any artistic pursuit. If a new student is upset or overwhelmed, she eagerly calls forth playful, beautiful elemental creatures to cheer up the student.            </p>
            
          </Col>

        </Row>
        <Row>
          <Col md={6} className="float-left-text" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h3>Zaffai, Thunder Conductor</h3>
            <h6>Chaotic Neutral, human, Prismari professor of expression</h6>
            <p>
              As soon as Zaffai came of age, his parents sent him to Strixhaven, assuring him his budding musical genius deserved the finest instruction in the world. (In truth, though he did possess prodigious talent, they were also growing tired of their house being randomly struck by lightning or engulfed in cyclones whenever he practiced.) Even as he flourished as both mage and musician, he discovered a new aptitude: conducting.
            </p>
            <p>
              In addition to teaching, he serves as Grand Maestro of Strixhaven’s Orchestra of the Arcane, an elite extracurricular activity for top Prismari students. They practice only outdoors, and their concerts fill the sky with beautiful explosions of elemental magic.
            </p>
          </Col>
          <Col md={6} className="float-right-img" style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img 
              src={Zaffai} 
              style={{ width: "100%", paddingBottom:"2.5%"}} 
              alt="Zaffai, Thunder Conductor" 
              
            />
          </Col>

        </Row>
        <Row>
          <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <img 
              src={Minexes} 
              style={{ width: "68%", paddingBottom:"2.5%"}} 
              alt="Arkin Minexes, Peppy Instructor" 
            />
          </Col>
          <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h3>Arkin Minexes, Peppy Instructor</h3>
            <h6>Lawful Good, human, Prismari professor of expression</h6>
            <p>
              Arkin is a newly hired instructor teaching a few courses in choreography and dance ensembles. He recently graduated from Strixhaven himself, and he bubbles with excitement at the prospect of guiding a new generation of students on the course of study he so greatly enjoyed. He particularly delights in finding new ways to help students work collaboratively to unlock the heights of their creative potential.
            </p>
          </Col>

        </Row>
      </Row>
    </Container>
  );
}
