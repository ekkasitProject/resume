import React from 'react';
import classes from './About.module.css';
const About = () => {
  return (
    <div id="about">
      <div className={classes.container}>
        <div className={classes['about-content']}>
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />

          <div className={classes.about}>
            <h1>ABOUT ME</h1>
            <h2>
              A dedicated Front-end Developer based in Nakhon Ratchasima,
              Thailand 📍
            </h2>
            <p>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React and Git I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
