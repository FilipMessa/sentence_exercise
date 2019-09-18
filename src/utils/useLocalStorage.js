import React from 'react';

export default function useLocalStorage(
  key , initialValue  = ''
){
  const [value, setValue] = React.useState(
    () => localStorage.getItem(key) || initialValue
  );

  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setValue];
}