import { PostListSearch } from "app/components/post-list-search";
import { getPostList } from "libs/microcms";

export default async function SearchPage() {
  const { totalCount, offset, limit, contents } = await getPostList({
    fields: "id,title,caption,target,done",
    offset: 0,
    limit: 100,
  });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <PostListSearch totalCount={totalCount} contents={contents} />
    </div>
  );
}
