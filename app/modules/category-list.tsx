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
      <ul className="[&>*]:border-b-1 space-y-1 [&>*]:border-gray-900/50 [&>li>*]:block [&>li>*]:space-y-3 [&>li>*]:bg-gray-900 [&>li>*]:p-6 [&>li>*]:text-black [&>li>*]:shadow [&>li>*]:ring-1 [&>li>*]:ring-slate-900/5">
        <li>
          <Link
            href={`${getPath("POST")}`}
            passHref
            className="hover:bg-sky-700 hover:ring-sky-500 dark:text-white"
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
                className="hover:bg-sky-700 hover:ring-sky-500 dark:text-white"
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
