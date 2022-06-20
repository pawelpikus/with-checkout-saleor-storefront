import { NextApiHandler } from "next";

const handler: NextApiHandler = async (request, response) => {
  // eslint-disable-next-line no-console
  console.log(request.body);

  response.json({ success: true });
};

export default handler;
