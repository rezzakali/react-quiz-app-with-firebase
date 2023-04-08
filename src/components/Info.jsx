import React from 'react';
import styles from '../styles/Info.module.css';

function Info({ text }) {
  return (
    <div className={styles.info}>
      {text} <a href="login.html">Login</a> instead.
    </div>
  );
}

export default Info;
