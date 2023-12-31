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
                    Archetypes, in the context of storytelling and character creation, are universally recognizable elements or figures that recur across different cultures and eras. They form the heart of our shared human experiences and tales, encompassing broad categories of characters who embody specific traits, roles, and patterns. In this campaign, you will choose from one of five archetypes for your character: the Damager, the Expert, the Healer, the Protector, or the Trickster. Each archetype represents a distinct facet of the heroic journey, shaping the course of the narrative and driving the team's success through their unique contributions.
                </p>

                <p>
                    Mechanically speaking, choosing an archetype will grant you additional abilities as your character reaches certain levels. Each archetype has a combination of passive and active abilities that characters can learn. You will choose a passive ability for your character at levels 2 and 6 and a active ability for your character at levels 5 and 9.
                </p>

                <p>
                    Moreover, you get the following static ability at level 2 when you choose the given archetype.

                    <ul>
                        <li>
                            <b><u>The Damager,</u></b> add +2 to your primary spellcasting ability, up to a maximum of 20. Additionally, whenever you cast a cantrip that requires enemies to make a ST, they still take half damage even if they fail the ST. 
                        </li>
                        <li>
                            <b><u>The Expert,</u></b> add +2 to any ability, up to a maximum of 20.  Additionally, you gain a permanent +1 to all saving throws and ability checks.
                        </li>
                        <li>
                            <b><u>The Healer,</u></b> add +2 to your primary spellcasting ability or to your constitution, up to a maximum of 20. Additionally, whenever you level up you may choose spells from the cleric spell list in addition to your own. You learn the spells cure wounds and healing word if you do not already know them. 
                        </li>
                        <li>
                            <b><u>The Protector,</u></b> add +2 to your constitution or strength ability, up to a maximum of 20. Additionally, you gain proficiency in light and medium armor as well as shields. You are still able to complete all somatic components for your spells while wielding your shield. 
                        </li>
                        <li>
                            <b><u>The Trickster,</u></b> Upon taking archetype: add +2 to your dexterity ability, up to a maximum of 20. Additionally, you have advantage on dexterity saving throws. 
                        </li>
                    </ul>
                </p>
            </Row>
            <br />

            <Row className="infoBox2" >
                <h2 id="damager">The Damager</h2>

                <Col md={6}>
                    <img
                        src={Damager}
                        style={{ width: "100%", marginBottom: "2.5%" }}
                        alt="Mage causing destruction with fireball spell"
                    />
                </Col>
                <Col md={6} className="float-container">

                    <p>
                        The Damager is a raw  power within the group, often acting primarily as an offensive unit. Equipped with formidable weapons or destructive magic, they wield strength with unflinching boldness, tearing through enemy lines and reducing obstacles to rubble. While they can occasionally seem brash or uncontrollable, their courage is undeniable, and their role is pivotal in any battle. However, their power often comes with a price – an internal struggle, a dangerous secret, or a past that continues to haunt them.
                    </p>
                </Col>
                <h4>Passive Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Elemental Sculpting</u></b>, requires level 2, when you cast a spell that dealts AOE damage, you do not damage your allies. Additionally, you gain a permanent +1 to your spell save DC and spell attack bonus. 
                    </li>
                    <li>
                        <b><u>Elemental Adept</u></b>, requires level 2, choose a damage type from acid, cold, fire, lighting, necrotic, thunder, or radiant. You ignore resistances and can reroll 1s for damage of the selected type. You must use the damage roll even if it is another 1 (unless you have another ability that allows you to reroll for the selected damage type).
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is considered possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability.
                    </li>
                    <li>
                        <b><u>Elemental Expert</u></b>, requires level 6, choice a damage type from acid, cold, fire, lighting, necrotic, thunder, or radiant. You now crit on attack rolls of 19 or 20 for any spell of the selected damage type. Additionally, you now add your spellcasting modifier to any damage rolls of the selected type.
                    </li>
                </ul>
                <h4>Active Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Catastrophic Spark</u></b>, requires level 5, chose from either <a href="http://dnd5e.wikidot.com/spell:fireball" target="_blank">fireball</a> or <a href="http://dnd5e.wikidot.com/spell:lightning-bolt" target="_blank">lightning bolt</a>. You learn the selected spell and always have it prepared, even if it is not typically on your class's spell list. Once per day, you may cast the selected spell at its lowest level without expending a spell slot. When you cast the selected spell this way, you may choose a number of creatures up to your proficiency bonus to to have disadvantage on their saving throw.
                    </li>
                    <li>
                        <b><u>Moment of Brilliance</u></b>, requires level 5, once per long rest your mastery of arcane technique allows you to momentarily slow time down in order to perform a show-stopping combo attack. You gain the ability to cast a spell of 3rd level or lower that would normally take an action to cast as a bonus action. More importantly, you can cast two spells that expend a spell slot in the same turn when casting a spell as a bonus action in this way.
                    </li>
                    <li>
                        <b><u>Force of Nature</u></b>, requires level 9, you learn the spell <a href="http://dnd5e.wikidot.com/spell:conjure-elemental" target="_blank">conjure elemental</a> and always have it prepared, even if it is not typically on your class's spell list. You can cast it once per long rest without expending a spell slot. When you cast the selected spell this way, it does not require concentration.
                    </li>
                    <li>
                        <b><u>Elemental Supernova</u></b>, requires level 9, once per long rest when you cast a spell of 5th level or lower that deals acid, cold, fire, lighting, necrotic, thunder, or radiant damage, you may use your reaction to deal maximum damage instead instead of rolling for damage.
                    </li>
                </ul>

            </Row>
            <br />

            <Row className="infoBox1">
                <h2>The Expert</h2>
                <Row>
                    <Col md={6} className="float-container float-left-order">

                        <p>
                            The Expert is the intellectual powerhouse of the group. They are the masters of a specific field, be it magic, history, or politics, bringing depth and clarity to the team's understanding of the world. Their knowledge often uncovers hidden paths, deciphers ancient languages, or unravels the mysteries that block the group's progress. Even though they might not be frontline fighters, their intellectual contributions are pivotal to the group's success. With their vast knowledge comes the burden of the truths they uncover, often revealing harsh realities or uncomfortable truths.
                        </p>
                    </Col>
                    <Col md={6} className="float-container float-right-order">
                        <img
                            src={Expert}
                            style={{ width: "80%", marginBottom: "2.5%" }}
                            alt="Mage unlocking new skills with the borrowed knowledge spell"
                        />
                    </Col>
                </Row>
                <h4>Passive Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Tactical Insights</u></b>, requires level 2, you gain proficiency in a saving throw of your choice. Additionally, you and any friendly creature that starts combat within 5ft of you, gain a bonus to your initiative equal to your proficiency bonus. 
                    </li>
                    <li>
                        <b><u>Sentinel's Wisdom</u></b>, requires level 2, you gain proficiency in any two skills of your choice. Additionally, when you are conscious, you are unable to be surprised. 
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is considered possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability.
                    </li>
                    <li>
                        <b><u>Expert Analysis</u></b>, requires level 6, you may learn any level 2 passive ability from one of the other archetypes listed here. 
                    </li>
                </ul>
                <h4>Active Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Arcane Appropriation</u></b>, requires level 5, you learn the spell <a href="http://dnd5e.wikidot.com/spell:counterspell" target="_blank">counterspell</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. Additionally, when you successfully counter an enemy's spell, you gain temporary insights into the arcane essence of that spell. Until the end of your next turn, you learn the exact details of the countered spell and gain the ability to cast it using one of your own spell slots of the appropriate level. You may appropriate a spell in this way a number of times equal to your proficiency bonus.
                    </li>
                    <li>
                        <b><u>Spellweaver's Insight</u></b>, requires level 5, once per long rest you are able to tap into the infinite knowledge of the weave and gain magical insights. As a bonus action, you instantly prepare a single spell from any class's spell list. This spell must be of a level that you can cast. You may remember a spell in this way a number of times equal to your proficiency bonus, though you may not have more than one spell added to your spell list in this manner at a time.
                    </li>
                    <li>
                        <b><u>Historical Echoes</u></b>, requires level 9, you learn the spell <a href="http://dnd5e.wikidot.com/spell:true-seeing" target="_blank">true seeing</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. Additionally, when you cast true seeing, you also get brief glimpses of significant past events that happened in your immediate surroundings within the last 24 hours.
                    </li>
                    <li>
                        <b><u>Expert Cleansing</u></b>, requires level 9, once per long rest you are able to utilize your breadth of knowledge in order to disrupt spells' effects. As an action you may touch a friendly creature and end the effect all spells that are currently affecting them. You may end a spell's effect in this way a number of times equal to your proficiency bonus.
                    </li>
                </ul>

            </Row>
            <br />

            <Row className="infoBox2">
                <h2>The Healer</h2>
                <Col className="float-container" md={6}>
                    <img
                        src={Healer}
                        style={{ width: "100%", marginBottom: "2.5%" }}
                        alt="Mage healing ally with cure wounds spell"
                    />
                </Col>
                <Col className="float-container" md={6}>
                    <p>
                        The Healer is the backbone of any group, often maintaining the vitality and health of the team during and after encounters. They may be a cleric, druid, or a magic user whose abilities focus on restoration and cure. While they might not be the most effective in direct combat, their ability to mend wounds, cure ailments, and even resurrect fallen comrades is invaluable. Despite being cast in a supportive role, the Healer's wisdom and compassion often make them a moral compass, guiding the group through ethical dilemmas and reminding them of the humanity they fight to protect.
                    </p>
                </Col>

                <h4>Passive Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Overflowing Life</u></b>, requires level 2, whenever you cast a healing spell, and the healing points exceed their maximum health, the excess healing is granted as temporary hit points. The number of temporary HP granted in this way cannot exceed your level. While a creature has temporary hitpoints granted in this way, they are under the effects of the bless spell. 


                    </li>
                    <li>
                        <b><u>Healing Adept</u></b>, requires level 2, when casting a spell of 1st level or higher you can reroll 1s when restoring HP to yourself or others. You must use the roll even if it is another 1 (unless you have another ability that allows you to reroll). Additionally, when you restore HP to another creature you also regain HP equal to your proficiency bonus.
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is considered possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability.
                    </li>
                    <li>
                        <b><u>Healing Expert</u></b>, requires level 6, when casting a spell of 1st level or higher that restores HP, increase the amount of HP regained by an amount equal to your proficiency bonus plus your spell casting modifier. Additionally, you can end one of the following conditions affecting the target: charmed, exhausted, or poisoned.
                    </li>
                </ul>

                <h4>Active Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Group Healer</u></b>, requires level 5, you learn the spell <a href="http://dnd5e.wikidot.com/spell:mass-healing-word" target="_blank">mass healing word</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. Whenever you cast mass healing word, the dice rolled to regain HP increases from a d4 to a d8.
                    </li>
                    <li>
                        <b><u>Essence Drain</u></b>, requires level 5, once per long rest you are able to manipulate the forces of life and death. When you deal damage to an enemy you can use your reaction to cause one creature within 60ft of you to restore HP equal to the damage you just inflicted. You can restore HP in this way a number of times equal to your proficiency bonus. 
                    </li>
                    <li>
                        <b><u>Divine Cure</u></b>, requires level 9, you learn the spell <a href="http://dnd5e.wikidot.com/spell:heal" target="_blank">heal</a> and always have it prepared, even if it is not typically on your class's spell list. You can cast it once per long rest without expending a spell slot. When casting this spell, you can divide the HP restored by a number of creatures up to your proficiency bonus in any way you would like. Each creature must be within range of the spell. All other effects of heal are extended to each creature that had at least 1 HP restored from this spell.
                    </li>
                    <li>
                        <b><u>Life Weaver</u></b>, requires level 9, once per long rest you may raise a fallen ally as an action. An ally within 60ft of you that has been dead for no longer than 1 hour can be raised with half of their maximum HP. All diseases, spells, and other conditions affecting the individual before their death are alleviated.
                    </li>
                </ul>
            </Row>
            <br />


            <Row className="infoBox1">
                <h2>The Protector</h2>
                <Row>
                    <Col md={6} className="float-left-order float-container">
                        <p>
                            The Protector, often seen as a guardian or tank, prioritizes the defense of the group. As a magical barrier wielder, they position themselves between harm and their companions. Their sense of duty and sacrifice are unparalleled, willing to endure the brunt of enemy attacks to keep their allies safe. Though they often bear the physical scars of battle, it's their emotional resilience and unwavering loyalty that truly define them. Their protective instincts extend beyond the battlefield as they often seek to mediate conflicts and maintain group cohesion.
                        </p>
                    </Col>
                    <Col md={6} className="float-right-order float-container">
                        <img
                            src={Protector}
                            style={{ width: "80%", marginBottom: "2.5%" }}
                            alt="Mage deflecting a blow with the stone shape spell"
                        />
                    </Col>
                </Row>
                <h4>Passive Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Heavy Mage Armor</u></b>, requires level 2, you learn the spell <a href="http://dnd5e.wikidot.com/spell:mage-armor" target="_blank">mage armor</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. In addition, you add your proficiency bonus to the AC granted to you from this spell's affect.
                    </li>
                    <li>
                        <b><u>Unyielding</u></b>, requires level 2, you gain resistance to bludgeoning, piercing, and slashing damage. Additionally you are immune to poison and disease.
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is considered possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability.
                    </li>
                    <li>
                        <b><u>Protective Presence</u></b>, requires level 6, your solid presence allows it such that you are more sturdy. You gain 2HP for each level you currently have, and you gain an additional 2HP each time you level up. Additionally are immune to the frightened and charmed condition. 
                    </li>

                </ul>

                <h4>Active Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Elastic Shield</u></b>, requires level 5, you learn the spell <a href="http://dnd5e.wikidot.com/spell:shield" target="_blank">shield</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. Additionally, you gain the ability to target an ally within 60ft of you instead of targeting yourself with this spell. When cast in this way, the effects of the shield only last until the end of the triggering attack and your reaction is still consumed.
                    </li>
                    <li>
                        <b><u>Guardian Angel</u></b>, requires level 5, once per long rest you are able to manipulate the forces of life and death to protect an ally. As a reaction, when an ally within 60ft of you would be reduced to 0HP you can prevent all damage that would've been inflicted on them. The protected ally is then teleported to a spot within 5ft of you of your choice and they gain resistance to all types of damage until the end of their next turn.  
                    </li>
                    <li>
                        <b><u>Luxury Accomodations</u></b>, requires level 9, your mastery of protective magic has grown so vastly that you are able to manipulate time and space itself in order to keep your allies from danger. You learn the spell <a href="http://dnd5e.wikidot.com/spell:mordenkainens-magnificent-mansion" target="_blank">Mordenkainen's Magnificent Mansion</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot.
                    </li>
                    <li>
                        <b><u>Aura of Safety</u></b>, requires level 9, once per long rest you can activate a 10ft-radius aura as a bonus action. You can declare an ability score (such as strength or intellegence) and all associated saving throws and ability checks will be made with advantage for any friendly creature within your aura. Additionally, all friendly creatures also gain a +2 to their AC when within the aura of safety. This aura last for 1 minute or until you end it as a bonus action.
                    </li>

                </ul>
            </Row>
            <br />


            <Row className="infoBox2">
                <h2>The Trickster</h2>

                <Col className="float-container" md={6}>
                    <img
                        src={Trickster}
                        style={{ width: "100%", marginBottom: "2.5%" }}
                        alt="Mage attempting to steal an important artifact with mage hand spell "
                    />
                </Col>
                <Col className="float-container">
                    <p>
                        The Trickster is an unpredictable force, often a rogue or a mage with a fondness for illusions. They revel in cunning, stealth, and deception, always having an ace up their sleeve and a witty retort on their lips. Their unconventional methods often save the day in the most unexpected ways, turning the tide of battles and outsmarting opponents. Despite their often lighthearted demeanor, they carry a depth of character that reveals itself in moments of crisis. The Trickster's resourcefulness and unpredictability often challenge the group's dynamic, pushing them to think beyond their conventional means.
                    </p>
                </Col>
                <h4>Passive Abilities:</h4>
                <ul>
                    <li>
                        <b><u> Charlatan's Legerdemain</u></b>, requires level 2, you gain proficiency in sleight of hand. Additionally, you learn the cantrip <a href="http://dnd5e.wikidot.com/spell:mage-hand" target="_blank">mage hand</a>, and when you cast it you can make the spectral hand invisible. You can perform the following additional tasks with it:

                        <ul>
                            <li>
                                You can stow one object the hand is holding in a container worn or carried by another creature.
                            </li>
                            <li>
                                You can retrieve an object in a container worn or carried by another creature.
                            </li>
                            <li>
                                You can use thieves' tools to pick locks and disarm traps at range.
                            </li>
                        </ul>

                        You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.
                    </li>
                    <li>
                        <b><u>Infallable Charm</u></b>, requires level 2, you learn how to charm people without them even knowing. If you attempt to charm someone and they succeed on their saving throw, they do not become aware they were almost charmed.
                    </li>
                    <li>
                        <b><u>Arcane Excellence</u></b>, requires level 6, you have pushed past the limits of what is considered possible. Add +2 to your choice of Charisma, Intellegence, or Wisdom. This also raises your ability score cap from 20 to 22 for the selected ability.
                    </li>
                    <li>
                        <b><u>Trickster's Cunning</u></b>, requires level 6, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action. Additionally, you gain expertise in a tool of your choice.
                    </li>
                </ul>

                <h4>Active Abilities:</h4>
                <ul>
                    <li>
                        <b><u>Multi Step</u></b>, requires level 5, you learn the spell <a href="http://dnd5e.wikidot.com/spell:misty-step" target="_blank">misty step</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. Additionally, you learn how to manipulate the weave and take someone else with you as you teleport. You may target a willing creature within 5ft of you and bring them with you as you misty step. They must appear within 5ft of where you teleport to in a position of your choice.
                    </li>
                    <li>
                        <b><u>Uncanny Redirection</u></b>, requires level 5, you can use your reaction in response to being hit by a melee weapon attack. Utilizing techniques of misdirection, you cause the attacker to instead harm themselves. You deal the maximum damage that would have been dealt to you. You may redirect damage in this way a number of times equal to your proficiency bonus. 
                    </li>
                    <li>
                        <b><u>Disappearing act</u></b>, requires level 9, you learn the spell <a href="http://dnd5e.wikidot.com/spell:greater-invisibility" target="_blank">greater invisibility</a> and always have it prepared, even if it is not typically on your class's spell list. Once per long rest, you may cast the selected spell at its lowest level without expending a spell slot. Additionally, you gain the ability to cast this spell as a reaction in response to taking damage. When cast in this way, you gain resistance to all damage until the start of your next turn.
                    </li>
                    <li>
                        <b><u>Smoke and Mirrors</u></b>, requires level 9, once per long rest you can activate a 10ft-radius aura as an action. Manipulating the weave, you draw upon powerful illusionary magic to blur the line between reality and fiction. All attacks against you or your allies within the aura are made with disadvantage as the weave shifts and changes to obscure the exact position of you and your allies. Additionally, any enemy that begins their turn within this aura must make a wisdom saving throw against your spellcasting DC or fall under the effects of the <a href="http://dnd5e.wikidot.com/spell:confusion" target="_blank">confusion</a> spell until the start of their next turn. This aura last for 1 minute or until you end it as a bonus action.
                    </li>
                </ul>

            </Row>
        </Container>
    );
}
