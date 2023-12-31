import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import campusmap from '../components/images/strixhaven-campus-map.jpg';
import adventureparty from '../components/images/adventuring-party.jpg'

export default function Home() {
  return (
    <Container>

      <Row className="infoBox2">
        <Row style={{ marginBottom: "2.5%" }}>
          <h2> An Invitation to Attend </h2>
          <Col md={6} className="float-container">

            <p>
              Welcome to Strixhaven University, the premier institution of magical learning in the entire multiverse! As a new student, we extend our warmest greetings. We know that you have come here with a thirst for knowledge, an unquenchable curiosity, and a spark of magic that has the potential to light up the world.
            </p>
            <p>
              This university is no ordinary place. It’s the epitome of arcane education, an institution with ancient traditions and fresh ideas co-existing in harmonious tandem. Divided into five colleges, each with its own unique ethos and approach to magic, Strixhaven is a melting pot of diverse intellectual pursuits.
            </p>
            <p>
              You could join Silverquill, using the power of words and eloquence to shape reality. Or perhaps Prismari is where your heart lies, expressing yourself through the wild and unpredictable elemental arts. The greenhouses and laboratories of Witherbloom might call to you, drawing power from the very essence of life and death. For those with a passion for patterns and equations, Quandrix could be your home, its students manipulating the very fabric of reality through mathematical precision. Or, you may find yourself drawn to the ancient texts and relics of Lorehold, where history is not just studied, but relived.
            </p>
            <p>
              The choice, dear student, is yours to make. Your path through Strixhaven will not only define your magical practice but also the course of the rest of your life. Rest assured, whichever path you choose, you'll be among others who share your passion, and who will challenge, support, and inspire you.
            </p>

            <p>
              Your time at Strixhaven will be more than lectures, experiments, and exams. Here, you will make lifelong friendships, cultivate your character, and set the foundation for your future. You'll grapple with the deep mysteries of the multiverse and, perhaps, reveal a few of your own.
            </p>

            <p>
              Remember, at Strixhaven, it is not just about the magic you learn, but the kind of mage you become. As you step through the illustrious archways of this university, know that you are on the threshold of an extraordinary journey, and the magic is in your hands.
            </p>
            <p>
              So, welcome to Strixhaven, your first step into a much larger world of magic. Prepare to delve into the unknown, unlock your potential, and let your magic soar.
            </p>

          </Col>
          <Col md={6} className="float-container" style={{ justifyContent: "space-evenly", padding: "0 2.5%" }}>

            <img
              src={campusmap}
              style={{ width: "100%" }}
              alt="Illustrated map of the entire strixhaven campus, including its five children campuses"
            />
            <h6>Strixhaven's Campus, including its five children campuses</h6>

            <img
              src={adventureparty}
              style={{ width: "100%" }}
              alt="Three first year students ready to set out for an adventure"
            />
            <h6>Three first year students ready to set out for an adventure</h6>


          </Col>
        </Row>

      </Row>

    </Container>
  );
}
