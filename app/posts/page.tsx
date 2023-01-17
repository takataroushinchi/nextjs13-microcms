import { PostList } from "app/components/post-list";
import { PostListSearch } from "app/components/post-list-search";
import { getPostList } from "libs/microcms";

export default async function PostsPage() {
  const { contents } = await getPostList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div>
      <PostListSearch contents={contents} />
      {/* @ts-ignore*/}
      <PostList />
    </div>
  );
}
