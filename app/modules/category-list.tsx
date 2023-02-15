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
      <ul className="[&>*]:border-b-1 space-y-1 [&>*]:border-gray-200/50 [&>li>*]:block [&>li>*]:space-y-3 [&>li>*]:bg-gray-200 [&>li>*]:p-6 [&>li>*]:text-black [&>li>*]:shadow dark:[&>li>*]:bg-gray-400">
        <li>
          <Link
            href={`${getPath("POST")}`}
            passHref
            className="hover:bg-sky-700 dark:text-white dark:hover:bg-sky-900"
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
                className="hover:bg-sky-700 dark:text-white dark:hover:bg-sky-900"
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
