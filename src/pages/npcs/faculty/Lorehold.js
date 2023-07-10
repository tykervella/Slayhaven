import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import dean1 from '../../../components/images/characters/faculty/lh-dean1.png'
import dean2 from '../../../components/images/characters/faculty/lh-dean2.png'
import Hofri from '../../../components/images/characters/faculty/lh-Hofri.png'
import Losheel from '../../../components/images/characters/faculty/lh-Losheel.png'
import Osgir from '../../../components/images/characters/faculty/lh-Osgir.png'


// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Lorehold() {
  return (
    <Container >
      <Row className="infoBox1" >
        <h2>Lorehold's Deans of Magic</h2>
        <Col md={6} className="float-container-dean">
          <img
            src={dean1}
            style={{ height: "300px", width: "100%", paddingBottom: "2.5%" }}
            alt="Augusta Tullus, Dean of Order"
          />
          <h3>Augusta Tullus, Dean of Order</h3>
          <h6>
            Lawful Neutral, human, Lorehold professor of order, she/her
          </h6>
          <p>
            Augusta Tullus is the current Dean of Order. A professor of spirit studies, she has been called the college’s most talented pastraiser. She can conjure entire legions of ghostly apparitions to reenact historical events for her lectures.
          </p>
          <p>
            Augusta believes that history repeats itself as an orderly progression toward an ideal. In her view, the mistakes of the past can inform the choices of the present, creating a world of peace and order. She plays things by the book and frowns on students who embark on Dean Plargg’s dangerous field trips.
          </p>
        </Col>
        <Col md={6} className="float-container-dean">
          <img
            src={dean2}
            style={{ height: "300px", width: "90%", paddingBottom: "2.5%" }}
            alt="Plargg, Dean of Chaos"
          />
          <h3>Plargg, Dean of Chaos</h3>
          <h6>
            Chaotic Good, orc, Lorehold professor of chaos, they/them
          </h6>
          <p>
            Plargg  is the current Dean of Chaos. Specializing in military history, Plargg is known for their perfect recall of historical stories, as well as their potent scroll magic. Blind themself, they invented a form of magical embossing called heat lettering, which provides a tactile way to read texts.
          </p>
          <p>
            Plargg believes that history is full of unpredictable, war-filled chaos and that their students must be ready for anything. They teach that no rewards come without risk, and their excursions typically end with students heading to the infirmary. They pay little attention to Dean Tullus’s work, usually dismissing her attempts to find order in chaos as foolhardy.
          </p>
        </Col>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Professors and Instructors</h2>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Hofri}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Hofri Ghostforge"
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Hofri Ghostforge</h3>
            <h6>Neutral Good, dwarf, Lorehold professor of order, he/him</h6>
            <p>
              When Hofri first enrolled in Strixhaven, he believed his future lay with Prismari. A diligent student, he quickly mastered the technical skills of art, but his magic left something to be desired. After talking with the school’s counselor, Mavinda, Hofri decided to try his luck with Lorehold. It turned out he had a natural talent for Lorehold’s spirit magic.
            </p>
            <p>
              His time at Prismari was hardly wasted, however. Combining his artistic skill with his keen spiritual sense, Hofri could visualize a spirit’s mortal appearance and construct a viable statue form for them to inhabit. No one in Lorehold’s history had previously created a spirit statue from scratch, and Hofri was offered a professorial position after graduation, which he happily accepted.
            </p>
          </Col>

        </Row>
        <Row>
          <Col md={6} className="float-left-order float-container">
            <h3>Osgir, the Reconstructor</h3>
            <h6>Neutral, stone giant, Lorehold professor of order, he/him</h6>
            <p>
              Even by Lorehold standards, Osgir  is obsessed with relics of the past. A professor of order, he treasures every connection to old civilizations, whether it’s a magnificent jeweled crown or an old shovel. As a student, he constantly spent time in detention for hoarding the best finds from Lorehold dig sites in his room; he lost count of how many times he was sternly told, “History belongs to us all!”
            </p>
            <p>
              So, naturally, he mastered the magical art of duplicative restoration. Not only can he perfectly recreate an ancient object or device from the smallest scrap, but he can also produce a second, identical version for his personal collection. He displays something different every week in his Lorehold office, from a mighty sword of demon-slaying to a delicate elven music box.
            </p>
          </Col>
          <Col md={6} className="float-right-order float-container">
            <img
              src={Osgir}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Osgir, the Reconstructor"

            />
          </Col>
        </Row>
        <Row>
          <Col md={6} className="float-container">
            <img
              src={Losheel}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Losheel, Clockwork Scholar"
            />
          </Col>
          <Col md={6} className="float-container">
            <h3>Losheel, Clockwork Scholar</h3>
            <h6>Chaotic Good, loxodon, Lorehold professor of chaos, she/her</h6>
            <p>
              Losheel is a Humanoid resembling a bipedal elephant. She proudly admits that she is willing to work hard to be as lazy as possible. She turns her brilliant mind to constructing increasingly efficient mechanical helpers, with the goal of one day being able to do anything she wants without standing up.
            </p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
