import React from 'react';
import styles from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers() {
  return (
    <div className={styles.answers}>
      <Checkbox className={styles.answer} text="Test Checkbox" />
    </div>
  );
}

export default Answers;
