import React from 'react';

export default function Portfolio() {
  return (
    <main>
      <h1>Featured Projects</h1>
      <div className="row align-items-center portfolio">
        
        <div className= "col-12 col-md-6">
          <div className='projectBox'>
            <a href="https://github.com/tykervella/palette-town" target="_blank">
              <img src={require('../images/featured-project.png')}/>
              <div class="info-box">
                <h3>Palette Town</h3>
                <p><b>Full stack Webpage.</b> A pokemon TCG deck builder that creates a five color palette based on the pokemon that make up their deck. This includes a full functional deckbuilder, a user login system, and a mock marketplace that accepts test payments through Stripe. This runs using the full MERN stack plus graphQL</p>
              </div>
            </a>
          </div>
        </div>
        
        <div className= "col-12 col-md-6">
          <div className='projectBox'>
            <a href="https://github.com/Ally27/Music-to-My-Ears" target="_blank">
              <img src={require('../images/project1.png')}/>
              <div class="info-box">
                <h3>Music to My Ears</h3>
                <p><b>Full stack Webpage.</b> A blogsite website that allows users to signup/login to create posts that share their spotify playlists. The spotify API is called to render relevant data and allow user accessibility. A design focus is placed on fostering community with user interactions. This project was created using node, express, sql, and handlebars. </p>
              </div>
            </a>
          </div>
        </div>

        <div className= "col-12 col-md-6">
          <div className='projectBox'>
            <a href="https://github.com/tykervella/send-News" target="_blank">
              <img src={require('../images/project2.png')}/>
              <div class="info-box">
                <h3>Send News</h3>
                  <p><b>Front-End Application.</b> Utilzes Javascript, newsdata IO and voiceRSS to create a news search engine that finds news articles, save them for later, or read them aloud!</p>
              </div>
            </a>
          </div>

          <div className='projectBox'>
            <a href="https://github.com/tykervella/Are-you-Smarter-than-a-Coder" target="_blank">
              <img src={require('../images/project4.png')}/>
              <div class="info-box">
                <h3>Are you Smarter than a Coder?</h3>
                <p><b>Front-End Application.</b> Utilizes Javascript to create an interactive game that test your knowledge on coding!</p>
              </div>
            </a>
          </div>
         
        </div>

        <div className= "col-12 col-md-6">
          <div className='projectBox'>
            <a href="https://github.com/tykervella/Do-I-Need-A-Raincoat-" target="_blank">
              <img src={require('../images/project3.png')}/>
              <div class="info-box">
                <h3>Do I need a Raincoat?</h3>
                <p><b>Front-End Application</b> Utilizes JavaScript and Open Weather Map API to create an application that allows users to search a city and get a 5-day forecast.</p>
              </div>
            </a>
          </div>

          <div className='projectBox'>
            <a href="https://github.com/tykervella/Password-dot-com" target="_blank">
              <img src={require('../images/project5.png')}/>
              <div class="info-box">
                <h3>Password Generator</h3>
                <p><b>Front-End Application.</b> Utilizes Javascript to create a random, secure password generator</p>
              </div>
            </a>
          </div>
         
        </div>

        
      </div>
    </main>
  );
}
