import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import symbol from '../../components/images/colleges/cc-symbol.png'
import building from '../../components/images/colleges/cc-building.png'
import map from '../../components/images/colleges/cc-map.jpg'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Central() {
  return (
    <Container >
      <Row className="infoBox2" >
        <Row style={{display:"flex", justifyContent: "center"}}>
          <h2>Strixhaven Central Campus</h2>
          <img 
            src={symbol} 
            className = "college-symbol"            
            alt="Strixhaven College Symbol" 
          />
        </Row>
        <p>
          Strixhaven occupies hundreds of acres, spread out over six campuses. Each of the university’s five colleges has its own campus, and the central campus, home to the Biblioplex and Strixhaven Stadium, serves as a hub for university life. See the appendix or the poster map for a view of the entire university.        
        </p>        
        <Row>
      
          <Col md={6} style={{display:"flex",alignItems: "center"}}>
            <img 
            src={building} 
            style={{ width: "100%", paddingBottom:"2.5%"}} 
            alt="Central College Building" 
            />
          </Col>
          <Col md={6} style={{display:"flex", flexDirection:"column", justifyContent: "center"}}>
            <p>
              Well-maintained roads connect the six campuses, and walking from one to another can take a half-hour or more. Regular shuttles—large carriages drawn by horselike automata—run on an hourly schedule between a station near the Biblioplex and each of the satellite campuses, making the journey in about 15 minutes. In addition, each campus has multiple permanent teleportation circles, which faculty and more advanced students can use when they require instantaneous travel, and several magical portals exist as well. These portals can be unpredictable: they aren’t necessarily open all the time, they don’t always lead to the same places, and some require complicated conditions or keys to open.
            </p>
    
          </Col>
          
  
        </Row>
      </Row>
      <br />
      <Row className="infoBox1">
        <h2>Central Campus</h2>
        <p> 
          The central campus—shown on map 1.1—is the heart of Strixhaven. Its extensive grounds include residence halls for first-year students, dining halls, administration buildings, classrooms and laboratories (mostly used for first-year classes and interdisciplinary studies), and space for social gatherings.        </p>
        <Row style={{display:"flex", justifyContent:"center"}}>
          <img 
            src={map} 
            className= "map-img"
            alt="Central Campus Map" 
          />
        </Row>
        <h4>The Biblioplex</h4>
        <p>
          The center of Strixhaven is the Biblioplex, the university’s main library. At the heart of the library is a snarl, a tangle in the fabric of magic, that glows like a miniature sun in the grand Hall of Oracles. A star arch called the <b><u>Dawnbow</u></b> curves across the sky above the library, marking its location as a center of mystic learning.
        </p>
        <p>
          Arches welcome inquisitive minds into the library. Inside, almost every surface from the floor to the high ceiling is jammed with stacks of books. The interior of the Biblioplex is vast, with long hallways, archive chambers tall enough to have their own weather, and even pools and moat-passages crossable only by boat.
        </p>
        <p>
          Five lines of beacon-towers radiate from the Biblioplex like enormous spokes. These Torches of Enlightenment stretch out to the five college campuses and beyond, more than a hundred miles into the surrounding countryside. They burn perpetually with magical flame, symbolizing the path toward learning and an escape from ignorance.
        </p>
        <h4>Archway Commons</h4>
        <p>
          Just south of the Biblioplex, a star arch curves overhead like a smaller echo of the Dawnbow, and a lush park, Archway Commons, marks the site. More familiarly called the Commons, the park is a favorite spot for students—especially first-years—to gather in fair weather or to wander through on dates. Some of the university’s clubs also use the park to host social gatherings and games, including live-action roleplaying games and casual sports. 
        </p>
        <h4>Firejolt Café</h4>
        <p>
          At the edge of Archway Commons and just outside the Biblioplex stands the cozy Firejolt Café, where students cram both information and caffeine into themselves before exams. The café’s name comes from its trademark beverage, which the manager, a tiefling mage named Ellina, brews with her fire magic. The Firejolt has a reputation as a hangout for first-year students, but older students from all five colleges can be seen inside at all hours.
        </p>
        <h4>Bow’s End Tavern</h4>
        <p>
          At the western end of the Dawnbow, where it meets the ground, stands a smaller university landmark: Bow’s End Tavern, which serves as a hangout for older students. Most patrons come for the live music, deliciously greasy food, and various potions and beverages. Others come to settle their differences in wild duels in the lot behind the tavern. The tavern’s manager is a kind but strict orc named Tulk “the Bulk” Tusktooth.
        </p>
        <h4>Strixhaven Stadium</h4>
        <p>
          The stadium where thousands gather to watch students play Mage Tower (and sometimes other sports) is located near Bow’s End Tavern.
        </p>
      </Row>
    </Container>
  );
}
