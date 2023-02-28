import { getServerSession } from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "./[...nextauth]";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    res.status(200).send({
      content:
        "This is protected content. You can access this content because you are signed in.",
    });
  } else {
    res.status(401).send({
      error:
        "You must be signed in to view the protected content on this page.",
    });
  }
};
