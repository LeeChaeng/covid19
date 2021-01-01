import { useState, useEffect } from "react";
import axios from "axios";

function useAxios<T extends any>(url: string) {
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
    axios.get<T>(url).then((data) => {
      setState((prev) => ({
        ...prev,
        loading: false,
        data: data.data,
      }));
    });
  }, [url]);

  return state;
}

export default useAxios;
