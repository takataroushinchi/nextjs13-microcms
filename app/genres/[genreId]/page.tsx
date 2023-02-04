import { getBlogList } from "lib/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GenreList } from "@/app/modules/genre-list";
import { getPath } from "@/lib/const/path";

export async function generateStaticParams() {
  const { contents } = await getBlogList();
  const genres = [...new Set(contents.map((content) => content.genre).flat())];

  const paths = genres.map((genre) => {
    return {
      genreId: genre,
    };
  });

  return [...paths];
}

export default async function filteredGenrePage({
  params: { genreId },
}: {
  params: { genreId: string };
}) {
  const filters = `genre[contains]${genreId}`;
  const { contents } = await getBlogList({ offset: 0, limit: 100, filters });

  if (!contents || contents.length === 0) {
    notFound();
  }

  const items = [
    { title: "トップ", href: `${getPath("INDEX")}` },
    { title: "ジャンル", href: `${getPath("GENRES")}` },
    { title: `${genreId}`, href: "" },
  ].map((item, index) =>
    item.href !== "" ? (
      <li key={index}>
        <Link
          className="whitespace-nowrap pl-2 text-sky-600 underline"
          href={item.href}
          passHref
        >
          {item.title}
        </Link>
      </li>
    ) : (
      <li key={index}>{item.title}</li>
    )
  );

  return (
    <main className="bg-gray-200 pl-2">
      <h1 className="mt-10 scroll-m-20 py-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        「{genreId}」を含むデザイン管理ドキュメント
      </h1>
      <nav className="text-s breadcrumbs pb-2">
        <ul>{items}</ul>
      </nav>
      {/* @ts-expect-error Server Component */}
      <GenreList contents={contents} genreId={genreId} />
    </main>
  );
}
