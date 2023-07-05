import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Lorehold from '../../components/images/characters/lorehold-dragon.jpg'
import Silverquill from '../../components/images/characters/silverquill-dragon.jpg'
import Prismari from '../../components/images/characters/prisamri-dragon.jpg'
import Quandrix from '../../components/images/characters/quandrix-dragon.jpg'
import Witherbloom from '../../components/images/characters/witherbloom-dragon.png'
import Oracle from '../../components/images/characters/oracle-of-strixhaven.png'
import Archaics from '../../components/images/archaics.jpg'



// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function Information() {
  return (
   
    <Container >
      <Row className="infoBox1">
        <div>
          <h2 >
            What is Strixhaven?
          </h2>
          <p>
            Being accepted to Strixhaven University is a special honor, the dream of many young students. Strixhaven is a place of enlightenment and learning, and both its graduates and its delegates are typically welcomed and respected wherever they go.
          </p>
          <p>
            Founded seven centuries ago by five ancient dragons, Strixhaven is the premier institution of magical learning, drawing promising young mages from all over. Each equipped with its own campus and faculty, Strixhaven’s five colleges cover a vast array of academic and magical specialties.
          </p>
          <p>
            As a Strixhaven student, you start with a well-rounded education in a rigorous first-year program. In your second year, you choose your preferred specialty at one of the five colleges. You can also partake in a vibrant campus life, with plenty of clubs and other activities. You might even play on one of Strixhaven’s prestigious Mage Tower teams and bask in the adoration of cheering crowds!
          </p>
          
          <p>
            Finally, in this campaign Strixhaven sits within its own demiplane floating through the Astral Sea. Our students will have the opportunity to explore many different planes, worlds and maybe even universes! The Astral Sea is endless and ever-changing and there is always a new discovery hidden just beyond your horizon! 
          </p>
        </div>
        <h4> Colleges of Strixhaven: </h4>
        <ul> 
          <li>
            <b><u>College of Lorehold</u></b>, Explores the past and preserves its lessons for future generations. Also called the College of Archaeomancy.
          </li>
          <li>
            <b><u>College of Prismari</u></b>, Uses the elements to practice the arts. Also called the College of Elemental Arts.
          </li>
          <li>
            <b><u>College of Quandrix</u></b>, Focuses on the mathematics of nature. Also called the College of Numeromancy.
          </li>
          <li>
            <b><u>College of Silverquill</u></b>, Teaches the magic of rhetoric, poetry, oration, and writing. Also called the College of Eloquence.
          </li>
          <li>
            <b><u>College of Witherbloom</u></b>, Harnesses the forces of life and death. Also called the College of Essence Studies.
          </li>
        </ul>
      </Row>
        <br />
        <Row className="infoBox2"> 
          <h2>
            Founding Dragons
          </h2>
        
        <p>
          Strixhaven University was founded by five ancient dragons who, according to legend, hatched from raw magical energy. These Founder Dragons were among the first to master magic, and they realized that only through disciplined study would magic be safe in the hands of other peoples. They founded Strixhaven to facilitate that study and established the five colleges based on the magic that each dragon mastered, as summarized in the Founder Dragons table.
        </p>

        <p>
          To this day, the Founder Dragons roam the world. They no longer associate directly with Strixhaven, preferring to let the deans of the colleges speak in their stead. The dragons’ knowledge is vast, but their tempers can prove short. Mages seek them out only to learn the most elusive secrets. 
        </p>
        <Row style={{display:"flex", justifyContent:"space-evenly"}}>
          <Col md={2} xs={6}>
            <img 
              src={Lorehold} 
              style={{ width: "110%"}} 
              alt="Velomachus Lorehold founding dragon" 
            />
            <h3>Velomachus Lorehold</h3>
          </Col>

          <Col md={2} xs={6}>
            <img 
              src={Prismari} 
              style={{ width: "110%"}} 
              alt="Galezeth Prismari founding dragon" 
            />
            <h3>Galezeth Prismari</h3>
          </Col>

          <Col md={2} xs={6}>
            <img 
              src={Quandrix} 
              style={{ width: "110%",}} 
              alt="Tanazir Quandrix founding dragon" 
            />
            <h3>Tanazir Quandrix</h3>
          </Col>

          <Col md={2} xs={6}>
            <img 
              src={Silverquill} 
              style={{ width: "110%"}} 
              alt="Shadrix Silverquill founding dragon" 
            />
            <h3>Shadrix Silverquill</h3>
          </Col>

          <Col md={2} xs={6}>
            <img 
              src={Witherbloom} 
              style={{ width: "110%"}} 
              alt="Beledros Witherbloom founding dragon" 
            />
            <h3>Beledros Witherbloom</h3>
          </Col>

        
        </Row>
      </Row>

      <br />
     

      <Row className="infoBox1">
        <h2>Snarls and Star Arches</h2>
        <p>
          Magic suffuses all aspects all life and thus the fabric of magic is often described as a Weave that allows spellcasters to interact with the world’s underlying magical reality. However, that fabric is knotted and tangled in some locations, creating a phenomenon called <b><u>snarls</u></b>. At these places, spells can be amplified or distorted in unpredictable ways. A luminous snarl is situated at the very heart of campus, located in the Hall of Oracles in the university’s monumental library, the Biblioplex!
        </p>
        <p>
          Similarly, gravity-defying arch shapes appear throughout over the Biblioplex. These <b><u>star arches</u></b> are made from spokes of natural materials that float in an arch shape, with a precise inner curve and a rough and irregular outer arch. They can stand straight or lie at an angle, and they can be small or enormous, whole or broken, grown over or mysteriously clean. Their irregular spokes evoke the radiating lines of a shining star.
        </p>
        <p>
          The star arches are a mystery left over from the birth of the world. In most cases, the arches simply float inexplicably—silent, immovable, and inert. But many people report seeing an arch appear to them at a critical juncture in their lives, helping them understand a lesson or answer a burning question in their mind. Some scholars believe each arch marks a place of great magic, such as the site of a great mage’s birth or the location of a time-lost spell. Other folk believe these arches are connected with the archaics in some way. Some students have even seen an arch come to life with magic in an archaic’s presence.
        </p>

        <p>
          Both snarls and star arches are subjects of magical research for students and faculty at Strixhaven, who also study wild and dead magic zones, floating earth motes, and other weird locales.
        </p>
      </Row>

      <br />

  

      <Row className='infoBox2'>
        <h2>Oracle and Archaics</h2>
        <Row style={{display:"flex", justifyContent:"space-between"}}>
          <Col className="float-left-text" md={8} style={{display:"flex",alignItems: "center"}}>
            <p>
              The <b><u>Oracle of Strixhaven</u></b>, selected by the Founder Dragons, is often said to be the wisest and most accomplished mage in the multiverse. The Oracle’s lifelong task is to ensure that magic is used to help people and not twisted to evil ends. To be the Oracle, one must understand fundamental truths about the nature of magic, know and wield hundreds of spells, and possess impeccable judgment and virtue. The current Oracle is known as Jadzi, a wise and accomplished mage that lives somewhere in the lands between Strixhaven’s borders
            </p>
          
          </Col>
          <Col className="float-right-img" md={4}>
            <img 
                src={Oracle} 
                style={{ width: "100%", marginBottom: "2.5%"}} 
                alt="Image of the Jadzi" 
              />
          </Col>
        </Row>

        <Row >
          <Col md={6} style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
            <img 
                src={Archaics} 
                style={{ width: "100%", marginBottom: "2.5%"}} 
                alt="Image of an Archaic" 
              />
          </Col>
          <Col md={6} style={{display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center"}}>
          <p>
            Mysteriously linked to the Oracle, <b><u>archaics</u></b> are wise, giant, long-lived beings with an innate talent for magic. They can be seen striding through the wilds, exploring sources of magic with their many arms or contemplating existence through their “eye,” which functions as a magical focus of some kind. Scholars seek out archaics for their vast knowledge of history and magic, but archaics tend to communicate in obscure allusions and cryptic metaphors.
          </p>
          </Col>
          
        </Row>

        <p> 
            Few know that archaics’ existence is linked to a time-warping phenomenon involving the Oracle. When an Oracle dies, their mind and spirit is swept off to the distant past, drawn backward through time toward the intense magical power that brought the world into being. Splinters of that Oracle’s soul and its fragmented memories coalesce into a newborn archaic. Every archaic alive today was born at the dawn of time from the mind of someone who has lived and died (or who will one day live and die) as an Oracle. Archaics speak in cryptic allegories not only to tease and test the eager minds of young mages, but also to cleverly sidestep time paradoxes.
        </p>

        
        
      </Row>
    </Container>
   
  );
}
