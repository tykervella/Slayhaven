import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

import Aurora from '../../../components/images/characters/students/03-008.aurora.png'
import Melwythorne from '../../../components/images/characters/students/03-016.melwythorne.png'
import Urzmaktok from '../../../components/images/characters/students/03-024.urzmaktok.png'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Witherbloomx() {
  return (
    <Container >
      {/* <Row className="infoBox1">
      <h2>Witherbloom Student Representative</h2>
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
      </Row> */}
      <br />
      <Row className="infoBox2"> 
        <h2>Other Witherbloom Students</h2>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Aurora} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Aurora Luna Wynterstarr</h3>
            <h6>Neutral, Dhampir, First Year, she/they </h6>
            <p>
              Before arriving at Strixhaven, Aurora changed their name and appearance to that of her on-stage persona: Aurora Luna Wynterstarr, the brilliant singer and songwriter. Aurora was born a dhampir (a partial vampire), which they've taken as a cosmic sign that they are meant for greatness.
            </p>
            <p>
              An accomplished musician on several instruments, Aurora is often found at Bow’s End Tavern performing beautiful dirges on the hurdy-gurdy for the assembled patrons. Aurora is also a member of the Strixhaven Show Band Association, though she believes the music they play lacks the raw emotion of their original compositions.
            </p>
            <p>
              They work as a groundskeeper at the Strixhaven Stadium, where she takes great pleasure in using magic to blight undesirable vegetation on the field.
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Strixhaven Show Band Association
          </p>
          <p>
            <b><u>Job</u></b>: Strixhaven Stadium groundskeeper
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Out of respect for Aurora, fellow campus musicians will cover your expenses for one night per week at places where live music is common.
          </p>
          <p>
            <b><u>Bond Bane</u></b>: When there’s live music on campus, the lyrics always include rude sentiments directed toward you.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container float-left-order">
            <h3>Melwythorne</h3>
            <h6>Neutral Good, Dryad, First Year, Xe/Xir </h6>
            <p>
              Towering over most students, Melwythorne strikes an imposing figure, especially given the branches that grow from xir head like antlers. Calm in demeanor, xe’s often confused by the people rushing around xim, as xir haste won’t lengthen their brief lifespans. Melwythorne had never been away from xir grove before coming to Strixhaven and has found the transition to university life difficult. However, since xe joined the Intramural Silkball Club, this close-knit surrogate family has helped xim deal with xir homesickness.
            </p>
            <p>
              Xe is also a member of the Student-Mages of Faith. Xe enjoys helping xir fellow students celebrate their high holidays and discussing theology and spirituality. For xim, the natural world and all living beings form a vast consciousness across all planes of existence, transcending the power and reach of any one deity.
            </p>
          </Col>
          <Col md={6} className="float-container float-right-order">
            <img 
              src={Melwythorne} 
              className= "student-portait"
              alt="" 
            />
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Intramural Silkball Club, Student-Mages of Faith
          </p>
          <p>
            <b><u>Job</u></b>: None
          </p>
          <p>
            <b><u>Bond Boon</u></b>: Melwythorne’s spirituality centers you. You can calm even the most frazzled of your peers and, if necessary, extract information as needed.

          </p>
          <p>
            <b><u>Bond Bane</u></b>: Members of the silkball club and the Student-Mages of Faith refuse to acknowledge your presence.
          </p>
        </div>
        <Row>
          <Col md={6} className="float-container">
            <img 
              src={Urzmaktok} 
              className= "student-portait"
              alt="" 
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Urzmaktok Grojsh</h3>
            <h6>Neutral, Orc, Second Year, He/Him </h6>
            <p>
              First to class, last to leave, and always asking for additional homework, Urzmaktok is a meticulous student. Despite his consistently high marks, Urzmaktok makes no attempt to show off, although his studies seem rudimentary to him. Rumor has it that he is completing enough credits to earn multiple degrees when he graduates.
            </p>
            <p>
              Urzmaktok works for the Campus Magic Labs as a specimen preparer. This additional access to the labs also allows him to run his personal experiments in peace. Unsurprisingly, he is also a member of the Fantastical Horticulture Club. There, he looks to develop new species of plants that might yield new ingredients for potions.
            </p>
            <p>
              Urzmaktok makes it clear he wants everyone to use his full first name. Should anyone use a nickname, he won’t acknowledge the address.\
            </p>
          </Col>
        </Row>
        <div className="student-info">
          <p>
            <b><u>Extracurriculars</u></b>: Fantastical Horticulture Club
          </p>
          <p>
            <b><u>Job</u></b>: Campus Magic Labs specimen preparer
          </p>
          <p>
            <b><u>Bond Boon</u></b>: No matter the subject, you can always find a partner to study with, whether it’s Urzmaktok or a classmate doing him a favor.

          </p>
          <p>
            <b><u>Bond Bane</u></b>: No one on campus who isn’t another player character will study with you. If you ask, most shrug decline, saying you’ll probably fail.

          </p>
        </div>
      </Row>
    </Container>
  );
}