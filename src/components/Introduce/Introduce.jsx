import React from 'react';
import classes from './Introduce.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Introduce = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.text}>
          <h1>Front-end React Developer</h1>
          <p>
            Hi, I'm Ekkasit ponkhunthod, Front-end React Developer in Nakhon
            Ratchasima, Thailand. 📍
          </p>
          <div className={classes.icon}>
            <a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <div className={classes['hero-img']}>
          <img src="../../../public/logo.jpg" alt="" />
        </div>
      </div>

      <div className={classes['tech-skil']}>
        <span>Tech stack </span>
        <div className={classes['tech-img']}>
          <img src="../../../public/logo_html.svg" alt="" />
          <img src="../../../public/logo_css.svg" alt="" />
          <img src="../../../public/logo_js.svg" alt="" />
          <img src="../../../public/logo_react.svg" alt="" />
          <img src="../../../public/logo_github.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Introduce;
