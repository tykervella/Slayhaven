import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import extracurricular from '../../components/images/extracurricular.png'
import studentStudying from '../../components/images/student-studying.png'
import lesbians from '../../components/images/lesbians.png'




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
                        Extracurriculars are a key part of student life at Strixhaven. Characters can join extracurriculars to add flavor to the book’s adventures, gain minor rules benefits, and perhaps more easily befriend—or irritate—their classmates. For our adventure, characters will be able to enroll in a single extracurricular for their first year. In their second year, you can enroll in a second extracurricular or take up a campus job. 
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
                        style={{width:"100%"}}
                        alt="Students discuss their shared interests during a sunset date"
                    />
                    <h6>Students find many magical ways to celebrate their achievements</h6>
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
