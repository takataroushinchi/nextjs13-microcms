import { Suspense } from "react";
import { getList } from "../../libs/microcms";
import { Blog } from "./blog";
import { BlogPromiseProps } from "./blog-props";
import { BlogUse } from "./blog-use";


// キャッシュを利用しない
export const revalidate = 0;


export default async function StaticPage() {
  const data = getList();


  // ページの生成された時間を取得
  const time = new Date().toLocaleString();


  if (!data) {
    return <h1>No contents</h1>;
  }


  return (
    <div>
      <h1>{time}</h1>
      <h2>非同期コンポーネント</h2>
      <Suspense fallback={<div>loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <Blog />
      </Suspense>
      <hr />
      <h2>PromiseをPropsで渡す場合</h2>
      <Suspense fallback={<div>loading...</div>}>
        {/* @ts-expect-error Server Component */}
        <BlogPromiseProps promise={data} />
      </Suspense>
      <hr />
      <h2>React.use()を利用</h2>
      <Suspense fallback={<div>loading...</div>}>
        <BlogUse />
      </Suspense>
    </div>
  );
}