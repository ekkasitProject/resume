import React from 'react';
import classes from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <h3 className={classes.logo}>Ekkasit.dev</h3>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
