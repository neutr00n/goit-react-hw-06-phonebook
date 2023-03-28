import { useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '../helpers/LocalStorage';

export function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => getLocalStorage(key, defaultValue));

  useEffect(() => {
    setLocalStorage(key, state);
  }, [key, state]);

  return [state, setState];
}
