import React from 'react';
import styles from '../styles/Button.module.css';

function Button({ className, children }) {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
}

export default Button;
