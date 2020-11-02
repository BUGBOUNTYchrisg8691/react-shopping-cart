import { useState } from "react";

function useLocalStorage(key) {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : undefined;
  })

  const setStorage = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }

  return [value, setStorage];
}

export default useLocalStorage;