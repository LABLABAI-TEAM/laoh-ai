import { setCookie } from "@/utils/cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  setCookie(res, "Next.js", "api-middleware", { path: "/", maxAge: 2600000 });
  res.end("Hello World");
}
