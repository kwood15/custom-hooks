import { useState, useEffect, useDebugValue } from 'react';

export function useDebounce<K>(value: K, delay: number): K {
  const [debouncedValue, setDebouncedValue] = useState<K>(value);

  useDebugValue('useDebounce');

  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(debounce);
  }, [value, delay]);

  return debouncedValue;
}
