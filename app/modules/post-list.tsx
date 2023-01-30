import { getPath } from "lib/const/path";
import type { Posts } from "lib/microcms";
import Link from "next/link";

type Props = Pick<Posts, "contents">;

export const PostList = async (props: Props) => {
  const { contents } = props;

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul className="space-y-4 [&>*]:rounded-lg">
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link
                href={`${getPath("POST", post.id)}`}
                passHref
                className="group mx-auto block bg-white p-6 text-black shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500 dark:text-slate-50"
              >
                {post.category.name} {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
