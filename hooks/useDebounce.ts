import { useEffect, useState } from "react";

export default function useDebounced(value: string) {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
}
