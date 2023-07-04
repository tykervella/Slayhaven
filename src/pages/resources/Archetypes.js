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
                Mechanically speaking, choosing an archetype will grant you additional active and passive abilities as your character reaches certain levels. Each archetype has a combination of passive and active abilities that are available for your characters to learn. You will choose one passive ability for your character at levels 2 and 6 and one active ability for your character at levels 5 and 9. 
            </p>
        </Row>
        <br />


        <Row className="infoBox2">
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
                <h5>Passive Abilities:</h5>
                <ul>
                    <li>
                        <b><u>Playing the Numbers</u></b>, requires level 2, add +2 to any stat of your choice, up to a maximum of 20. 
                    </li>
                    <li>
                        <b><u>Elemental Adept</u></b>, requires level 2, choice a damage type from acid, cold, fire, lighting, necrotic, thunder, or radiant. You ignore resistances and can reroll 1s for damage of the selected type. You must use the damage roll even if it is another 1 (unless you have another ability that allows you to reroll for the selected damage type). 
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is consider possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability. 
                    </li>
                    <li>
                        <b><u>Elemental Expert</u></b>, requires level 6, choice a damage type from acid, cold, fire, lighting, necrotic, thunder, or radiant. You now crit on attack rolls of 19 or 20 for any spell of the selected damage type. Additionally, you can add you spellcasting modifier to any damage rolls of the selected type. 
                    </li>
                </ul>
                <h5>Active Abilities:</h5>
                <ul>
                    <li>
                        <b><u>Catastrophic Spark</u></b>, requires level 5, chose from either fireball or lightning bolt. You learn the selected spell and always have it prepared, even if it is not typically on your class's spell list. Once per day, you may cast the selected spell at its lowest level without expending a spell slot. When you cast the selected spell this way, you may choose a number of creatures up to your proficiency bonus to to have disadvantage on their saving throw.
                    </li>
                    <li>
                        <b><u>Moment of Brilliance</u></b>, requires level 5, once per long rest you are able to push past the limits of what is considered possible. You gain the ability to cast a spell that would normally take an action as a bonus action. Additionally, you can cast two spells in the same turn when casting a spell as a bonus action in this way. 
                    </li>
                    <li>
                        <b><u>Elemental Supernova</u></b>, requires level 9, once per long rest when you cast a spell of 5th level or lower that deals acid, cold, fire, lighting, necrotic, thunder, or radiant damage, you may use your reaction to deal maximum damage instead instead of rolling for damage. 
                    </li>
                    <li>
                        <b><u>Force of nature</u></b>, requires level 9, you learn the spell conjure elemental and always have it prepared, even if it is not typically on your class's spell list. You can cast it once per long rest without expending a spell slot. When you cast the selected spell this way, it does not require concentration.                  
                    </li>
                </ul>

            </Row>
            <br />


            <Row className="infoBox1">
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
                        alt="Mage healing ally with cure wounds spell" 
                    />
                </Col>
                <h5>Passive Abilities:</h5>
                <ul>
                    <li>
                        <b><u>Playing the Numbers</u></b>, requires level 2, add +2 to any stat of your choice, up to a maximum of 20. 
                    </li>
                    <li>
                        <b><u>Healing Adept</u></b>, requires level 2, you can reroll 1s and 2s when restoring HP to yourself or others. You must use the roll even if it is another 1 or 2 (unless you have another ability that allows you to reroll). Additionally, when you restore HP to another you regain HP equal to your total level. 
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is consider possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability. 
                    </li>
                    <li>
                        <b><u>Healing Expert</u></b>, requires level 6, when casting a spell of 1st level or higher that restores HP, increase the amount of HP regained by an amount equal to your total level plus spellcasting modifier. Additionally, you can end one of the following conditions affecting the target: charmed, exhausted, or poisoned. 
                    </li>
                </ul>

                <h5>Active Abilities:</h5>
                <ul>
                    <li>
                        <b><u>Group Healer</u></b>, requires level 5, you learn the spell mass healing word and always have it prepared, even if it is not typically on your class's spell list. Once per day, you may cast the selected spell at its lowest level without expending a spell slot. Whenever you cast mass healing word, the dice rolled to regain HP increases from a d4 to a d6. 
                    </li>
                    <li>
                        <b><u>Guardian Angel</u></b>, requires level 5, once per long rest you are able to manipulate the forces of life and death. As a reaction, when an ally within 30ft of you would be reduced to 0HP you can prevent all damage that would've been inflicted on them. 
                    </li>
                    <li>
                        <b><u>Elemental Supernova</u></b>, requires level 9, once per long rest when you cast a spell of 5th level or lower that deals acid, cold, fire, lighting, necrotic, thunder, or radiant damage, you may use your reaction to deal maximum damage instead instead of rolling for damage. 
                    </li>
                    <li>
                        <b><u>Force of nature</u></b>, requires level 9, you learn the spell conjure elemental and always have it prepared, even if it is not typically on your class's spell list. You can cast it once per long rest without expending a spell slot. When you cast the selected spell this way, it does not require concentration.                  
                    </li>
                </ul>
            </Row>
            <br />


            <Row className="infoBox2">
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
            <br />


            <Row className="infoBox1">
                <h4>The Trickster</h4>
                <Col className="float-left-text" md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                    <p>
                        The Trickster is an unpredictable force, often a rogue or a mage with a fondness for illusions. They revel in cunning, stealth, and deception, always having an ace up their sleeve and a witty retort on their lips. Their unconventional methods often save the day in the most unexpected ways, turning the tide of battles and outsmarting opponents. Despite their often lighthearted demeanor, they carry a depth of character that reveals itself in moments of crisis. The Trickster's resourcefulness and unpredictability often challenge the group's dynamic, pushing them to think beyond their conventional means.
                    </p>
                </Col>
                <Col className="float-right-img" md={6}>
                    <img 
                        src={Trickster} 
                        style={{ width: "100%", marginBottom:"2.5%"}} 
                        alt="Mage attempting to steal an important artifact with mage hand spell " 
                    />
                </Col>
                <h5>Active Abilities:</h5>
                <h5>Passive Abilities:</h5>
            </Row>
            <br />

            <Row className="infoBox2">
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
        
        
    </Container>
  );
}
