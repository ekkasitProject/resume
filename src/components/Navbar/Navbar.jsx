import React from 'react';
import { Link } from 'react-scroll';
import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h3 className={classes.logo}>Ekkasit.dev</h3>
      <ul>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            to="hero"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            to="about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            to="project"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={50}
            duration={1000}
            to="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
