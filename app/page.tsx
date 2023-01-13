import { Inter } from "@next/font/google";
import MicroCMSImage from "components/ui/MicroCMSImage";
import dayjs from "dayjs";
import { getList } from "libs/microcms";

import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <main className={styles.main}>
      <h1 className="flex flex-wrap items-center justify-between border-8 bg-gray-600 p-8">
        xxxxx
      </h1>
      <h2 className={inter.className}>
        Deploy <span>-&gt;</span>
      </h2>
      <p className={inter.className}>
        Instantly deploy your Next.js site to a shareable URL with Vercel.
      </p>
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
                    className="flex-shrink-0 text-sm text-white"
                    dateTime={content.publishedAt}
                  >
                    {dayjs(content.publishedAt).format("YYYY年MM月DD日")}
                  </time>
                </div>
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
