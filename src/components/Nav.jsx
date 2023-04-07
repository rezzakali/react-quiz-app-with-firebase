import React from 'react';
import logo from '../assets/images/logo-bg.png';
import styles from '../styles/Nav.module.css';
import Account from './Account';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;
