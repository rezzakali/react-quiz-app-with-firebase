import React from 'react';
import styles from '../styles/Question.module.css';
import Answers from './Answers';

function Question({ answers = [] }) {
  return answers.map((answer, index) => (
    <div className={styles.question} key={index}>
      <div className={styles.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}

export default Question;
