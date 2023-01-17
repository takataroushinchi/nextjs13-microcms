import { getPostDetail, getPostList } from "libs/microcms";
import { notFound } from "next/navigation";
// import { getDetail, getList } from "../../../libs/microcms";

export async function generateStaticParams() {
  const { contents } = await getPostList();

  const paths = contents.map((post) => {
    return {
      postId: post.id,
    };
  });

  return [...paths];
}

export default async function PostDetailPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getPostDetail(postId);

  // ページの生成された時間を取得
  const time = new Date().toLocaleString();

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{time}</h2>
      <div
        className="prose rounded-lg border p-8"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
    </div>
  );
}
