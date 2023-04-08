import React from 'react';
import styles from '../styles/Illustration.module.css';

function Illustration({ illustration, ...rest }) {
  return (
    <div className={styles.illustration}>
      <img src={illustration} {...rest} />
    </div>
  );
}

export default Illustration;
