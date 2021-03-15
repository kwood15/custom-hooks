import { useState } from 'react';

export function useLocalStorage<K>(key: string , defaultValue: K) {
  const stored = localStorage.getItem(key);
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState<K>(initial);
  return [value, setValue];
}