// src/hooks/useCustomHook.ts

import { useState, useEffect } from 'react';

const useCustomHook = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    // Efekt lub logika, która będzie używana w tym hooku
  }, [value]);

  return [value, setValue];
}

export default useCustomHook;
