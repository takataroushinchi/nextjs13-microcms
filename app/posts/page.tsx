import { PostList } from "app/components/post-list";
import { getPostList } from "libs/microcms";

export default async function PostsPage() {
  const { totalCount, offset, limit, contents } = await getPostList({
    fields: "id,title,caption,target,done,category",
    offset: 0,
    limit: 100,
  });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <PostList contents={contents} />
    </div>
  );
}
