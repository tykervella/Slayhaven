import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import LHsymbol from '../../components/images/colleges/lh-symbol.png'
import PSsymbol from '../../components/images/colleges/ps-symbol.png'
import QDsymbol from '../../components/images/colleges/qd-symbol.png'
import SQsymbol from '../../components/images/colleges/sq-symbol.png'
import WBsymbol from '../../components/images/colleges/wb-symbol.png'





// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Creation() {
  return (
   
    <Container >
        <Row className="infoBox2">
            <h2>Logisitics</h2>
            <p>
                If you're like me, making characters is one of the most entertaining parts of playing dnd! All of the tiny details of what to include in your character sheet will be contained below. 
            </p>
            <h4>Base Stats Total (BST)</h4>
            <p>
                This campaign we will be using a BST of 74, before any racial benefits. This BST will be used for a point-buy system of character creation with a straight one-for-one exchange system. The minimum for each stat is 8 and the maximum (before adding racial benefits) is 16. 
            </p>
            <p>
                With this system players can create a wide-variety of stat array such as: 8 8 10 16 16 16 or  12 12 12 12 12 14. Remember this is before you add any racial benefits, so be sure to add that to the appropriate stats after creating your stat array!
            </p>
            <h4> Races </h4>
            <p>
                Strixhaven is a fantasy world that floats in the astral sea. All races are available to be played from any official 5e DND source material. If you would like to play a race outside of this, please send me a message and we can discuss this possibility!
            </p>
            <h4> Background </h4>
            <p>
                Strixhaven comes with its own set of backgrounds depending on the College you plan to attend. These backgrounds are covered in more detail in the following section "Choosing your College."
            </p>
            <h4> Classes </h4>
            <p>
                Strixhaven is a school of magic, and though the source book says that all classes can be students at the university, I would really prefer everyone to play a spell caster. I would strongly prefer that everyone play a primary caster, though any secondary caster or eldritch knight/arcane trickster will also work. If you wish to play a class that has no spell slots, please contact me so that we can talk about whether what you are thinking would fit with the setting.
            </p>
            <h4> Multiclassing </h4>
            <p>
                We are starting at level one, so there is no chance for any characters to begin as a multiclass. However, taking levels in a secondary class upon leveling up will be considered on a case-by-case basis. I am usually very lenient on this type of thing, so again, just shoot me a message so we can talk about this!
            </p>
            <h4> Health Points (HP) </h4>
            <p>
                At level one, your player character's HP will be equal your HP total determined by your starting class plus 10. This is to bolster our heroes a little bit and make them less fragile while we are still within the first tier of play.
            </p>
            <h4> Leveling Up </h4>
            <p>
                We will be using a milestone system for leveling up in this campaign. I am loosely following the module outlined within the Strixhaven source material, though as I will be including mostly homebrew adventures we will be leveling up based on my own timeline as I see it to be appropriate.  
            </p>
            <h4> Archetypes </h4>
            <p>
                In addition to all of the standard character creation stuff I have just outlined, you will also need to choose a special archetype for your character starting at level 2! These are custom features that I have created to give our characters a bit more definition and depth. These <a href="/archetypes" >archetypes</a> will provide certain benefits based on your selection and can be viewed by clicking the link in the navbar. 
            </p>
        </Row>
        <br />
        <Row className="infoBox1">
            <h2 >
                Choosing your College
            </h2>
            <p>
                At Strixhaven, students choose their colleges at the start of their second year. But even during a character’s first year, you make college-related decisions for your character, such as a background choice. From the start, your character is making decisions that will lead to their eventual college choice.          
            </p>
            <p>
               Please do NOT feel married to this choice. If your character naturally migrates from one college to another, we will discuss what that means as far as your background and other logisitics.
            </p>
            <p>
                Each college will have an associated spell list and Scholars list. Your character will always have the spells of the appropriate levels prepared from their background's spell list. Moreover, please choose a type of Scholar for your character when creating a character on top of the other background items. If you would like to choose a type of Scholar not included on the provided lists, please don't hesitate to ask me!
            </p>
        </Row>
        <br />
        <Row className="infoBox2" style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <h3 style={{marginBottom:"2.5%"}}>College of Lorehold</h3>
                <img 
                    src={LHsymbol} 
                    className = "college-symbol"
                    alt="Lorehold College Symbol" 
                />
                <Row>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <p>
                            You have spent your youth preparing to be a student of Lorehold College, reading every book on the college’s recommended reading list for prospective students. Your academic passions are in the broad field of history. You might dream of using magic to contact great historical figures or your own ancestors or of recreating the mighty magic of a distant age.
                        </p>
                        <p>
                            If you are interested in pursing a Lorehold character, please check out the <a href="http://dnd5e.wikidot.com/background:lorehold-student" target="_blank">background information</a>. Additionally, remember to take the associated <a href="http://dnd5e.wikidot.com/feat:strixhaven-initiate" target="_blank">feat</a> at level 1. 
                        </p>
                        <p></p>
                    </Col>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"2.5%"}}>
                        <table style={{ margin: "0 auto"}}>
                            <tr style={{textAlign:"center", backgroundColor: "var(--dark)"}}>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spell Level</th>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spells</th>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>1st</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Comprehend Languages, Identify</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>2nd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Borrowed Knowledge, Locate Object</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>3rd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Speak with Dead, Spirit Guardians</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>4th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Arcane Eye, Stone Shape</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}} >5th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Flame Strike, Legend Lore</td>
                            </tr>
                        </table> 
                    </Col>
                    
                </Row>
                        <h4>
                            Lorehold Scholars
                        </h4>
                        <ul style={{listStyleType:"decimal"}}>   
                            <li>
                                <u>Archaeoscribe</u>, chronicling historical truths for posterity (Order)
                            </li>
                            <li> 
                                <u>Battle Medium</u>, strengthening summoned spirits for use in battles (Order)
                            </li>
                            <li>
                                <u>Chaos Scholar</u>, chasing down historical anecdotes as a litany of happenstance (Chaos)
                            </li>
                            <li>
                                <u>Conservator</u>, preserving ancient spell knowledge and other relics of the past (Order)
                            </li>
                            <li>
                                <u>Dustspeaker</u>, conversing with spirits of the past to learn their stories (Chaos)
                            </li>
                            <li>
                                <u>Pastraiser</u>, binding spirits into the monuments that bear their likeness to learn about their inspiring deeds (Order)
                            </li>
                            <li>
                                <u>Relic Reader</u>, divining wisdom from the past from the context of ruin sites (Order)
                            </li>
                            <li>
                                <u>Ruin shaman</u>, wielding magic that helps delve into ancient sites (Chaos)
                            </li>
                            <li>
                                <u>Tomewielder</u>, summoning fiery magic from the words in old writings (Chaos)
                            </li>
                            <li>
                                <u>Warsinger</u>, studying the magic used in ancient wars (Chaos)
                            </li>
                        </ul>
            </Row>
            <br />
            <Row className="infoBox1" style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <h3 style={{marginBottom:"2.5%"}}>College of Prismari</h3>
                <img 
                    src={PSsymbol} 
                    className = "college-symbol"
                    alt="Prismari College Symbol" 
                />
                <Row>
                
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"2.5%"}}>
                        <table style={{ margin: "0 auto"}}>
                            <tr style={{textAlign:"center", backgroundColor: "var(--dark)"}}>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spell Level</th>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spells</th>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>1st</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Chromatic Orb, Thunderwave</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>2nd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Flaming Sphere, Kinetic Jaunt</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>3rd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Haste, Water Walk</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>4th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Freedom of Movement, Wall of Fire</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}} >5th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Cone of Cold, Conjure Elemental</td>
                            </tr>
                        </table> 
                    </Col>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <p>
                            You are an artist, and you have been preparing to hone your craft according to the traditions of Prismari College. Whatever your medium-sculpture, dance, paint, music, drama, architecture, or any other field-you have grand visions of bringing your art to life in a fusion of magic and creativity.                    
                        </p>
                        <p>
                            If you are interested in pursing a Prismari character, please check out the <a href="http://dnd5e.wikidot.com/background:prismari-student" target="_blank">background information</a>. Additionally, remember to take the associated <a href="http://dnd5e.wikidot.com/feat:strixhaven-initiate" target="_blank">feat</a> at level 1. 
                        </p>
                        <p></p>
                    </Col>
                    
                </Row>
                        <h4>
                            Prismari Scholars
                        </h4>
                        <ul style={{listStyleType:"decimal"}}>   
                            <li>
                                <u>Aesthemancer</u>, studying abstract principles of beauty for insight into the workings of the multiverse (Perfection)
                            </li>
                            <li> 
                                <u>Electrovisionary</u>, wielding the forms of lightning as a paintbrush (Expression)
                            </li>
                            <li>
                                <u>Flamesinger</u>, combining fire and music (Expression)
                            </li>
                            <li>
                                <u>Geosculptor</u>, using earth and lava in volatile emotional displays (Expression)
                            </li>
                            <li>
                                <u>Heartrager</u>, turning inner creative fire into personal strength (Expression)
                            </li>
                            <li>
                                <u>Ice Sculptor</u>, crafting ice and cold into immersive experiences (Perfection)
                            </li>
                            <li>
                                <u>Mistmage</u>, shaping cloud, fog, and mist into lasting sculptures (Perfection)
                            </li>
                            <li>
                                <u>Muse Channeler</u>, projecting blasts of inspiration toward others (Expression)
                            </li>
                            <li>
                                <u>Opusmancer</u>, creating magical effects on a monumental scale (Perfection)
                            </li>
                            <li>
                                <u>Spectacle Mage</u>, hurling stormy displays into the sky (Expression)
                            </li>
                            <li>
                                <u>Waterbinder</u>, shaping water into animated elemental forms (Perfection)
                            </li>
                            <li>
                                <u>Zephyrist</u>, weaving wind with dance (Perfection)
                            </li>
                        </ul>
            </Row>
            <br />
            <Row className= "infoBox2" style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <h3 style={{marginBottom:"2.5%"}}>College of Quandrix</h3>
                <img 
                    src={QDsymbol} 
                    className = "college-symbol"
                    alt="Quandrix College Symbol" 
                />
                <Row>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <p>
                            In preparation to become a student of Quandrix College, you have spent years working through the college's math problems for prospective students. Your interests concentrate on the mathematical principles and patterns found in the natural world. You might lean more toward mathematics or physics, or you delve into more abstract studies of metaphysics, arcana, or logic.               
                        </p>
                        <p>
                            If you are interested in pursing a Quandrix character, please check out the <a href="http://dnd5e.wikidot.com/background:quandrix-student" target="_blank">background information</a>. Additionally, remember to take the associated <a href="http://dnd5e.wikidot.com/feat:strixhaven-initiate" target="_blank">feat</a> at level 1. 
                        </p>
                        <p></p>
                    </Col>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"2.5%"}}>
                        <table style={{ margin: "0 auto"}}>
                            <tr style={{textAlign:"center", backgroundColor: "var(--dark)"}}>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spell Level</th>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spells</th>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>1st</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> Entangle, Guiding Bolt</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>2nd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Enlarge/Reduce, Vortex Warp</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>3rd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> Aura of Vitality, Haste</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>4th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Control Water, Freedom of Movement</td>

                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}} >5th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Circle of Power, Passwall</td>

                            </tr>
                        </table> 
                    </Col>
                    
                </Row>
                        <h4>
                            Quandrix Scholars
                        </h4>
                        <ul style={{listStyleType:"decimal"}}>   
                            <li>
                                <u>Abstractor</u>, using magic to stretch the possibilities of space (Theory)
                            </li>
                            <li> 
                                <u>Augmenter</u>, making creatures and things larger (Substance)
                            </li>
                            <li>
                                <u>Fractologist</u>, creating beautiful illusory patterns (Theory)
                            </li>
                            <li>
                                <u>Mana Scholar</u>, studying snarls, leylines, and star arches (Substance)
                            </li>
                            <li>
                                <u>Metamancer</u>, studying metaphysics to alter reality (Theory)
                            </li>
                            <li>
                                <u>Scale Druid</u>, manipulating the size of plants and animals (Substance)
                            </li>
                            <li>
                                <u>Sequence Prophet</u>, studying repeating patterns that bend the mind (Theory)
                            </li>
                            <li>
                                <u>Vivifier</u>, conjuring fractal creatures based on biological life (Substance)
                            </li>
                        </ul>
            </Row>
            <br />
            <Row className= "infoBox1" style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <h3 style={{marginBottom:"2.5%"}}>College of Silverquill</h3>
                <img 
                    src={SQsymbol} 
                    className = "college-symbol"
                    alt="Silverquill College Symbol" 
                />
                <Row>
                
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"2.5%"}}>
                        <table style={{ margin: "0 auto"}}>
                            <tr style={{textAlign:"center", backgroundColor: "var(--dark)"}}>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spell Level</th>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spells</th>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>1st</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Dissonant Whispers, Silvery Barbs</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>2nd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Calm Emotions, Darkness</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>3rd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Beacon of Hope, Daylight</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>4th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Compulsion, Confusion</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}} >5th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> Dominate Person, Rary's Telepathic Bond</td>
                            </tr>
                        </table> 
                    </Col>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <p>
                            You have spent years practicing your writing and oration in the hope of becoming a student of Silverquill College. Your studies focus on language, literature, and the power of words, both magical and otherwise. The metaphorical power of words to illuminate or conceal is joined with the literal ability of magic to do the same in your academic pursuits.                 
                        </p>
                        <p>
                            If you are interested in pursing a Silverquill character, please check out the <a href="http://dnd5e.wikidot.com/background:silverquill-student" target="_blank">background information</a>. Additionally, remember to take the associated <a href="http://dnd5e.wikidot.com/feat:strixhaven-initiate" target="_blank">feat</a> at level 1. 
                        </p>
                        <p></p>
                    </Col>
                    
                </Row>
                        <h4>
                            Silverquill Scholars
                        </h4>
                        <ul style={{listStyleType:"decimal"}}>   
                            <li>
                                <u>Bantermage</u>, sing incisive observation to pierce rivals’ confidence (Shadow)
                            </li>
                            <li> 
                                <u>Duskmage</u>, conjuring inky voids of shadow magic (Shadow)
                            </li>
                            <li>
                                <u>Inkcaster</u>, summoning living inklings to service (Shadow)
                            </li>
                            <li>
                                <u>Lumimancer</u>, bringing light to bear on shameful situations and holding corrupt institutions to account (Radiance)
                            </li>
                            <li>
                                <u>Shadowwing</u>, forming weapons from darkness to slice and stab at foes (Shadow)
                            </li>
                            <li>
                                <u>Silvertongue</u>, bathing others in the light of inspiring words (Radiance)
                            </li>
                            <li>
                                <u>Vainglory</u>, wielding the power of a perfectly crafted compliment to enhance a person’s best qualities (Radiance)
                            </li>
                            <li>
                                <u>Warsinger</u>, stirring hearts through poetic performance and song (Radiance)
                            </li>
                        
                        </ul>
            </Row>
            <br /> 
            <Row className="infoBox2" style={{display:"flex", flexDirection:"column", alignItems: "center"}}>
            <h3 style={{marginBottom:"2.5%"}}>College of Witherbloom</h3>
                <img 
                    src={WBsymbol} 
                    className = "college-symbol"
                    alt="Witherbloom College Symbol" 
                />
                <Row>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
                        <p>
                            You filled your childhood with rudimentary alchemical experiments, all in the hope of becoming a student of Witherbloom College. The life sciences are the focus of your reading, which include biology and necromancy. Brewing strange concoctions with medicinal properties, exploring the anatomies of monsters, and cataloging swamp flora are the kinds of studies you might pursue at Witherbloom College.                  
                        </p>
                        <p>
                            If you are interested in pursing a Witherbloom character, please check out the  <a href="http://dnd5e.wikidot.com/background:witherbloom-student" target="_blank">background information</a>. Additionally, remember to take the associated <a href="http://dnd5e.wikidot.com/feat:strixhaven-initiate" target="_blank">feat</a> at level 1. 
                        </p>
                        <p></p>
                    </Col>
                    <Col md={6} style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", marginBottom:"2.5%"}}>
                        <table style={{ margin: "0 auto"}}>
                            <tr style={{textAlign:"center", backgroundColor: "var(--dark)"}}>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spell Level</th>
                                <th style={{border: "3px solid var(--darkest)", padding: "10px"}}>Spells</th>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>1st</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}>Cure Wounds, Inflict Wounds</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>2nd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Lesser Restoration, Wither and Bloom</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>3rd</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Revivify, Vampiric Touch</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--lightest)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}}>4th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Blight, Death Ward</td>
                            </tr>
                            <tr style={{backgroundColor: "var(--light)"}}>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px", textAlign:"center"}} >5th</td>
                                <td style={{border: "3px solid var(--darkest)", padding: "10px"}}> 	Antilife Shell, Greater Restoration</td>
                            </tr>
                        </table> 
                    </Col>
                    
                </Row>
                        <h4>
                            Witherbloom Scholars
                        </h4>
                        <ul style={{listStyleType:"decimal"}}>   
                            <li>
                                <u>Banelock</u>, using concoctions of noxious ingredients for withering magic (Decay)
                            </li>
                            <li> 
                                <u>Bleed doctor</u>, w drain the essence of living creatures to fuel sinister spells (Decay)
                            </li>
                            <li>
                                <u>Boon witch</u>, brewing drafts to empower the living (Growth)
                            </li>
                            <li>
                                <u>Boughcaller</u>, summoning creatures from bogs (Growth)
                            </li>
                            <li>
                                <u>Dreadbones</u>, infusing dead tissue with magic to create Undead servants (Decay)
                            </li>
                            <li>
                                <u>Earthcroucher</u>, connecting directly with the land to power nature magic (Growth)
                            </li>
                            <li>
                                <u>Leafbinder</u>, using medicinal herbs to soothe wounds (Growth)
                            </li>
                            <li>
                                <u>Pestcatcher</u>, harvesting life energy from the pests of the bayou (Decay)
                            </li>
                            
                        </ul>
            </Row>                        
        
    </Container>
   
  );
}
