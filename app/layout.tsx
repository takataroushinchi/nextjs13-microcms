"use client";

import "../styles/globals.css";
import "@tremor/react/dist/esm/tremor.css";

import { GlobalNavigation } from "@/app/modules/global-navigation";
import MantineEmotionProvider from "@/app/modules/mantine/mantine-emotion-provider";
import { ScrollTrigger } from "@/app/modules/scroll-trigger";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <MantineEmotionProvider>
          <GlobalNavigation />
          {children}
          <ScrollTrigger />
        </MantineEmotionProvider>
      </body>
    </html>
  );
}
