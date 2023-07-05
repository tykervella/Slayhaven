import React from 'react';
import { Container, Row, Col } from "react-bootstrap";

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Central() {
  return (
    <Container >
      <Row className="infoBox2" >
        Yedora, Grave Gardener

        Yedora (neutral treant) is the head groundskeeper and unofficial undertaker of Strixhaven. Students and graduates often wish to spend their afterlife at their beloved university, and she honors that wish. Each tree she plants represents the essence of a fallen mage, and she remembers them all by name.
        Gyome, Master Chef

        Anyone who thinks a troll can’t be a great chef has never met Gyome (neutral troll). He combines local ingredients with flavors from his homeland into an ever-changing menu of delicacies. Students from every college trek through Sedgemoor in droves for his food. The only complaint he ever receives is that he gives out unreasonably large portions.
      </Row>
    </Container>
  );
}
