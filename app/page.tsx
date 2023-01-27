import { Inter } from "@next/font/google";
import dayjs from "dayjs";
import { getBlogList } from "lib/microcms";

import MicroCMSImage from "@/app/modules/microcms-image";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { contents } = await getBlogList({ offset: 0, limit: 100 });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <main className={`${styles.main} bg-gray-200 pl-2`}>
      <h1 className={inter.className}>
        Design Docs <span>-&gt;</span>
      </h1>
      <p className={inter.className}>デザインテンファイル管理画面</p>
      <div className="flex gap-x-2 pb-8">
        <section className="mt-4 space-y-4 [&>*]:rounded-lg [&>*]:bg-white [&>*]:p-4 [&>*]:shadow">
          {contents.map((content) => {
            return (
              <div key={content.id}>
                <div className="flex flex-wrap items-center justify-between bg-gray-600 p-6">
                  <h2 className="mr-6 flex-1 font-semibold text-white">
                    {content.title}
                  </h2>
                  <time
                    className="flex-shrink-0 pl-2 text-sm text-white"
                    dateTime={content.publishedAt}
                  >
                    {dayjs(content.publishedAt).format("YYYY年MM月DD日")}
                  </time>
                </div>
                <p className="flex justify-end gap-x-2 p-2 text-sm text-gray-700">
                  <span className="font-semibold">ジャンル：</span>
                  {content.genre.map((i) => (
                    <span key={i}>{i}</span>
                  ))}
                </p>
                <div className="flex flex-wrap items-center justify-between bg-white p-6"></div>
                <div
                  className="prose rounded-lg border p-8"
                  dangerouslySetInnerHTML={{ __html: content.content }}
                />
                {content.eyecatch && (
                  <MicroCMSImage
                    src={content.eyecatch.url}
                    width={content.eyecatch.width}
                    height={content.eyecatch.height}
                    alt=""
                  />
                )}
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}
