import React from 'react';
import styles from '../styles/Analysis.module.css';
import Question from './Question';

function Analysis({ answers }) {
  return (
    <div className={styles.analysis}>
      <h1>Question Analysis</h1>
      <Question answers={answers} />
    </div>
  );
}

export default Analysis;
