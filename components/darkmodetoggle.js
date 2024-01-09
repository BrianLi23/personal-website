"use client";

import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState("light");

  const toggleDarkMode = () => {
    if (darkMode === "light") {
      setDarkMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return { darkMode, toggleDarkMode };
}

export function useMode() {
  const mode = useModeType(ModeType);

  return mode;
}
