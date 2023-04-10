import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useAnswers = (videoID) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      const db = getDatabase();

      const answerRef = ref(db, 'answers/' + videoID + '/questions');
      const answerQuery = query(answerRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // fetch videos
        const snapshot = await get(answerQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
};

export default useAnswers;
