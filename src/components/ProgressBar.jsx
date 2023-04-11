import React, { useRef, useState } from 'react';
import styles from '../styles/ProgressBar.module.css';
import Button from './Button';

function ProgressBar({ next, prev, submit, progress }) {
  const [tooltip, setTooltip] = useState(false);

  const tooltipRef = useRef();

  const toggleTooltip = () => {
    if (tooltip) {
      setTooltip(false);
      tooltipRef.current.style.display = 'none';
    } else {
      setTooltip(true);
      tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
      tooltipRef.current.style.display = 'block';
    }
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip} ref={tooltipRef}>
          {progress}% Cimplete!
        </div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
            onMouseOver={toggleTooltip}
            onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className={styles.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? 'Submit Quiz' : 'Next Question'}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}

export default ProgressBar;
