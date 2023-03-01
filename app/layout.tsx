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
