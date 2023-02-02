"use client";

import axios from "axios";
import { getPath } from "lib/const/path";
import type { Post, Posts } from "lib/microcms";
import { Search } from "lucide-react";
import { MicroCMSListResponse } from "microcms-js-sdk";
import Link from "next/link";
import { ComponentProps, FC, useState } from "react";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

type Props = Pick<Posts, "totalCount" | "contents"> & {
  categoryList: {
    id: string;
    name: string;
  }[];
};

export const PostListSearch: FC<Props> = (props) => {
  const [search, setSearch] = useState<MicroCMSListResponse<Post>>();
  const [excludeDone, setExcludeDone] = useState(false);
  const [targetValue, setTargetValue] = useState("-");
  const [categoryValue, setCategoryValue] = useState("-");

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
    // category.id[equals]b1sn5ew_k7v
    if (categoryValue !== "-") {
      filters =
        filters === ""
          ? `category[equals]${categoryValue}`
          : `${filters}[and]category.id[equals]${categoryValue}`;
    }

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

  // const handleCategorySelectChange: ComponentProps<"select">["onChange"] = (
  //   event
  // ) => {
  //   setCategoryValue(event.target.value);
  // };

  // const handleTargetSelectChange: ComponentProps<"select">["onChange"] = (
  //   event
  // ) => {
  //   setTargetValue(event.target.value);
  // };

  const handleReset: ComponentProps<"button">["onClick"] = () => {
    setSearch(undefined);
    setExcludeDone(false);
    setCategoryValue("-");
    setTargetValue("-");
  };

  // const handleSwitch = () => {
  //   setExcludeDone((prevState) => !prevState); // トグルスイッチ
  // };

  const contents = search ? search.contents : props.contents;
  const totalCount = search ? search.totalCount : props.totalCount;

  return (
    <div className="px-4">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-start gap-x-2">
          <div>
            <Search size="20" />
          </div>
          <input
            type="search"
            name="query"
            className="border p-2"
            placeholder="キーワードを入力"
          />
          {/* <select
            className="self-stretch border"
            value={categoryValue}
            onChange={handleCategorySelectChange}
          >
            {props.categoryList.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select> */}
          {/* <select
            className="self-stretch border"
            value={targetValue}
            onChange={handleTargetSelectChange}
          >
            {targets.map((target) => (
              <option key={target} value={target}>
                {target}
              </option>
            ))}
          </select> */}
          <Select
            defaultValue={categoryValue}
            value={categoryValue}
            onValueChange={setCategoryValue}
          >
            <SelectTrigger className="w-[180px] text-slate-900 dark:text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {props.categoryList.map((category) => (
                <SelectItem
                  key={category.id}
                  value={category.id}
                  className="text-black dark:text-white"
                >
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            defaultValue={targetValue}
            value={targetValue}
            onValueChange={setTargetValue}
          >
            <SelectTrigger className="w-[180px] text-slate-900 dark:text-white">
              <SelectValue placeholder="Target" />
            </SelectTrigger>
            <SelectContent>
              {targets.map((target) => (
                <SelectItem
                  key={target}
                  value={target}
                  className="text-black dark:text-white"
                >
                  {target}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <button type="submit" className="btn-primary btn whitespace-nowrap">
            検索
          </button>
          <button
            type="reset"
            className="btn-outline btn whitespace-nowrap"
            onClick={handleReset}
          >
            リセット
          </button>
          {/* <button
            className="whitespace-nowrap rounded border border-blue-500 bg-transparent py-2 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white disabled:opacity-75"
            onClick={() => handleSwitch()}
          >
            完了除外 {excludeDone ? "ON" : "OFF"}
          </button> */}
          <Switch
            id="exclude-done"
            checked={excludeDone}
            onCheckedChange={setExcludeDone}
          />
          <Label htmlFor="exclude-done" className="whitespace-nowrap">
            完了除外 {excludeDone ? "ON" : "OFF"}
          </Label>
        </div>
      </form>
      <p className="text-xm p-2">{`${
        search ? "検索結果" : "記事の総数"
      }:${totalCount}`}</p>
      <ul className="space-y-4 [&>*]:bg-white [&>*]:p-0">
        {contents.map((content) => {
          return (
            <li key={content.id}>
              <Link
                href={`${getPath("POST", content.id)}`}
                passHref
                className="group mx-auto block space-y-3 bg-white p-6 shadow ring-1 ring-slate-900/5 hover:bg-sky-700 hover:ring-sky-500"
              >
                <p className="text-sm font-semibold text-black group-hover:text-white">
                  {content.title}
                </p>
                <p className="text-sm text-slate-900 group-hover:text-white">
                  {content.caption}
                </p>
                {content.target && (
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-white">
                    ターゲット：{content.target[0]}
                  </p>
                )}
                {content.done && (
                  <p className="text-sm font-semibold text-slate-900 group-hover:text-white">
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
