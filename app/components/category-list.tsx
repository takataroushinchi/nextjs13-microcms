import { getPath } from "libs/const/path";
import { getCategoryList } from "libs/microcms";
import Link from "next/link";

export const CategoryList = async () => {
  const { contents } = await getCategoryList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <ul>
        {contents.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={`${getPath("POST", category.id)}`}
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
