import { getPath } from "lib/const/path";
import { getCategoryList } from "lib/microcms";
import Link from "next/link";

export const CategoryList = async () => {
  const { contents } = await getCategoryList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        <li>
          <Link
            href={`${getPath("POST")}`}
            passHref
            className="group mx-auto block space-y-3 rounded-lg bg-white p-6 shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500"
          >
            ALL
          </Link>
        </li>
        {contents.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={`${getPath("CATEGORY", category.id)}`}
                passHref
                className="group mx-auto block space-y-3 rounded-lg bg-white p-6 shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500"
              >
                {category.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
