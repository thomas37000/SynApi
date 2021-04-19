import { useState } from 'react';

function useLocalState(localColor) {
  const [localState, setLocalState] = useState(
    localStorage.getItem(localColor)
  );

  function setLocal(newColor) {
    localStorage.setItem(localColor, newColor);
    setLocalState(newColor);
  }
  return [localState, setLocal];
}

export default useLocalState;
