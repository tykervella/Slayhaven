import React from 'react';

// returns main body for the About function to export it and be used withing PortfolioContainer when on the #about page
export default function About() {
  return (
    <main>
      {/* Uses flexbox to create a div on the left that has text about me and an image of me in a div on the right */}
      <div class="row align-items-center">

      <h1>About Me...</h1>
      <div className="col-12 col-md-8">
        <p class="text">
          My name is Tyler Kervella, and I am an aspiring, motivated web-developer looking to take my first steps into the professional world.
        </p>
                  
        <p class="text">
          After graduating from the University of Washington in 2019 with a B.S in Biology, I've worked as a Laboratory Technician at a food-testing laboratory ever since. 
        </p>

        <p class="text">
          Deciding it was time for a change, I enrolled in a Full-Stack Web Development bootcamp through the University of Washington in partnership with edX to receive my certificate and pivot into the world of programming. 
        </p>

        <p class="text">
          I look forward to connecting with you! Please reach out to me with any questions, opportunities, or even just to chat~ 
        </p>
      </div>

      <div className="col-md-4">
      <img id="self" src={require('../images/me.JPEG')} alt="My Image" />
      </div>
      </div>
    </main>
  );
}
