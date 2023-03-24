import React from 'react';
import classes from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        <h3 className={classes.text}>
          Copyright © 2023. All rights are reserved
        </h3>
      </div>
      <div className={classes.icon}>
        <a href="https://github.com/ekkasitProject" target={'_blank'}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
