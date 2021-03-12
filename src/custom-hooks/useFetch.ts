import { useState, useCallback, useDebugValue } from 'react';

export function useFetch<K>(url: RequestInfo, initialData?: K) {
  const [data, setData] = useState<K | null>(initialData || null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useDebugValue('useFetch');

  const fetchData = useCallback(async (options?: RequestInit) => {
    setIsLoading(true);
    
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setIsLoading(false);
      setData(data);
    } catch(error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  }, [url]);

  return { fetchData, data, isLoading, isError };
}
