import { useEffect, useState } from "react";
import { getChosenTheme, setChosenTheme, Theme } from "../utils/theme";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(getChosenTheme());

  useEffect(() => {
    setChosenTheme(theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, setTheme, toggleTheme };
};
