import React from 'react';
import styles from '../styles/Info.module.css';

function Info({ text, children }) {
  return (
    <div className={styles.info}>
      {text} {children}
    </div>
  );
}

export default Info;
