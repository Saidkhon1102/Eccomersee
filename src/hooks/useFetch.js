import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await axios(url);
        if (req.status != 200) throw new Error(req.statusText);
        setData(req.data);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    getData();
  }, [url]);

  return { data, error, isPending };
};
