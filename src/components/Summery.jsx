import React from 'react';
import image from '../assets/images/success.png';
import styles from '../styles/Summery.module.css';

function Summery({ score, noq }) {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>

      <div className={styles.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  );
}

export default Summery;
