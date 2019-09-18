import React from "react";

export default function useInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const onChange = React.useCallback(e => setValue(e.target.value), []);

  return {
    onChange,
    value,
    clear: () => setValue("")
  };
}
