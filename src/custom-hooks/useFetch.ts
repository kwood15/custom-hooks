import { useState, useEffect, useDebugValue } from 'react';

export function useFetch<K>(initialUrl: string = '', initialData?: K, options?: RequestInit) {
  const [url, setUrl] = useState<string>(initialUrl);
  const [data, setData] = useState<K | null>(initialData || null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useDebugValue('useFetch');

  useEffect(() => {
    const fetchData = async () => {
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
    };
    fetchData();
  }, [url, options]);

  return { data, isLoading, isError, setUrl };
}
