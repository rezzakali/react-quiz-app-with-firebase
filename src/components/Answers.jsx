import React from 'react';
import styles from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers({ options = [], changeHandler }) {
  return (
    <div className={styles.answers}>
      {options.map((option, index) => (
        <Checkbox
          className={styles.answer}
          text={option.title}
          value={index}
          onChange={(e) => changeHandler(e, index)}
          checked={option.checked}
          key={index}
        />
      ))}
    </div>
  );
}

export default Answers;
