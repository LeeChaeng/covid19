import { useState, useEffect } from "react";
import axios from "axios";

function useAxios<T = any>(url: string) {
  const [state, setState] = useState<{
    loading: boolean;
    error: Error | null;
    data: T | null;
  }>({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    axios
      .get<T>(url)
      .then((data) => {
        setState((prev) => ({
          ...prev,
          loading: false,
          data: data.data,
        }));
      })
      .catch((error) => {
        setState((prev) => ({
          ...prev,
          loading: false,
          date: null,
          error: error,
        }));
      });
  }, [url]);

  return state;
}

export default useAxios;
