import { Inter } from "@next/font/google";
import { getBlogList } from "lib/microcms";

import { GenreList } from "@/app/modules/genre-list";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { contents } = await getBlogList({ offset: 0, limit: 100 });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <main className={`${styles.main} bg-gray-200 pl-2`}>
      <h1
        className={`${inter.className} mt-10 scroll-m-20 py-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0`}
      >
        デザイン管理ドキュメント
      </h1>
      {/* @ts-expect-error Server Component */}
      <GenreList contents={contents} genreId="" />
    </main>
  );
}
