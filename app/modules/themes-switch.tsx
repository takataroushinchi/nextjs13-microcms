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
      className="absolute left-2/4 order-2 h-12 w-12 -translate-x-2/4 transform p-3 md:relative md:left-0 md:order-3"
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
