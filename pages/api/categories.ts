import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const categoriesResponse = await getCategoryList({
  //   offset: 0,
  //   limit: 100,
  // });

  const categoriesResponse = fetch(
    `https://${process.env.MICROCMS_SERVICE_DOMAIN}.micro.microcms.io/api/v1/categories`,
    {
      headers: {
        "X-MICROCMS-API-KEY": process.env.MICROCMS_API_KEY,
      },
    }
  ).then((res) => res.json());

  res.status(200).json(categoriesResponse);
};

export default handler;
