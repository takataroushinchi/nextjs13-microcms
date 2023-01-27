import { PostListSearch } from "app/modules/post-list-search";
import type { Categories, Category } from "lib/microcms";
import { getCategoryList, getPostList } from "lib/microcms";

export default async function SearchPage() {
  const { totalCount, offset, limit, contents } = await getPostList({
    fields: "id,title,caption,target,done,category",
    offset: 0,
    limit: 100,
  });

  const categoryListData: Categories = await getCategoryList();
  const categoryList: Pick<Category, "id" | "name">[] =
    categoryListData.contents.map(({ id, name }) => ({
      id,
      name,
    }));
  categoryList.unshift({ id: "-", name: "-" });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <PostListSearch
        totalCount={totalCount}
        contents={contents}
        categoryList={categoryList}
      />
    </div>
  );
}
