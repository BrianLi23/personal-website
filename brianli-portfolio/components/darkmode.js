"use client";

import { useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("darkmode clicked");
  };

  return { darkMode, toggleDarkMode };
}
