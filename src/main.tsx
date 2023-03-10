import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "@fontsource/merriweather";
import "@fontsource/work-sans";
import "tailwindcss/tailwind.css";
import "./index.css";
import { getChosenTheme, setChosenTheme } from "./utils/theme";

setChosenTheme(getChosenTheme());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
