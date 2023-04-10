import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const db = getDatabase();

      const quizRef = ref(db, 'quiz/' + videoID + '/questions');
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);
        // fetch videos
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    };

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
};

export default useQuestions;
