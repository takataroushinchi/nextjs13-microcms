"use client";

import { useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

export default function ThemesSwitchSt() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    if (dark) {
      document.documentElement.dataset["theme"] = "dark";
    } else {
      document.documentElement.dataset["theme"] = "light";
    }
  }, [colorScheme]);

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="grid h-12 w-12 place-items-center rounded-full bg-slate-50 p-4 ring-2 ring-slate-900/5 hover:bg-slate-600 hover:ring-4 dark:bg-slate-600/30 dark:hover:bg-sky-600 md:p-1"
      onClick={() => toggleColorScheme()}
    >
      <>
        {dark ? (
          <Sun height={"25"} width={"25"} />
        ) : (
          <Moon height={"25"} width={"25"} />
        )}
      </>
    </button>
  );
}
