import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import lesbians from '../../../components/images/lesbians.png'


// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Relationships() {
  return (
    <Container >
      <Row className="infoBox2">
        <h2>Relationships</h2>
        <p>
          As students, the characters have the opportunity to cement friendships, establish rivalries, deepen bonds, and otherwise develop relationships with student NPCs. These relationships provide characters with benefits—or drawbacks!—based on their social endeavors, infusing their interactions with other students with a certain weight. This encompass only interactions with student NPCs. Professors, administrators, and other older adults aren’t part of the Relationship rules.
        </p>
        <p>
          When interacting with student NPCs, I will award Relationship Points as I see fit. Friendly interactions will add to your Relationship Points with an NPC while Rivalrous interactions will subtract from it.  A character’s number of Relationship Points with a specific NPC determines their status with that NPC. Each time a character’s number of Relationship Points changes for an NPC, the player should note that on their tracking sheet. The sheet can also be used to track other details about the Relationship.
        </p>
        <p>
          While a character has 5 Relationship Points or more with a student NPC, that NPC becomes a Friend, and the character receives a Bond Boon from that person as long as the NPC is a Friend. While a character has −5 Relationship Points or less with a student NPC, that NPC becomes a Rival, and the character receives a Bond Bane from that person as long as the NPC is a Rival. At any time during the adventures in this book, a character can end their friendship with an NPC, effective immediately. When they do so, that character’s Relationship Points with the NPC reset to 0.
        </p>
      </Row>
      <br />

      <Row className="infoBox1">
        <h2> Beloved Relationships</h2>
        <Col md={6} className="float-container">
          <img
            src={lesbians}
            style={{ width: "100%" }}
            alt="Students discuss their shared interests during a sunset date"
          />
          <h6>Students discuss their shared interests during a sunset date</h6>
        </Col>
        <Col md={6} className="float-container">
          <p>
            While a character has 8 Relationship Points or more with a student NPC, the character has the option of deepening the Relationship. This might be a romantic pairing, a deeper platonic camaraderie, or a sibling-like bond. This NPC will thus be known as your Beloved, and your character must only have one Beloved at a time.
          </p>
          <p>
            When a character has a Beloved, the character gains Beloved Inspiration at the end of each long rest. Beloved Inspiration takes the form of a d8 a player can roll and add to an ability check that your character makes. A player can wait until after rolling the d20 before rolling their Beloved Inspiration, but must do so before it is said whether the check succeeds or fail.
          </p>
          <p>
            A character can end a Beloved Relationship at any time. When that Relationship ends, the NPC no longer provides Beloved Inspiration to the character. If the character’s Relationship Points with the NPC ever drop below 1, the Beloved Relationship ends immediately.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
