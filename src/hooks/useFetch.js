import { useEffect, useState } from 'react';

const useFetch = (url, headers, method) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(url, {
          method: method || 'GET',
          headers,
        });
        const resData = await response.json();
        setLoading(false);
        setResult(resData);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchRequest();
  }, []);

  return {
    error,
    loading,
    result,
  };
};

export default useFetch;
