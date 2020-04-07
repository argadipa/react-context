import React, { createContext } from "react";
import useToggle from "../hooks/useToggleState";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, ToggleDarkMode] = useToggle();
    const toggleTheme = () => ToggleDarkMode();

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
