import React, { useContext, useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from 'assets/theme';
import { GlobalStyle } from 'assets/GlobalStyle';

const getLocalStorage = () => {
  let localStorageTheme = localStorage.getItem('isDarkTheme');
  if (localStorageTheme) {
    return JSON.parse(localStorage.getItem('isDarkTheme'));
  } else {
    return false;
  }
};

const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(getLocalStorage());

  const toggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    localStorage.setItem('isDarkTheme', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
