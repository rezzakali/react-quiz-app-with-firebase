import React from 'react';
import signupImage from '../assets/images/signup.svg';
import styles from '../styles/Illustration.module.css';

function Illustration() {
  return (
    <div className={styles.illustration}>
      <img src={signupImage} alt="Signup" />
    </div>
  );
}

export default Illustration;
