import { useState, useEffect, useDebugValue } from 'react';

export function useLocalStorage<K>(key: string, defaultValues: K) {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValues;
  const [values, setValues] = useState<K>(initial);

  useDebugValue('useLocalStorage');

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values));
  }, [key, values]);

  return [values, setValues];
}