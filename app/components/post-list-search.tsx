"use client";

import { IconSearch } from "@tabler/icons";
import type { Post } from "libs/microcms";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { ComponentProps, useState } from "react";

type Props = MicroCMSListResponse<Post>;

export const PostListSearch = (props: Props) => {
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
  };

  const handleReset: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
    setExcludeDone(false);
    setTargetValue("-");
  };

  const handleSwitch = (checked: boolean) => {
    setExcludeDone(checked);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-2">
          <input
            icon={<IconSearch size="20" />}
            type="search"
            name="query"
            className="pr-2"
            placeholder="キーワードを入力"
          />
          <button
            type="submit"
            className="border border-sky-600 bg-sky-600 px-2 hover:enabled:bg-sky-400 disabled:opacity-75"
          >
            検索
          </button>
          <button
            type="reset"
            className="border border-gray-600 bg-gray-600 px-2 hover:enabled:bg-gray-400 disabled:opacity-75"
            onClick={handleReset}
          >
            リセット
          </button>
        </div>
      </form>
    </div>
  );
};
