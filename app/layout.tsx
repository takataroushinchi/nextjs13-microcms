import "../styles/globals.css";

import { GlobalNavigation } from "@/app/modules/global-navigation";
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
        <GlobalNavigation />
        {children}
        <ScrollTrigger />
      </body>
    </html>
  );
}
