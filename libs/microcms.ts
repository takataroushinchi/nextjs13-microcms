import type {
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

//ブログの型定義
export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type Categories = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Category[];
};

export type Blog = {
  id: string;
  title: string;
  content: string;
  eyecatch: MicroCMSImage;
  done: boolean;
  category: Category[];
  createAt: string;
} & MicroCMSDate;

export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

type Body = {
  fieldId: "richlink" | "markdown" | "richeditor";
  // richeditor
  richText: string;
  // richlink
  title: string;
  url: string;
  image: MicroCMSImage;
  // markdown
  markdownText: string;
} & MicroCMSDate;

type Topic = {
  fieldId: "tech" | "note";
  title: string;
  body: Body[];
};

export type Post = {
  id: string;
  title: string;
  caption: string;
  body: string;
  target: string[];
  done: boolean;
  topic: Topic[];
  createAt: string;
};

export type Posts = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Post[];
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client.get<BlogResponse>({
    endpoint: "blogs",
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return listData;
};

// ブログの詳細を取得
export const getDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  // データの取得が目視しやすいよう明示的に遅延効果を追加
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return detailData;
};

// カテゴリ一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client.get<Categories>({
    endpoint: "categories",
    queries,
  });

  return listData;
};

// ブログ一覧を取得
export const getBlogList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Blog>({
    endpoint: "blogs",
    queries,
  });

  return listData;
};

// ブログの詳細を取得
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.get<Blog>({
    endpoint: "blogs",
    contentId,
    queries,
  });

  return detailData;
};

// ポスト一覧を取得
export const getPostList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Post>({
    endpoint: "post",
    queries,
  });

  return listData;
};

// ポストの詳細を取得
export const getPostDetail = async (contentId: string) => {
  const detailData = await client.getListDetail<Post>({
    endpoint: "post",
    contentId,
  });

  return detailData;
};
