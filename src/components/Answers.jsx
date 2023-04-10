import React from 'react';
import styles from '../styles/Answers.module.css';
import Checkbox from './Checkbox';

function Answers({ options = [], changeHandler, input }) {
  return (
    <div className={styles.answers}>
      {options.map((option, index) => (
        <React.Fragment key={index}>
          {input ? (
            <Checkbox
              className={styles.answer}
              text={option.title}
              value={index}
              onChange={(e) => changeHandler(e, index)}
              checked={option.checked}
            />
          ) : (
            <Checkbox
              className={`${styles.answer} ${
                option.correct
                  ? styles.correct
                  : option.checked
                  ? styles.wrong
                  : null
              }`}
              text={option.title}
              defaultChecked={option.checked}
              disabled
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Answers;
