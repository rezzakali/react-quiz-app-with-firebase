import React, { useMemo } from 'react';
import successImage from '../assets/images/success.png';
import useFetch from '../hooks/useFetch';
import styles from '../styles/Summery.module.css';

function Summery({ score, noq }) {
  const getKeyword = useMemo(() => {
    if ((score / (noq * 5)) * 100 < 50) {
      return 'failed';
    } else if ((score / (noq * 5)) * 100 < 75) {
      return 'good';
    } else if ((score / (noq * 5)) * 100 < 100) {
      return 'very good';
    } else {
      return 'excellent';
    }
  }, [score, noq]);

  const { error, loading, result } = useFetch(
    `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
    {
      Authorization: import.meta.env.VITE_PEXELS_API_KEY,
    }
  );

  const image = result ? result?.photos[0].src.medium : successImage;

  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      {loading && <div className={styles.badge}>Loading...</div>}
      {error && <div className={styles.badge}>There was an error!</div>}

      {!loading && !error && (
        <div className={styles.badge}>
          <img src={image} alt="Success" />
        </div>
      )}
    </div>
  );
}

export default Summery;
