import dayjs from "dayjs";
import { getPath } from "lib/const/path";
import type { BlogResponse } from "lib/microcms";
import { Tag } from "lucide-react";
import Link from "next/link";

import MicroCMSImage from "@/app/modules/microcms-image";

type Props = Pick<BlogResponse, "contents"> & {
  genreId?: string;
};

export const GenreList = async (props: Props) => {
  const { contents, genreId } = props;

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }

  return (
    <div className="flex gap-x-2 pb-8">
      <section className="mt-4 space-y-4 [&>*]:rounded-lg [&>*]:bg-white [&>*]:p-4 [&>*]:shadow">
        {contents.map((content) => {
          return (
            <div key={content.id}>
              <div className="flex flex-wrap items-center justify-between bg-gray-900 p-6">
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
              <p className="flex justify-end gap-x-2 p-2 text-sm text-gray-900 dark:text-gray-700">
                <Tag size="20" />
                <span className="font-semibold">ジャンル：</span>
                {content.genre.map((i) =>
                  genreId === i ? (
                    <span key={i} className="font-semibold">
                      {i}
                    </span>
                  ) : (
                    <Link
                      key={i}
                      href={`${getPath("GENRE", i)}`}
                      className="text-blue-500 underline underline-offset-1"
                    >
                      {i}
                    </Link>
                  )
                )}
              </p>
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
  );
};
