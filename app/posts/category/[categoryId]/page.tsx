import { PostList } from "app/modules/post-list";
import { getCategoryList } from "lib/microcms";
import { getPostList } from "lib/microcms";
import { Post } from "lib/microcms";

// ISR
export const revalidate = 10;

export async function generateStaticParams() {
  const { contents } = await getCategoryList();

  const paths = contents.map((category) => {
    return {
      categoryId: category.id,
    };
  });

  return [...paths];
}

export default async function CategoryPage({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  const { totalCount, offset, limit, contents } = await getPostList({
    fields: "id,title,caption,target,done,category",
    offset: 0,
    limit: 100,
    // filters: `category[contains]${categoryId}`,
  });

  const filtersContents: Post[] = [];
  contents.forEach((item) => {
    if (item.category.id === categoryId) {
      filtersContents.push(item);
    }
  });

  if (!filtersContents || filtersContents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PostList contents={filtersContents} />
    </div>
  );
}
