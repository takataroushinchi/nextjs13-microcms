"use client";

import { CacheProvider } from "@emotion/react";
import {
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";

const cache = createEmotionCache({ key: "my" });
cache.compat = true;

export default function MantineEmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available
  // const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const preferredColorMode =
  //       window.matchMedia("(prefers-color-scheme: dark)").matches == true
  //         ? "dark"
  //         : "light";
  //     setColorScheme(preferredColorMode);
  //   }
  // }, []);

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            fontFamily: "Open Sans",
            colorScheme,
            activeStyles: {
              transform: "translateY(0px)",
              backgroundImage:
                "linear-gradient(45deg, #3b5bdb 0%, #0c8599 100%)",
              backgroundColor: "transparent",
              color: "#fff",
            },
          }}
          emotionCache={cache}
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
}
