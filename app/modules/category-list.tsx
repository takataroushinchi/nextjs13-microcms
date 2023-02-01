import { getPath } from "lib/const/path";
import { getCategoryList } from "lib/microcms";
import Link from "next/link";

export const CategoryList = async () => {
  const { contents } = await getCategoryList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  const linkClass =
    "mx-auto block space-y-3 bg-gray-900 p-6 text-black shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500 dark:text-white";

  return (
    <div>
      <ul className="[&>*]:border-b-1 space-y-1 [&>*]:border-gray-900/50">
        <li>
          <Link href={`${getPath("POST")}`} passHref className={linkClass}>
            ALL
          </Link>
        </li>
        {contents.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={`${getPath("CATEGORY", category.id)}`}
                passHref
                className={linkClass}
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
