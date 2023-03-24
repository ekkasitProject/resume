import React, { useState } from 'react';
import { Link } from 'react-scroll';
import classes from './Navbar.module.css';
import { CgMenuRightAlt } from 'react-icons/cg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={classes.navbar}>
      <h3 className={classes.logo}>Ekkasit.dev</h3>

      <button
        className={`${classes.burger} ${isOpen ? classes.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgMenuRightAlt
          className={`${classes.menuIcon} ${isOpen ? classes.open : ''}`}
        />
      </button>

      <ul className={`${classes.sidebar} ${isOpen ? classes.active : ''}`}>
        <li>
          <Link
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            to="hero"
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
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
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
