import React from 'react';
import styles from '../styles/Button.module.css';

function Button({ children }) {
  return (
    <div className={styles.button}>
      <span>{children}</span>
    </div>
  );
}

export default Button;
