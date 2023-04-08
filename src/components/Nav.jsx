import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-bg.png';
import styles from '../styles/Nav.module.css';
import Account from './Account';

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/" className={styles.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}

export default Nav;
