"use client";

import { IconSearch } from "@tabler/icons";
import axios from "axios";
import { getPath } from "libs/const/path";
import type { Post, Posts } from "libs/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { ComponentProps, FC, useState } from "react";

type Props = Pick<Posts, "totalCount" | "contents">;

export const PostListSearch: FC<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Post>>();
  const [excludeDone, setExcludeDone] = useState(false);
  const [targetValue, setTargetValue] = useState("-");

  const targetList: string[] = [];
  props.contents.forEach((item) => {
    if (item.target.length !== 0) {
      targetList.push(item.target[0]);
    }
  });
  targetList.sort().reverse().unshift("-");
  const targets = Array.from(new Set(targetList));

  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    // console.log(event.currentTarget.target.value);
    let filters = excludeDone ? "done[equals]false" : "";
    if (targetValue !== "-") {
      filters =
        filters === ""
          ? `target[contains]${targetValue}`
          : `${filters}[and]target[contains]${targetValue}`;
    }

    // [and]target[contains]202206
    const headers = {
      "Content-Type": "application/json",
    };

    const body = JSON.stringify({ q, filters });

    const data: MicroCMSListResponse<Post> = await axios
      .post("/api/search", body, { headers: headers })
      .then((res) => res.data);

    setSearch(data);
  };

  const handleSelectChange: ComponentProps<"select">["onChange"] = (event) => {
    setTargetValue(event.target.value);
  };

  const handleReset: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
    setExcludeDone(false);
    setTargetValue("-");
  };

  const handleSwitch = () => {
    setExcludeDone((prevState) => !prevState); // トグルスイッチ
  };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <div className="pl-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-start gap-x-2">
          <div>
            <IconSearch size="20" />
          </div>
          <input
            type="search"
            name="query"
            className="border p-2"
            placeholder="キーワードを入力"
          />
          <select
            className="border"
            value={targetValue}
            onChange={handleSelectChange}
          >
            {targets.map((target) => (
              <option key={target} value={target}>
                {target}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="rounded border border-sky-600 bg-sky-600 py-2 px-4 font-bold text-white hover:enabled:bg-blue-500 disabled:opacity-75"
          >
            検索
          </button>
          <button
            type="reset"
            className="inline-flex items-center rounded bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400 disabled:opacity-75"
            onClick={handleReset}
          >
            リセット
          </button>
          <button
            className="rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white disabled:opacity-75"
            onClick={() => handleSwitch()}
          >
            完了除外 {excludeDone ? "ON" : "OFF"}
          </button>
        </div>
      </form>
      <p className="text-xm p-2">{`${
        search ? "検索結果" : "記事の総数"
      }:${totalCount}`}</p>
      <ul className="mt-4 space-y-4 [&>*]:rounded-lg [&>*]:bg-white [&>*]:p-4 [&>*]:shadow">
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link
                href={`${getPath("POST", content.id)}`}
                passHref
                className="group mx-auto block space-y-3 rounded-lg bg-white p-6 shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500"
              >
                <p className="text-sm font-semibold text-slate-900 group-hover:text-white">
                  {content.title}
                </p>
                <p className="text-sm text-slate-500 group-hover:text-white">
                  {content.caption}
                </p>
                {content.target && (
                  <p className="text-sm font-semibold text-slate-500 group-hover:text-white">
                    ターゲット：{content.target[0]}
                  </p>
                )}
                {content.done && (
                  <p className="text-sm font-semibold text-slate-500 group-hover:text-white">
                    完了
                  </p>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
