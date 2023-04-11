import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from '../styles/MiniPlayer.module.css';

function MiniPlayer({ id, title }) {
  const buttonRef = useRef();
  const [status, setStatus] = useState(false);

  const videoURL = `https://www.youtube.com/watch?v=${id}`;

  const toggleMiniPlayer = () => {
    if (!status) {
      buttonRef.current.classList.remove(styles.floatingBtn);
      setStatus(true);
    } else {
      buttonRef.current.classList.add(styles.floatingBtn);
      setStatus(false);
    }
  };

  return (
    <div
      className={`${styles.miniPlayer}  ${styles.floatingBtn}`}
      ref={buttonRef}
      onClick={toggleMiniPlayer}
    >
      <span className={`material-icons-outlined ${styles.open}`}>
        play_circle_filled
      </span>
      <span
        className={`material-icons-outlined ${styles.close}`}
        onClick={toggleMiniPlayer}
      >
        close
      </span>
      <ReactPlayer url={videoURL} playing={status} width={300} height={168} />
      <p>{title}</p>
    </div>
  );
}

export default MiniPlayer;
