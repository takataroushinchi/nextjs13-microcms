import { getPath } from "lib/const/path";
import { getBlogList } from "lib/microcms";
import { Tag } from "lucide-react";
import Link from "next/link";

export default async function GenresPage() {
  const { contents } = await getBlogList({ offset: 0, limit: 100 });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  const genres = [...new Set(contents.map((content) => content.genre).flat())];
  // contents.map((content) => content.genre)
  // [
  //   [ 'ALL' ],
  //   [ 'ALL', 'UI', 'Design' ],
  //   [ 'UI', 'A11y' ],
  //   [ 'ALL', 'Design', 'UX' ],
  //   [ 'UI', 'A11y', 'UX' ]
  // ]
  // contents.map((content) => content.genre).flat()
  // [
  //   'ALL',  'ALL',
  //   'UI',   'Design',
  //   'UI',   'A11y',
  //   'ALL',  'Design',
  //   'UX',   'UI',
  //   'A11y', 'UX'
  // ]
  // [...new Set(contents.map((content) => content.genre).flat())]
  // [ 'ALL', 'UI', 'Design', 'A11y', 'UX' ]

  return (
    <div>
      <ul className="space-y-2">
        {genres.map((genre) => {
          return (
            <li key={genre} className="p-2">
              <Link
                href={`${getPath("GENRE", genre)}`}
                className="flex items-center gap-2"
              >
                <Tag size="20" />
                {genre}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
