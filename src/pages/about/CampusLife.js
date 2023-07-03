import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import strixhavenColleges from '../../components/images/strixhaven-colleges.jpg'
import magicalPolarity from '../../components/images/magicalpolarity.jpg'


// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function CampusLife() {
  return (
    <Container >

        <Row className="infoBox2">
            < h2 > Campus Life</h2>
            <Col md={6}>
            <img 
                src={strixhavenColleges} 
                style={{ width: "100%"}} 
                alt="Campus College shown together as Cartoon Image" 
            />
            </ Col>
            <Col md={6} style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
            
            <p> 
                Even as your characters get caught up in the adventures, they have to continue going to class, doing homework, and studying for exams. Study at Strixhaven isn’t about learning to be a wizard but about learning to be a historian, an artist, an orator, a scientist, or some other profession—while using magic to enhance one’s studies.
            </p>

            <p> 
                The characters are also subject to the authority of the university’s faculty and staff members. Circumstances will at times cause player characters to defy faculty authority—and even deans—during their adventures, and the threat of detention or even expulsion might hang over their head.
            </p>

            <p> 
                Student characters are part of a school community that's similar to a small town. They live in university housing, eat in dining halls, and spend the majority of their time on campus. They eat, sleep, study, socialize, and adventure as part of a community of students, faculty, and staff
            </p>

            
            <br /> 

            </Col>
        </ Row>
        <br />

        <Row className="infoBox1">
            <h2> Magical Study</h2>
            <Row style={{display:"flex", justifyContent:"center"}}>
                <Col md={6} style={{display:"flex",alignItems: "center"}}>
                <p>
                The fundamental work of Strixhaven University is the application of magic to academic study. Students and faculty aren’t limited to magical topics alone. They pursue studies in every facet of existence, magical or otherwis, applying magic to whatever they study. At Strixhaven, historians call the spirits of the dead to aid their lessons about the past, and arcano-biologists use necromancy to pull at life and coax out death when teaching about the natural world. Simultaneously, mage-artists sculpt elemental energy to create animate art, and arcane symbologists teach students how to recognize and understand the magical glyphs they encounter.
            </p>
                </Col>
                <Col md={6}> 
                    <img 
                    src={magicalPolarity} 
                    style={{ width: "100%", marginBottom: "2.5%", marginTop: "2.5%"}} 
                    alt="Spell book lit up with magical energy" 
                    />
                </Col>
            </Row>
            <p>
                Magic is everywhere on campus. The campus culture encourages finding magical solutions to the most mundane problems, and if characters need access  to a spell they can’t cast, they have a strong chance of finding someone who can cast it.
            </p>
        </Row>
        <br />

        <Row className='infoBox2'>
            <h2> Principles and Polarities</h2>
            <p>
                The colleges and curriculum at Strixhaven are organized around the idea of philosophical principles joined in concordant opposition. Each school embraces the paradoxical unity of two polar principles: life and death, order and chaos, reason and emotion, and so on. The five Founder Dragons are thought to embody the coexistence of these principles, while the ten deans of the colleges stand for the individual principles distinguished from their opposites.
            </p>
            <p>
                A student’s course of learning at Strixhaven involves exploring the tension between these opposing principles, which typically involves late-night arguments in residence halls and study rooms. The university’s teaching philosophy is built on the idea that exploring opposites leads to an understanding of a greater whole. Most people believe that only a being with the wisdom (and long life) of the Founder Dragons or the archaics can truly master both halves of a school’s dichotomy, but a mage must learn at least the rudiments of those halves. A Strixhaven graduate is expected to leave the university prepared to argue the fundamental issues of their school’s philosophies.
            </p>
        </Row>
    </Container>
   
   );
}
