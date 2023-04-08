import React from 'react';
import styles from '../styles/Question.module.css';
import Answers from './Answers';

function Question() {
  return (
    <div className={styles.question}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers />
    </div>
  );
}

export default Question;
