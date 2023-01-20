import { MarkdownField } from "app/components/MarkdownField";
import MicroCMSImage from "app/components/MicroCMSImage";
import dayjs from "dayjs";
import { getPath } from "libs/const/path";
import { getPostDetail, getPostList } from "libs/microcms";
import Link from "next/link";
import { notFound } from "next/navigation";

// ISR
export const revalidate = 10;

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

  if (!post) {
    notFound();
  }

  const items = [
    { title: "トップ", href: `${getPath("INDEX")}` },
    { title: "案件リスト", href: `${getPath("POSTS")}` },
    { title: "カテゴリ", href: `${getPath("CATEGORY", post.category.id)}` },
    { title: `${post.title}`, href: "" },
  ].map((item, index) =>
    item.href !== "" ? (
      <Link
        className="whitespace-nowrap text-sky-700"
        href={item.href}
        key={index}
        passHref
      >
        {item.title}
      </Link>
    ) : (
      <span className="text-sm font-semibold" key={index}>
        {item.title}
      </span>
    )
  );

  return (
    <div>
      <nav className="flex gap-x-2 pb-2">{items}</nav>
      <div className="flex flex-wrap items-center justify-between bg-gray-600 p-6">
        <h1 className="mr-6 flex-1 font-semibold text-white">{post.title}</h1>
        <time
          className="flex-shrink-0 text-sm text-white"
          dateTime={post.publishedAt}
        >
          {dayjs(post.publishedAt).format("YYYY年MM月DD日")}
        </time>
      </div>
      <div className="flex flex-wrap items-center justify-between bg-white p-6">
        {post.target && (
          <p className="text-sm font-semibold text-slate-500">
            ターゲット：{post.target[0]}, カテゴリ：{post.category.name}
          </p>
        )}
        {post.done && (
          <p className="text-sm font-semibold text-slate-500">完了</p>
        )}
      </div>
      <div
        className="prose rounded-lg border p-8"
        dangerouslySetInnerHTML={{ __html: post.body }}
      />
      <div>
        {post.topic?.map((topic, id) => (
          <div key={id}>
            {topic.fieldId === "tech" && (
              <div className="my-2 flex flex-wrap items-center justify-between bg-gray-500 p-4">
                <h3 className="mr-6 flex-1 text-white">技術</h3>
                <p className="flex-shrink-0 text-sm text-white">
                  {topic.title}
                </p>
              </div>
            )}
            {topic.fieldId === "note" && (
              <div className="my-2 flex flex-wrap items-center justify-between bg-gray-500 p-4">
                <h3 className="mr-6 flex-1 text-white">備考</h3>
                <p className="flex-shrink-0 text-sm text-white">
                  {topic.title}
                </p>
              </div>
            )}
            <div className="rounded-lg border p-8">
              {topic.body.map((body, index) => {
                return body.fieldId === "richeditor" ? (
                  <div
                    key={index}
                    className="prose lg:prose-sm"
                    dangerouslySetInnerHTML={{ __html: body.richText }}
                  />
                ) : body.fieldId === "markdown" ? (
                  <div key={index} className="prose lg:prose-sm">
                    <MarkdownField text={body.markdownText} />
                  </div>
                ) : body.fieldId === "richlink" ? (
                  <div key={index}>
                    {body.title && <a href={body.url}>{body.title}</a>}
                    {body.image && (
                      <MicroCMSImage
                        src={body.image.url}
                        width={body.image.width}
                        height={body.image.height}
                        alt=""
                      />
                    )}
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
