import React from 'react';

// returns main body for the Resume function to export it and be used withing PortfolioContainer when on the #resume page
export default function Resume() {
  return (
    <main >
      <h1>Resume</h1>
      {/* Link to resume download included in this p, requires file from /components/files */}
      <p className='text2'>Download my full resume <a href={require('../files/Tkervella_FS_webdev_resume.pdf')} download>here</a>, or quickly view a list of my top skills below!</p>
    

    {/* Bootstrap flexbox set up to create 2 rows of 6 columns each containing a different badge for a skill I have  */}
      <div className="row align-items-center resume">
        <div className="col-6 col-md-2">
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt='html' />
            <p className='badgeLabel'>HTML</p>
          </div>
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt='mysql' />
            <p className='badgeLabel'>MySQL</p>
          </div>
        </div>

        <div className="col-6 col-md-2">
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt='CSS' />
            <p className='badgeLabel'>CSS</p>
          </div>
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt='sequelize' />
            <p className='badgeLabel'>Sequelize</p>
          </div>
        </div>
        
        <div className="col-6 col-md-2">
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt='JavaScript' />
            <p className='badgeLabel'>JavaScript</p>
          </div>
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt='git' />
            <p className='badgeLabel'>Git</p>
          </div>
        </div>

        <div className="col-6 col-md-2">
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" alt='nodeJS' />
            <p className='badgeLabel'>node.JS</p>
          </div>
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt='graphQL' />
            <p className='badgeLabel'>graphQL</p>
          </div>
        </div>

        <div className="col-6 col-md-2">
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt='express' />
            <p className='badgeLabel'>Express</p>
          </div>
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" alt='heroku' />
            <p className='badgeLabel'>Heroku</p>
          </div>
        </div>

        <div className="col-6 col-md-2">
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='mongodb' />
            <p className='badgeLabel'>mongoDB</p>
          </div>
          <div className="badge">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt='React' />
            <p className='badgeLabel'>React</p>
          </div>
        </div>

        
       

      

      </div>
    </main>
  );
}
