import React from 'react';
import classes from './Contact.module.css';
import { TbLocation } from 'react-icons/tb';
import { MdOutlineMailOutline } from 'react-icons/md';
const Contact = () => {
  return (
    <div id="contact" className={classes.container}>
      <div className={classes.content}>
        <h1>Contact</h1>
        <p className={classes['contact-title']}>Don't be shy! Hit me up! 👇</p>
        <div className={classes.contact}>
          <TbLocation className={classes.icon} />
          <span>
            Location
            <p className={classes.detail}>Nakhon Ratchasima, Thailand</p>
          </span>
          <MdOutlineMailOutline className={classes.icon} />
          <span>
            Location <p className={classes.detail}>Ekkasitprivate@gmail.com</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
