import React from 'react';
import image from '../assets/images/3.jpg';
import styles from '../styles/MiniPlayer.module.css';

function MiniPlayer() {
  return (
    <div className={`${styles.miniPlayer}  ${styles.floatingBtn}`}>
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span className={`material-icons-outlined ${styles.close}`}> close </span>
      <img src={image} alt="image_tag" />
      <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
    </div>
  );
}

export default MiniPlayer;
