import { getPath } from "libs/const/path";
import { getPostList } from "libs/microcms";
import Link from "next/link";

export const PostList = async () => {
  const { contents } = await getPostList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((post) => {
          return (
            <li key={post.id}>
              <Link
                href={`${getPath("POST", post.id)}`}
                passHref
                className="group mx-auto block space-y-3 rounded-lg bg-white p-6 shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500"
              >
                {post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
