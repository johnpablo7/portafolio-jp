export type Theme = "light" | "dark";

export const getChosenTheme = () => {
  const selectedMode = localStorage.getItem("colorMode") as Theme;
  const preferredMode = matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  return selectedMode || preferredMode;
};

export const setChosenTheme = (theme: Theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  localStorage.setItem("colorMode", theme);
};
