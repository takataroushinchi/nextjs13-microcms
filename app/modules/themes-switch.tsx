"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemesSwitchSt() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.dataset["theme"] = "dark";
    } else if (theme === "light") {
      document.documentElement.dataset["theme"] = "light";
    } else {
      const mode =
        window.matchMedia("(prefers-color-scheme: dark)").matches == true
          ? "dark"
          : "light";
      setTheme(mode);
    }
  }, [theme]);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="h-12 w-12 p-3 md:p-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme && (
        <>
          {theme === "dark" ? (
            <Sun height={"25"} width={"25"} />
          ) : (
            <Moon height={"25"} width={"25"} />
          )}
        </>
      )}
    </button>
  );
}
