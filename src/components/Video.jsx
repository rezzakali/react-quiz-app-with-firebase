import React from 'react';
import styles from '../styles/Video.module.css';

function Video({ title, noq, id }) {
  return (
    <div className={styles.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={styles.qmeta}>
        <p>{noq} Questions</p>
        <p>Total Score : {noq * 5}</p>
      </div>
    </div>
  );
}

export default Video;
