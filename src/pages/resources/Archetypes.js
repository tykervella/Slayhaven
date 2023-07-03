import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Damager from '../../components/images/damager.png'
import Healer from '../../components/images/healer.png'
import Protector from '../../components/images/protector.png'
import Trickster from '../../components/images/trickster.jpg'
import Expert from '../../components/images/expert.png'





export default function Archetypes() {
  return (
    <Container >
        <Row className="infoBox1">
            <h2>Archetypes</h2>

            <p>
                Archetypes, in the context of storytelling and character creation, are universally recognizable elements or figures that recur across different cultures and eras. They form the heart of our shared human experiences and tales, encompassing broad categories of characters who embody specific traits, roles, and patterns. In this campaign, you will chose from one of five archetypes for your character: the Damager, the Healer, the Protector, the Trickster, or the Expert. Each archetype represents a distinct facet of the heroic journey, shaping the course of the narrative and driving the team's success through their unique contributions.
            </p>

            <p>
                Mechanically speaking, choosing an archetype will grant you additional active and passive abilities as your character reaches certain levels. Each archetype has four active and four passive abilities that are available for you to choose from. You will choose one active ability for your character at levels 2 and 6 and one passive ability for your character at levels 4 and 8. 
            </p>

            <Row style={{marginBottom:"2.5%"}}>
                <h4>The Damager</h4>

                <Col md={6}>
                    <img 
                        src={Damager} 
                        style={{ width: "100%", marginBottom:"2.5%"}} 
                        alt="Mage causing destruction with fireball spell" 
                    />
                </Col>
                <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <p>
                        The Damager is a raw  power within the group, often acting primarily as an offensive unit. Equipped with formidable weapons or destructive magic, they wield strength with unflinching boldness, tearing through enemy lines and reducing obstacles to rubble. While they can occasionally seem brash or uncontrollable, their courage is undeniable, and their role is pivotal in any battle. However, their power often comes with a price – an internal struggle, a dangerous secret, or a past that continues to haunt them.
                    </p>
                </Col>
                <h5>Active Abilities:</h5>
                <h5>Passive Abilities:</h5>
            </Row>

            <Row style={{marginBottom:"2.5%"}}>
                <h4>The Healer</h4>
                <Col className="float-left-text" md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <p>
                    The Healer is the backbone of any group, often maintaining the vitality and health of the team during and after encounters. They may be a cleric, druid, or a magic user whose abilities focus on restoration and cure. While they might not be the most effective in direct combat, their ability to mend wounds, cure ailments, and even resurrect fallen comrades is invaluable. Despite being cast in a supportive role, the Healer's wisdom and compassion often make them a moral compass, guiding the group through ethical dilemmas and reminding them of the humanity they fight to protect.
                    </p>
                </Col>
                <Col className="float-right-img" md={6}>
                    <img 
                        src={Healer} 
                        style={{ width: "100%", marginBottom:"2.5%"}} 
                        alt="Mage causing healing ally with cure wounds spell" 
                    />
                </Col>
                <h5>Active Abilities:</h5>
                <h5>Passive Abilities:</h5>
            </Row>
            
            <Row style={{marginBottom:"2.5%"}}>
                <h4>The Protector</h4>
                <Col md={6} style={{display:"Flex",justifyContent:"center"}}>
                    <img 
                        src={Protector} 
                        style={{ width: "80%", marginBottom:"2.5%"}} 
                        alt="Mage deflecting a blow with the stone shape spell" 
                    />
                </Col>
                <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <p>
                        The Protector, often seen as a guardian or tank, prioritizes the defense of the group. As a magical barrier wielder, they position themselves between harm and their companions. Their sense of duty and sacrifice are unparalleled, willing to endure the brunt of enemy attacks to keep their allies safe. Though they often bear the physical scars of battle, it's their emotional resilience and unwavering loyalty that truly define them. Their protective instincts extend beyond the battlefield as they often seek to mediate conflicts and maintain group cohesion.

                    </p>
                </Col>
                <h5>Active Abilities:</h5>
                <h5>Passive Abilities:</h5>
            </Row>


            <Row style={{marginBottom:"2.5%"}}>
                <h4>The Trickster</h4>
                <Col className="float-right-img" md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <p>
                        The Trickster is an unpredictable force, often a rogue or a mage with a fondness for illusions. They revel in cunning, stealth, and deception, always having an ace up their sleeve and a witty retort on their lips. Their unconventional methods often save the day in the most unexpected ways, turning the tide of battles and outsmarting opponents. Despite their often lighthearted demeanor, they carry a depth of character that reveals itself in moments of crisis. The Trickster's resourcefulness and unpredictability often challenge the group's dynamic, pushing them to think beyond their conventional means.
                    </p>
                </Col>
                <Col className="float-left-text" md={6}>
                    <img 
                        src={Trickster} 
                        style={{ width: "100%", marginBottom:"2.5%"}} 
                        alt="Mage attempting to steal an important artifact with mage hand spell " 
                    />
                </Col>
                <h5>Active Abilities:</h5>
                <h5>Passive Abilities:</h5>
            </Row>
    

            <Row>
                <h4>The Expert</h4>
                <Col md={6} style={{display:"Flex",justifyContent:"center"}}>
                    <img 
                        src={Expert} 
                        style={{ width: "80%", marginBottom:"2.5%"}} 
                        alt="Mage unlocking new skills with the borrowed knowledge spell" 
                    />
                </Col>
                <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <p>
                        The Expert is the intellectual powerhouse of the group. They are the masters of a specific field, be it magic, history, or politics, bringing depth and clarity to the team's understanding of the world. Their knowledge often uncovers hidden paths, deciphers ancient languages, or unravels the mysteries that block the group's progress. Even though they might not be frontline fighters, their intellectual contributions are pivotal to the group's success. With their vast knowledge comes the burden of the truths they uncover, often revealing harsh realities or uncomfortable truths.
                    </p>
                </Col>
                <h5>Active Abilities:</h5>
                <h5>Passive Abilities:</h5>
            </Row>
        </Row>
        
    </Container>
  );
}
