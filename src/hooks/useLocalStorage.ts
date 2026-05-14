import { useState } from 'react';

export function useLocalStorage(key: string, defaultValue: string): [string, (v: string) => void] {
  const [value, setValue] = useState<string>(() => localStorage.getItem(key) ?? defaultValue);
  const set = (v: string) => {
    localStorage.setItem(key, v);
    setValue(v);
  };
  return [value, set];
}
