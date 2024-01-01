import React, { useState } from 'react';

import styles from "./navBar.module.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navBar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "Image/Navbar/Close.png" : "Image/Navbar/Menu.png"}
          alt="menu-Btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />

        <ul className={`${styles.menuItems} ${menuOpen  && styles.menuOpens}`}
        onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
