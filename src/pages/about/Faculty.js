import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import MavindaSharpbeak from '../../components/images/characters/Mavinda-Sharpbeak.jpg'
import Gyome from '../../components/images/characters/Gyome.jpg'
import ArtElemental from '../../components/images/art-elemental-mascot.jpg'
import Inkling from '../../components/images/Inkling-mascot.jpg'
import Fractal from '../../components/images/fractal-mascot.jpg'
import SpiritStatue from '../../components/images/spirit-statue-mascot.jpg'
import Pest from '../../components/images/Pest-mascot.jpg'




// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Faculty() {
    return (
        <Container >
            <Row className="infoBox1">
                <h2> Administration</h2>
                <Col md={7} className="float-container">
                    <p>
                        The day-to-day functioning of Strixhaven relies on hundreds of laborers, clerks, coaches, administrators, and others. These personnel include folk like Mavinda Sharpbeak, the kindly owlin guidance counselor who takes first-year students under her wing, and Gyome, the troll chef of Witherbloom College. In addition to legions of people who devote their lives to the university’s operations, numerous automatons and artificial life-forms—various kinds of Constructs—serve in various roles, including campus guides and library assistants.
                    </p>

                    <p>
                        All these operations are managed by an administration overseen by the ten deans, two in each college. Each dean is an esteemed professor who embraces one side of their school’s philosophical dichotomy. The deans, like the professors who serve as counselors to students, view it as their role to disagree with each other and guide the college by way of their arguments. Furthermore, rivalries among the deans only exacerbate this combative attitude.
                    </p>
                    <p>
                        When the argumentative deans fail to chart a coherent course for Strixhaven, the Founder Dragons are occasionally forced to intervene. They don’t step in directly, but a director known as the Voice of the Founders—currently an imposing man named Taiva—speaks on the dragons’ behalf.
                    </p>
                </Col>
                <Col md={5} style={{ margin: "0 auto" }}>
                    <Row>
                        <img
                            src={MavindaSharpbeak}
                            style={{ width: "90%" }}
                            alt="Guidance Counselor: Mavinda Sharpbeak"
                        />
                        <h5>Mavinda Sharpbeak</h5>
                    </Row>
                    <Row>
                        <img
                            src={Gyome}
                            style={{ width: "90%" }}
                            alt="Witherbloom Chef: Gyome"
                        />
                        <h5>Gyome</h5>
                    </Row>
                </Col>
            </Row>
            <br />
            <Row className="infoBox2">
                <h2> Instructors and Professors</h2>
                <p>
                    The faculty members of Strixhaven are mages and scholars—experts in their various fields and in the use of magic to enhance their studies. They are dedicated to their research and to educating generations of mage-students who follow in their footsteps. Some faculty members value research more than teaching, while others make education their highest priority. But all find some balance between the two.
                </p>
                <h4> Instructors </h4>
                <p>
                    Strixhaven’s faculty begin their careers as instructors, focusing primarily on teaching classes and crafting curriculum, while the school administration evaluates their performance. At the end of a provisional period, which can last from one to several years, an instructor is elevated to the rank of professor or let go.
                </p>
                <h4> Professors </h4>
                <p>
                    Professors who have distinguished themselves over the course of a long career—typically at least twenty years—hope to be recognized with the title of esteemed professor. This honor is bestowed in recognition of groundbreaking research as well as exceptional teaching.
                </p>
                <p>
                    Upon retiring, a professor receives the title of mage emeritus. Mages emeriti are held in high esteem and welcomed to campus as guest lecturers.
                </p>
            </Row>
            <br />
            <Row className="infoBox1">
                <h2>
                    Mascots
                </h2>
                <p>
                    Each of Strixhaven’s five colleges has a mascot—a small creature associated with the magic of the school and often found wandering their respective campuses. Witherbloom’s mascots, pests, are naturally found in the world around the campus. The other colleges’ mascots are brought into being through magic. Lorehold's mascot is a spirit statue, Prismari's Mascot is an art elemental, Quandrix's mascot is a fractal, Silverquill's mascot is an inkling, and finally Witherbloom's mascot is a pest.
                </p>
                <p>
                    The five kinds of mascots act as companions for students and faculty, sometimes serving as willing subjects for experiments or demonstrations, and occasionally even helping out in a duel or a more serious combat situation. Most notably, mascots are also playing pieces of sorts in the Strixhaven sport of Mage Towe
                </p>
                <Row style={{ display: "flex", justifyContent: "space-between", margin: "2.5% 0" }}>
                    <Col md={2} xs={6} style={{ margin: "0 auto" }}>
                        <img
                            src={SpiritStatue}
                            style={{ height: "180px", width: "100%" }}
                            alt="Spirit Statue Mascot"
                        />
                        <h5>Spirit Statue Mascot</h5>
                    </Col>
                    <Col md={2} xs={6} style={{ margin: "0 auto" }}>
                        <img
                            src={ArtElemental}
                            style={{ height: "180px", width: "100%" }}
                            alt="Art Elemental Mascot"
                        />
                        <h5>Art Elemental Mascot</h5>
                    </Col>
                    <Col md={2} xs={6} style={{ margin: "0 auto" }}>
                        <img
                            src={Fractal}
                            style={{ height: "180px", width: "100%" }}
                            alt="Fractal Mascot"
                        />
                        <h5>Fractal <br /> Mascot</h5>
                    </Col>
                    <Col md={2} xs={6} style={{ margin: "0 auto" }}>
                        <img
                            src={Inkling}
                            style={{ height: "180px", width: "100%" }}
                            alt="Inkling Mascot"
                        />
                        <h5>Inkling  <br />  Mascot</h5>
                    </Col>
                    <Col md={2} xs={6} style={{ margin: "0 auto" }}>
                        <img
                            src={Pest}
                            style={{ height: "180px", width: "100%" }}
                            alt="Pest Mascot"
                        />
                        <h5>Pest <br /> Mascot</h5>
                    </Col>
                </Row>
            </Row>
        </Container>

    );
}
