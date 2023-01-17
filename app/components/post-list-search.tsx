import { getPath } from "libs/const/path";
import { Post } from "libs/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";

export const PostListSearch = async () => {
  // const [search, setSearch] = useState<MicroCMSListResponse<Post>>();

  const data = await fetch("http://localhost:3000/api/search", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ q: "" }),
  });
  const json: MicroCMSListResponse<Post> = await data.json();
  // setSearch(json);
  // const contents = search ? search.contents : "";
  const contents = json.contents;

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
