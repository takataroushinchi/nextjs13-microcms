"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemesSwitch() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="h-12 w-12 p-3 md:p-1"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {mounted && (
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
