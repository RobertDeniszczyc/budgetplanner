import React, { useState } from 'react';
import { DarkModeContext } from '../../hooks/DarkModeContext';

export default props => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(darkMode => !darkMode);
  }

  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {props.children}
    </DarkModeContext.Provider>
  )
}
