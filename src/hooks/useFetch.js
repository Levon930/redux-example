import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useFetch = (url) => {
  const urlApi = "https://api.thecatapi.com/v1/";
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const length = "content-length";
  const doFetch = useCallback((options) => {
    setOptions(options);
    setIsLoading(true);
  }, []);
  useEffect(() => {
    const requestOptions = {
      ...options,
      isLoading: true,
    };
    if (!isLoading) {
      return;
    }
    console.log(url);
    axios(urlApi + url, requestOptions)
      .then((res) => {
        setResponse(res.data);
        setLimit(res.headers[length]);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        setIsLoading(false);
      });
  }, [isLoading, options, url]);

  return [{ response, error, isLoading, url, limit }, doFetch];
};
export default useFetch;
