import React, { useContext } from "react";
import { DarkModeContext } from "../../hooks/DarkModeContext";

export default () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button className='button button--info' onClick={toggleDarkMode}>
      {darkMode ? "Light mode" : "Dark mode"}
    </button>
  );
};
