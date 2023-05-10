import { useState, useEffect } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await makeRequest.get(url);
        setData(res.data.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
