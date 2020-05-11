import { useEffect, useState } from "react";

export function usePersistedState(key: string, defaultValue = {}) {
  const [state, setState] = useState<any>(
    localStorage.getItem(key) || defaultValue
  );
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return { state, setState };
}
