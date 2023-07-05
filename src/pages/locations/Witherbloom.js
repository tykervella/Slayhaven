import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import symbol from '../../components/images/colleges/wb-symbol.png'
import building from '../../components/images/colleges/wb-building.png'
import map from '../../components/images/colleges/wb-map.jpg'

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Witherbloom() {
  return (
    <Container >
      <Row className="infoBox1" >
        <Row className="row-center">
          <h2>College of Witherbloom</h2>
          <img
            src={symbol}
            className="college-symbol"
            alt="Witherbloom College Symbol"
          />
        </Row>
        <p>
          At Witherbloom, the <b><u>College of Essence Studies</u></b>, mages draw power from the opposing forces of life and death. These mages brew their spells from natural components and the essence of living creatures, using that power to heal or harm the living or to raise or entreat the dead. They can cause entire forests to blossom out of nowhere or call down old curses that scourge flesh from bone. Some Witherbloom mages defend ecosystems from pollution, while others revel in the power of corruption. They’re at home riding zombie crocodiles down a languid river, picking herbs for a potion to treat a disease, brooding over a chorus of swamp frogs, or summoning fearsome avatars of nature.
        </p>
        <Row>
          <h2>Studies and Philosphies</h2>
          <p>
            The curriculum of Witherbloom College focuses on various sciences, revolving around the life sciences. Biology, ecology, botany, chemistry, and related sciences combine with the study and manipulation of the magical energy of the Positive Plane and the Negative Plane, the primal forces of life and death. Witherbloom’s curriculum shares some overlap with Quandrix’s analysis of the mathematical patterns in nature.
          </p>
          <Col md={6} className="float-container">
            <img
              src={building}
              style={{ width: "100%", paddingBottom: "2.5%" }}
              alt="Witherbloom College Building"
            />
          </Col>
          <Col md={6} className="float-container">
            <p>
              The two deans of Witherbloom are traditionally called the <b><u>Dean of the Root</u></b> and the <b><u>Dean of the Vein</u></b>. These titles are a somewhat abstract way of framing the core division in the college’s philosophy: is growth or decay the driving force in nature?
            </p>
            <p>
              The <b><u>philosophy of the root</u></b>, or growth, focuses on life and its irrepressible drive to thrive. This view celebrates the diversity and adaptability of life-forms, from the tiniest cells to the most complex networks of living things. The growth philosophy asserts that the urge to survive and reproduce is the most essential principle in the cosmos. Mages who adopt this view wield positive energy and practice healing magic.
            </p>
          </Col>
          <p>
            The <b><u>philosophy of the vein</u></b>, or decay, focuses on the inevitability of death and decay. Its traditional name comes from the prominence of vampires within the college, whose conceptions of draining life through the vein have long proven an important counterweight to the growth philosophy of Witherbloom. The decay philosophy sees life energy as a resource to be consumed, rather than a good to be nourished for its own sake. Mages who adopt this view wield negative energy and practice necromancy.
          </p>
        </Row>
      </Row>
      <br />
      <Row className="infoBox2">
        <h2>Witherbloom Campus</h2>
        <p>
          Witherbloom’s campus is tucked away in a wide bayou to the southeast of Strixhaven’s central campus.
        </p>
        <Row className="row-center">
          <img
            src={map}
            className="map-img"
            alt="Witherbloom Campus Map"
          />
        </Row>
        <h4>Sedgemoor</h4>
        <p>
          Sedgemoor, the bayou area that encompasses the Witherbloom campus, is known for a range of swamp creatures: bats, crocodilian monsters, zombified animals, lumbering beasts called brackish trudges, and canine creatures called groffs. Sedgemoor is an excellent place to find pest mascots, herbs, spider silk, fungi, and other ingredients for potions and spells.
        </p>
        <h4>Widdershins Hall</h4>
        <p>
          The center of the Witherbloom campus is Widdershins Hall, a bog mansion that looks like it grew out of Sedgemoor itself. Widdershins is a network of inter­connected wooden pods, with planked walkways leading out of it like tendrils. The hall has a cozy inner chamber where students gather for classwork.
        </p>
        <h4>Detention Bog</h4>
        <p>
          A stinking, thoroughly unpleasant marshland lies adjacent to Sedgemoor: the Detention Bog. Witherbloom faculty members send misbehaving students to this bog as punishment, but it’s also an excellent place to gather herbs for certain cures and curses.
        </p>
      </Row>
    </Container>
  );
}
