import { createContext, useState } from "react";
export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(false);
  const themeSetterToggle = () => {
    setTheme(!theme);
  };
  return (
    <ThemeContext.Provider value={{ theme, themeSetterToggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
