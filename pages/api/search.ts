import { getPostList } from "lib/microcms";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const postResponse = await getPostList({
    q: req.body.q,
    filters: req.body.filters,
    fields: "id,title,caption,target,done,category",
    offset: 0,
    limit: 100,
  });

  res.status(200).json(postResponse);
};

export default handler;
