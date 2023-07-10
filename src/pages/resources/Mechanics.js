import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import extracurricular from '../../components/images/extracurricular.png'
import studentStudying from '../../components/images/student-studying.png'




export default function Mechanics() {
    return (
        <Container >
            <Row className="infoBox1">
                <h2>Extracurricular Activities</h2>
                <Col md={4} className="float-container">
                    <img
                        src={extracurricular}
                        style={{width:"100%"}}
                        alt="Students celebrating their academic successes with magical fireworks"
                    />
                    <h6>Students find many magical ways to celebrate their achievements</h6>
                </Col>
                <Col md={8} className="float-container">
                    <p>
                        Extracurriculars are a key part of student life at Strixhaven. Characters can join extracurriculars to add flavor to the book’s adventures, gain minor rules benefits, and perhaps more easily befriend—or irritate—their classmates. For our adventure, characters will be able to enroll in a single extracurricular for their first year. In their second year, you can enroll in a second extracurricular, but not if your character already has a job.
                    </p>
                    <p>
                        Characters can gain the benefit from a new extracurricular only by joining it at the start of an academic year, which corresponds to the beginning of a new adventure. Typically, joining an extracurricular in between academic years isn’t eventful. Players should note the changes on their tracking sheet.
                    </p>
                    <p>
                        Before our characters’ first day at Strixhaven they were sent a brochure of extracurricular activities. The University strongly encourages their students to join in an extracurricular activity, as so, our student will each choose a club or activity to join before their first day. 
                    </p>
                    <p>
                        While a student participates in an extracurricular, they gain a Student Die. A Student Die is a d4 a player can roll and add to an ability check that your character makes, provided the check uses one of the skills listed in the extracurricular’s description. A player can wait until after rolling the d20 before rolling the Student Die, but must do so before it is said whether the check succeeds or fail. No more than one Student Die can be rolled per check. After rolling a Student Die, a player can’t roll it again until the character finishes a long rest.
                    </p>
                    <p>
                        Characters can quit an extracurricular at any time, updating their tracking sheet accordingly. When a student quits an Extracurricular, they immediately lose its benefits.
                    </p>
                </Col>
            </Row>
            <br />

            <Row className="infoBox2">
                <h2>Student Schedules</h2>
                <p>
                    Before starting their first day, your characters must choose at least three courses they are taking this year. You must enroll in the first year course offered by your prospective college, if you are unsure which other first year courses to take you may roll a d6 to decide. 
                </p>
                <p>
                    First year characters are also enrolled in a required course, Magical Physiologies, which will be the class representing exam encounters for the academic year. Exam Encounters will be explained in the next section of this page. 
                </p>
                <Col md={6}>
                    <h4> First Year Courses </h4>
                    <ul style={{ listStyleType: "decimal" }} className="float-container-dean">
                        <li>
                            Arcano-botany for Beginners (Witherbloom)
                        </li>
                        <li>
                            Basic Magical Auras (General Studies)
                        </li>
                        <li>
                            Beginning Computational Magic (Quandrix)
                        </li>
                        <li>
                            Beginning Inkomancy (Silverquill)
                        </li>
                        <li>
                            History of Magic and Art (Prismari)
                        </li>
                        <li>
                            Introduction to Archaeomancy (Silverquill)
                        </li>
                    </ul>
                </Col>
                <Col md={6} >
                    <h4> Second Year Courses </h4>
                    <ul style={{listStyleType: "decimal"}} className="float-container-dean">
                        <li>
                            Applied Computational Magic (Quandrix)
                        </li>
                        <li> 
                            Basic Arcane Artifacts (Lorehold)
                        </li>
                        <li>
                            Electro-choreography (Prismari)
                        </li>
                        <li>
                            Historical Figures in Magic (Lorehold)
                        </li>
                        <li>
                            Introduction to Reanimation (Witherbloom)
                        </li>
                        <li>
                            Life Auras and Necrosis (Witherbloom)
                        </li>
                        <li>
                            Linguistics in Spellcasting (Silverquill)
                        </li>
                        <li>
                            Pyromancy and the Arts (Prismari)
                        </li>
                        <li>
                            Quantitative Arcano-physics (Quandrix)
                        </li>
                        <li>
                            Verbal Components and the Law 	Silverquill
                        </li>
                    </ul>
                </Col>
                <Col md={6} className="float-container-dean">
                    <h4> Third Year Courses </h4>
                    <br />
                </Col>
                <Col md={6} className="float-container-dean">
                    <h4> Fourth Year Courses </h4>
                    <p>     

                    </p>
                    <br />
                </Col>
            </Row>
            <br />

            <Row className="infoBox1">
                <h2> Exams </h2>
                <Col md={6} className="float-container float-left-order">
                    <p>
                        Even though the characters’ studies include the trappings of academic life—attending lectures, participating in labs, reading textbooks—those everyday academic activities mostly take place in the background. Midterms and Finals will represent the times in which academics will come to the forefront of our adventure. 
                    </p>
                    <p>
                        Though each character might be a member of a different college at Strixhaven, they must  take at least one general education or interdisciplinary course together each year. It is this course that the Exams will take place.
                    </p>
                    <p>
                        Each Exam encounter has a Studying phase followed by a Testing phase. In general, a character can approach Studying in any way they desire, with that phase then culminating in a single ability check of their choice. In contrast, Testing requires ability checks using specific skills.
                    </p>
                </Col>
                <Col md={6} className="float-container float-right-order">
                    <img
                        src={studentStudying}
                        style={{width:"100%"}}
                        alt="First Year Student preparing for their Magical Physiologies exam"
                    />
                    <h6>First Year Student preparing for their <br /> Magical Physiologies exam</h6>
                </Col>
                <p>
                    If a character fails an Exam, Strixhaven’s bylaws require them to attend tutoring with a junior faculty member until they achieve a passing score. A student who must attend tutoring can’t take part in any Extracurriculars or Jobs. The character thus loses any benefits from Extracurriculars or Jobs, and their player should indicate this suspension on their tracking sheet.
                </p>
                <p>
                    At the end of each academic year, players lose any Student Dice their characters have earned from an Exam.
                </p>
            </Row>
            <br />

        </Container>
    );
}
