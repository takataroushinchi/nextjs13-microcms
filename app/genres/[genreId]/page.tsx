import { getBlogList } from "lib/microcms";
import { notFound } from "next/navigation";

import { GenreList } from "@/app/modules/genre-list";

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

  return (
    <main className="bg-gray-200 pl-2">
      <h1 className="mt-10 scroll-m-20 py-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
        「{genreId}」を含むデザイン管理ドキュメント
      </h1>
      {/* @ts-expect-error Server Component */}
      <GenreList contents={contents} genreId={genreId} />
    </main>
  );
}
